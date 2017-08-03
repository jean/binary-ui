import PropTypes from 'prop-types';
import React from 'react';
import ActionableIcon from '../ActionableIcon';
import ActionWrapper from '../ActionWrapper';

const propTypes = {
  color: PropTypes.string,
  isDisabled: PropTypes.bool,
  size: PropTypes.number,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  color: undefined,
  isDisabled: false,
  size: undefined,
};

const ActionIcon = ({
  color,
  isDisabled,
  size,
  renderIcon,
  ...props,
}) => (
  <ActionWrapper isDisabled={isDisabled} {...props} >
    <ActionableIcon
      color={color}
      isDisabled={isDisabled}
      size={size}
      renderIcon={renderIcon}
    />
  </ActionWrapper>
);

ActionIcon.propTypes = propTypes;
ActionIcon.defaultProps = defaultProps;

export default ActionIcon;
