import uploadImageCloudinary from '../utilities/cloudinaryUpload';
import { Put, Get } from '../utilities/apiRequests';
import {
  GET_A_USER,
  TOGGLE_BUTTON,
  UPDATE_FIELD,
  CLEAR_EDIT
} from '../actionTypes';

const token = 'QZ52YkdkSiSbvexK_ncaXTGBRdXBekVeGX_7P0ii2oo.9JTOwkzN5cDN1EjOiAHelJCLykjNykDO3QTNxojI0FWaiwiIplXYqFWZklmaiojIl1WYuJXZzVnIsIjOiUGbvJnIsISY1IGOjJGZjNmM4QWL4MWM40iMxcDNtEDZhZWL2UjYkNWNxMjI6ICZpJye.9JCVXpkI6ICc5RnIsIiN1IzUIJiOicGbhJye';
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
    const followingCount = followDetails.followingDetails.count;
    const followersCount = followDetails.followersDetails.count;
    return { followingCount, followersCount };
  } catch (error) {
    return error;
  }
};

export const getUserInfo = () => async (dispatch) => {
  try {
    const user = await Get(`/users/${userId}`);
    const { userDetails } = user;
    const follow = await getFollowDetails();
    userDetails.following = follow.followingCount;
    userDetails.followers = follow.followersCount;
    dispatch(fetchAUser(userDetails));
  } catch (error) {
    return error;
  }
};

export const updateProfile = editedFields => async (dispatch) => {
  try {
    if (editedFields.image) {
      editedFields.image = await uploadImageCloudinary(editedFields.image);
    }
    const {
      image, bio, firstname, lastname
    } = editedFields;
    const user = await Put('/users', {
      image, bio, firstname, lastname
    }, token);
    const { userDetails } = user;
    const follow = await getFollowDetails();
    userDetails.following = follow.followingCount;
    userDetails.followers = follow.followersCount;
    dispatch(clearEdit(true));
    dispatch(fetchAUser(userDetails));
  } catch (error) {
    return error;
  }
};
