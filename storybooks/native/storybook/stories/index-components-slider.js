import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Add from 'binary-ui-icons/binary/Add';
import Remove from 'binary-ui-icons/binary/Remove';

import Slider from 'binary-ui-components/mobile/Slider';

class SliderDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      position: 0,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(position) {
    this.setState(() => ({
      position,
    }));
  }

  render() {
    const { position } = this.state;
    return (
      <Slider
        position={position}
        renderIconLeft={() => (<Remove />)}
        renderIconRight={() => (<Add />)}
        onChange={this.onChange}
      />
    );
  }
}

storiesOf('binary-ui-components', module)
  .add('Slider', () => (
    <SliderDemo />
  ));
