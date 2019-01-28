import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from './Button';

const LinkButton = (props) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    id,
    onClick,
    ...rest
  } = props;
  return (
    <Button
      {...rest}
      id={id}
      onClick={(event) => {
        if (onClick && onClick(event));
        history.push(to);
      }}
    />
  );
};

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  id: PropTypes.string,
  history: PropTypes.objectOf(PropTypes.string).isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  match: PropTypes.objectOf(PropTypes.string).isRequired,
  staticContext: PropTypes.objectOf(PropTypes.string).isRequired,
  onClick: PropTypes.func
};

LinkButton.defaultProps = {
  onClick: () => {},
  id: null
};

export default withRouter(LinkButton);
