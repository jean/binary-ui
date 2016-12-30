import autobind from 'autobind-decorator';
import React from 'react';
import ActionableListItemIcon from '../../../ActionableListItemIcon';

const propTypes = {
  color: React.PropTypes.string,
  isDisabled: React.PropTypes.bool,
  size: React.PropTypes.number,
  onMouseEnter: React.PropTypes.func,
  onMouseLeave: React.PropTypes.func,
  onTapDown: React.PropTypes.func,
};

const defaultProps = {};

export default class ActionListItemIcon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isHover: false,
    };
    this.onTapUp = () => { this.onSetActive(false); };
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.onTapUp);
    window.addEventListener('touchend', this.onTapUp);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onTapUp);
    window.removeEventListener('touchend', this.onTapUp);
  }

  @autobind
  onSetActive(isActive) {
    if (this.state.isActive === isActive) {
      return;
    }
    this.setState({
      isActive,
    });
  }

  @autobind
  onSetHover(isHover) {
    this.setState({
      isHover,
    });
  }

  render() {
    const {
      isDisabled,
      onMouseEnter,
      onMouseLeave,
      onTapDown,
      ...props,
    } = this.props;
    const { isActive, isHover } = this.state;
    return (
      <ActionableListItemIcon
        isActive={isActive}
        isHover={isHover}
        isDisabled={isDisabled}
        onMouseDown={!isDisabled && ((e) => { this.onSetActive(true); if (onTapDown) { onTapDown(e); } })}
        onTouchStart={!isDisabled && ((e) => { this.onSetActive(true); if (onTapDown) { onTapDown(e); } })}
        onMouseEnter={!isDisabled && ((e) => { this.onSetHover(true); if (onMouseEnter) { onMouseEnter(e); } })}
        onMouseLeave={!isDisabled && ((e) => { this.onSetHover(false); if (onMouseLeave) { onMouseLeave(e); } })}
        {...props}
      />
    );
  }
}

ActionListItemIcon.propTypes = propTypes;
ActionListItemIcon.defaultProps = defaultProps;