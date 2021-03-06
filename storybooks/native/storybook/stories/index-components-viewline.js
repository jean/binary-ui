import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import IconMore from 'binary-ui-icons/binary/More';
import Viewline from 'binary-ui-components/mobile/Viewline';

storiesOf('binary-ui-components/mobile', module)
  .add('Viewline', () => (
    <View>
      <Viewline>
        <Text>Viewline without icon</Text>
      </Viewline>
      <Viewline
        renderIcon={(props) => (<IconMore {...props} />)}
        onIconPress={action()}
      >
        <Text>Viewline with icon</Text>
      </Viewline>
      <Viewline isEdit>
        <Text>Viewline with underline</Text>
      </Viewline>
      <Viewline isDisabled >
       <Text>Viewline disabled</Text>
      </Viewline>
      <Viewline
        renderIcon={(props) => (<IconMore {...props} />)}
        onIconPress={action()}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            backgroundColor: "hsla(0, 0%, 0%, 0.05)",
            padding: 10,
            borderRadius: 15,
            alignSelf: "flex-start",
          }}
        >
          <Text>Viewline with complex styles</Text>
        </TouchableOpacity>
      </Viewline>
    </View>
  ));
