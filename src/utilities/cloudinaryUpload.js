import axios from 'axios'


const uploadImageCloudinary = async (value) => {
    try {
        const formData = new FormData();
        formData.append('upload_preset', 'zeooiv7x');
        formData.append('file', value);
        const response = await axios.post('https://api.cloudinary.com/v1_1/ah-med/image/upload', formData);
        return response.data.secure_url;
    }
    catch (error) {
        console.log('clodinary error ==>', error.response)
    }
}

export default uploadImageCloudinary;
