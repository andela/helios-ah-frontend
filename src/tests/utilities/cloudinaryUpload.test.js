import sinon from 'sinon';
import chai from 'chai';
import uploadImageCloudinary from '../../utilities/cloudinaryUpload';
import * as apiRequests from '../../utilities/apiRequests';

const { expect } = chai;


describe('Test for image upload to cloudinary', () => {
  it('return the url of the image uploaded to cloudinary', async () => {
    const response = {
      secure_url: 'imaginaryimageurl.com/theimage.png'
    };
    const stubUploadImageCloudinary = sinon.stub(apiRequests, 'CloudImage')
      .returns(response);
    const expectedImageUrl = await uploadImageCloudinary('64bitImageUrl');
    expect(expectedImageUrl).to.equal('imaginaryimageurl.com/theimage.png');
    stubUploadImageCloudinary.restore();
  });
});
