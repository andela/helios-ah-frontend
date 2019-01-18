import axios from 'axios';
import uploadImageCloudinary from '../utilities/cloudinaryUpload';
import { Put, Get } from '../utilities/apiRequests';
import {
  GET_A_USER,
  TOGGLE_BUTTON,
  UPDATE_FIELD,
  CLEAR_EDIT
} from '../actionTypes';

const token = '4djnn7vW_In_EBIQEOr4wu7g6XjjYezzcn6COdC-2dj.9VDO1ITM5cDN1EjOiAHelJCL1gTM2IDO3QTNxojI0FWaiwiIplXYqFWZklmaiojIl1WYuJXZzVnIsIjOiUGbvJnIsISY1IGOjJGZjNmM4QWL4MWM40iMxcDNtEDZhZWL2UjYkNWNxMjI6ICZpJye.9JCVXpkI6ICc5RnIsIiN1IzUIJiOicGbhJye';
const userId = '315cdb56-fad1-4712-81c8-d82ccdbc8b5a';


const fetchAUser = user => ({
  type: GET_A_USER,
  user
});

export const editFields = (name, value) => ({
  type: UPDATE_FIELD,
  name,
  value
});

export const toggleButton = () => ({
  type: TOGGLE_BUTTON
});

export const clearEdit = status => ({
  type: CLEAR_EDIT,
  status
});

const getFollowDetails = async () => {
  try {
    const followDetails = await Get(`/users/${userId}/follow`);
    return followDetails.data;
  } catch (error) {
    return error;
  }
};

export const getUserInfo = () => async (dispatch) => {
  try {
    const user = await axios.Get(`/users/${userId}`);
    const follow = await getFollowDetails();
    user.data.following = follow.followingCount;
    user.data.followers = follow.followersCount;
    dispatch(fetchAUser(user.data));
  } catch (error) {
    return error;
  }
};

export const updateProfile = editedFields => async (dispatch) => {
  try {
    if (editedFields.image) {
      editedFields.image = await uploadImageCloudinary(editedFields.image);
    }
    const user = await Put('/users', token);
    const follow = await getFollowDetails();
    user.data.following = follow.followingCount;
    user.data.followers = follow.followersCount;
    dispatch(clearEdit(true));
    dispatch(fetchAUser(user.data));
  } catch (error) {
    return error;
  }
};
