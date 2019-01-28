/* eslint-env browser */

/* global
  FormData
*/
import { CloudImage } from './apiRequests';

const uploadImageCloudinary = async (value) => {
  try {
    const formData = new FormData();
    formData.append('upload_preset', 'zeooiv7x');
    formData.append('file', value);
    const response = await CloudImage(formData);
    return response.secure_url;
  } catch (error) {
    return null;
  }
};

export default uploadImageCloudinary;
