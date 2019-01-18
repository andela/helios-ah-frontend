import sinon from 'sinon';
import chai from 'chai';
import axios from 'axios';
import uploadImageCloudinary from '../../utilities/cloudinaryUpload';

const { expect } = chai;


describe('Test for image upload to cloudinary', () => {
  it('return the url of the image uploaded to cloudinary', async () => {
    const response = {
      data: {
        secure_url: 'imaginaryimageurl.com/theimage.png'
      }
    };
    const stubUploadImageCloudinary = sinon.stub(axios, 'post')
      .returns(response);
    const expectedImageUrl = await uploadImageCloudinary('64bitImageUrl');
    expect(expectedImageUrl).to.equal('imaginaryimageurl.com/theimage.png');
    stubUploadImageCloudinary.restore();
  });
});
