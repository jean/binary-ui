import PropTypes from 'prop-types';
import React from 'react';

const DEFAULT_SIZE = 512;
const DURATION_MSEC = 20;
const ROTATION_INTERVAL = 1;

const propTypes = {
  isAnimating: PropTypes.bool,
  size: PropTypes.number,
  Group: PropTypes.func.isRequired,
  Shape: PropTypes.func.isRequired,
  Surface: PropTypes.func.isRequired,
};

const defaultProps = {
  isAnimating: true,
  size: 20,
};

export default class LogoSvg extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rotation: 0,
    };
    this.onTick = this.onTick.bind(this);
  }

  componentDidMount() {
    if (!this.props.isAnimating) {
      return;
    }
    this.setInterval();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isAnimating !== nextProps.isAnimating && nextProps.isAnimating === true) {
      this.setInterval();
      return;
    }
    if (this.props.isAnimating !== nextProps.isAnimating && nextProps.isAnimating === false) {
      this.setNoInterval();
    }
  }

  componentWillUnmount() {
    this.setNoInterval();
  }

  onTick() {
    this.setState((prevState) => ({
      rotation: prevState.rotation + 360 / (DURATION_MSEC / ROTATION_INTERVAL),
    }));
  }

  setInterval() {
    this.interval = window.setInterval(this.onTick, ROTATION_INTERVAL);
  }

  setNoInterval() {
    window.clearInterval(this.interval);
  }

  render() {
    const { size, Group, Shape, Surface } = this.props;
    const { rotation } = this.state;
    const scale = size / DEFAULT_SIZE;
    /* eslint-disable max-len */
    return (
      <Surface height={size} width={size}>
        <Group scale={scale}>
          <Shape
            d="M254,65.51c0.666,-0.007 1.333,-0.01 2,-0.01c105.14,0 190.5,85.36 190.5,190.5c0,105.14 -85.36,190.5 -190.5,190.5c-105.14,0 -190.5,-85.36 -190.5,-190.5c0,-104.138 84.741,-188.884 188.5,-190.49l0,25.002c-89.96,1.602 -163.5,75.148 -163.5,165.488c0,91.342 74.158,165.5 165.5,165.5c91.342,0 165.5,-74.158 165.5,-165.5c0,-91.342 -74.158,-165.5 -165.5,-165.5c-0.668,0 -1.334,0.004 -2,0.012l0,-25.002Z"
            fill="#d3d3d3"
          />
          <Group originX={DEFAULT_SIZE / 2} originY={DEFAULT_SIZE / 2} rotation={rotation} >
            <Shape
              d="M256,65.5c105.14,0 190.5,85.36 190.5,190.5l0,0c0,6.901 -5.603,12.504 -12.504,12.504c-6.901,0 -12.504,-5.603 -12.504,-12.504l0,0c0,-0.141 0.003,-0.282 0.007,-0.422c-0.227,-91.003 -74.062,-164.843 -165.064,-165.077c-0.144,0.005 -0.289,0.007 -0.435,0.007c-6.901,0 -12.504,-5.603 -12.504,-12.504l0,0c0,-6.901 5.603,-12.504 12.504,-12.504l0,0Z"
              fill="#000"
            />
          </Group>
        </Group>
      </Surface>
    );
    /* eslint-enable max-len */
  }
}

LogoSvg.propTypes = propTypes;
LogoSvg.defaultProps = defaultProps;
