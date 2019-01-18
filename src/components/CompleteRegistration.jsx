import React from 'react';
import PropTypes from 'prop-types';
import { Get } from '../utilities/apiRequests';

const CompleteRegistration = ({ location }) => {
  console.log('hello ==> ', location.search);
  const baseUrl = `/auth/complete_reg${location.search}`;
  console.log('base url is ==> ', baseUrl);
  Get(baseUrl).then(res => console.log('res is ==> ', res))
    .catch(err => console.log('err is ==> ', err));
  return (
    <div>
      <h1>Yeah!</h1>
    </div>
  );
};

CompleteRegistration.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default CompleteRegistration;
