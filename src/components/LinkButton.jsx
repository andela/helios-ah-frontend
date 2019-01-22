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
    onClick,
    ...rest
  } = props;
  return (
    <Button
      {...rest}
      onClick={(event) => {
        if (onClick && onClick(event));
        history.push(to);
      }}
    />
  );
};

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  history: PropTypes.objectOf(PropTypes.string).isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  match: PropTypes.objectOf(PropTypes.string).isRequired,
  staticContext: PropTypes.objectOf(PropTypes.string).isRequired,
  onClick: PropTypes.func
};

LinkButton.defaultProps = {
  onClick: () => {}
};

export default withRouter(LinkButton);
