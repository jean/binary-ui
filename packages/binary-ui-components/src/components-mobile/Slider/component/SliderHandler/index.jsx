import PropTypes from 'prop-types';
import React from 'react';
import SliderHandler from '../../components-styled/SliderHandler';
import validatePosition from '../../utils/position-validation';
import getPosition from '../../utils/position';
import { LIST_ITEM_HALF_HEIGHT } from '../../../../utils/styles';

const propTypes = {
  containerLeft: PropTypes.number.isRequired,
  containerWidth: PropTypes.number.isRequired,
  dragging: PropTypes.bool.isRequired,
  position: PropTypes.number.isRequired,
  onDraggingChanged: PropTypes.func.isRequired,
  onPositionChanged: PropTypes.func.isRequired,
};

const defaultProps = {};

export default class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.onGestureResponderStart = this.onGestureResponderStart.bind(this);
    this.onMouseResponderMove = this.onMouseResponderMove.bind(this);
    this.onTouchResponderMove = this.onTouchResponderMove.bind(this);
    this.onGestureResponderEnd = this.onGestureResponderEnd.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.onMouseResponderMove, true);
    window.addEventListener('touchmove', this.onTouchResponderMove, true);
    window.addEventListener('mouseup', this.onGestureResponderEnd);
    window.addEventListener('touchend', this.onGestureResponderEnd);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.onMouseResponderMove, true);
    window.removeEventListener('touchmove', this.onTouchResponderMove, true);
    window.removeEventListener('mouseup', this.onGestureResponderEnd);
    window.removeEventListener('touchend', this.onGestureResponderEnd);
  }

  onGestureResponderStart(e) {
    const { onDraggingChanged } = this.props;
    // prevent selecting text
    e.preventDefault();
    // parents don't need to know about this event
    e.stopPropagation();
    onDraggingChanged(true);
  }

  onMouseResponderMove(e) {
    const { dragging } = this.props;
    if (!dragging) {
      return;
    }
    // prevent selecting text
    e.preventDefault();
    // prevent any other movement
    e.stopImmediatePropagation();
    const { containerLeft, containerWidth, onPositionChanged } = this.props;
    const position = getPosition(
      containerLeft,
      e.clientX,
      containerWidth,
    );
    validatePosition(position, onPositionChanged);
  }

  onTouchResponderMove(e) {
    const { dragging } = this.props;
    if (!dragging) {
      return;
    }
    // prevent selecting text
    e.preventDefault();
    // prevent any other movement
    e.stopImmediatePropagation();
    const { containerLeft, containerWidth, onPositionChanged } = this.props;
    const position = getPosition(
      containerLeft,
      e.changedTouches[0].clientX,
      containerWidth,
    );
    validatePosition(position, onPositionChanged);
  }

  onGestureResponderEnd() {
    const { onDraggingChanged } = this.props;
    onDraggingChanged(false);
  }

  render() {
    const { containerWidth, position } = this.props;
    return (
      <SliderHandler
        styleTransformX={Math.round(position * containerWidth) - LIST_ITEM_HALF_HEIGHT / 2}
        styleTransformY={-LIST_ITEM_HALF_HEIGHT / 2}
        onMouseDown={this.onGestureResponderStart}
        onTouchStart={this.onGestureResponderStart}
      />
    );
  }
}

Slider.defaultProps = defaultProps;
Slider.propTypes = propTypes;
