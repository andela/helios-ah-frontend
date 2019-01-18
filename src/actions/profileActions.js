import axios from 'axios';
import uploadImageCloudinary from '../utilities/cloudinaryUpload';
import { 
    GET_A_USER, 
    TOGGLE_BUTTON, 
    UPDATE_FIELD, 
    CLEAR_EDIT
} from '../actionTypes';

const baseUrl = 'http://5c3dabf3a9d04f0014a98a5e.mockapi.io/api/v1'

const fetchAUser = (user) => {
    return {
        type: GET_A_USER,
        user
    }
};

export const editFields = (name, value) => {
    return {
        type: UPDATE_FIELD,
        name, 
        value
    }
};

export const toggleButton = () => {
   return {
       type: TOGGLE_BUTTON
    }
}

export const clearEdit = (status) => {
    return {
        type: CLEAR_EDIT,
        status
    }
};

const getFollowDetails = async () => {
    try {
        const followDetails = await axios.get(`${baseUrl}/follow/5`);
        return followDetails.data;
    }
    catch (error) {
        console.log(error);
    }
}

export const getUserInfo = () => async (dispatch) => {
    try {
        const user = await axios.get(`${baseUrl}/users/5`);
        const follow = await getFollowDetails();
        user.data['following'] = follow.followingCount;
        user.data['followers'] = follow.followersCount;
        dispatch(fetchAUser(user.data));
    }
    catch (error) {
        console.log(error);
    }
}

export const updateProfile = (editFields) => async (dispatch) => {
    try {
        if (editFields.image) {
            editFields.image = await uploadImageCloudinary(editFields.image);
        }
        const user = await axios.put(`${baseUrl}/users/5`, editFields);
        const follow = await getFollowDetails();
        user.data['following'] = follow.followingCount;
        user.data['followers'] = follow.followersCount;
        dispatch(clearEdit(true));
        dispatch(fetchAUser(user.data));
    }
    catch (error) {
        console.log(error.response)
    }
}
