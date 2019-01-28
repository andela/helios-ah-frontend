import uploadImageCloudinary from '../utilities/cloudinaryUpload';
import { Put, Get } from '../utilities/apiRequests';
import {
  GET_A_USER,
  TOGGLE_BUTTON,
  UPDATE_FIELD,
  CLEAR_EDIT
} from '../actionTypes';

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

const getFollowDetails = async (userId) => {
  try {
    const followDetails = await Get(`/users/${userId}/follow`);
    const followingCount = followDetails.followingDetails.count;
    const followersCount = followDetails.followersDetails.count;
    return { followingCount, followersCount };
  } catch (error) {
    return error;
  }
};

export const getUserInfo = userId => async (dispatch) => {
  try {
    const user = await Get(`/users/${userId}`);
    const { userDetails } = user;
    const follow = await getFollowDetails(userId);
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
    });
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
