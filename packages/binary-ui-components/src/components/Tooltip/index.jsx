import PropTypes from 'prop-types';
import React from 'react';
import TooltipStyled from './components-styled/TooltipStyled';

const propTypes = {
  label: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(['bottom-right', 'bottom-left']),
  targetId: PropTypes.string.isRequired,
};

const defaultProps = {
  placement: 'bottom-right',
};

export default class Tooltip extends React.Component {

  constructor(props) {
    super(props);
    this.cachedTargetDom = null;
    this.cachedParentDom = null;
    this.onRef = this.onRef.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const { targetId } = this.props;
    if (targetId !== newProps.targetId) {
      this.cachedTargetDom = this.getTarget(newProps.targetId);
    }
  }

  onRef(node) {
    if (!node) {
      this.cachedParentDom = null;
      this.cachedTargetDom = null;
      return;
    }
    const { targetId } = this.props;
    this.cachedParentDom = this.getParent(node);
    this.cachedTargetDom = this.getTarget(targetId);
  }

  getParent(node) {
    return node.parentNode;
  }

  getTarget(targetId) {
    return document.getElementById(targetId);
  }

  render() {
    const { label, placement } = this.props;
    return (
      <TooltipStyled
        innerRef={this.onRef}
        parentDOM={this.cachedParentDom}
        placement={placement}
        targetDOM={this.cachedTargetDom}
      >
        {label}
      </TooltipStyled>
    );
  }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;