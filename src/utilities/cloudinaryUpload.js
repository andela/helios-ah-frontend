import { CloudImage } from './apiRequests';

const uploadImageCloudinary = async (value) => {
  try {
    // eslint-disable-next-line no-undef
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
