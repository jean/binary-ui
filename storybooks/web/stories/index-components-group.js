import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Remove from 'binary-ui-icons/binary/Remove';
import Add from 'binary-ui-icons/binary/Add';
import ArrowDown from 'binary-ui-icons/binary/ArrowDown';
import ArrowRight from 'binary-ui-icons/binary/ArrowRight';
import IconMore from 'binary-ui-icons/binary/More';
import ActionIcon from 'binary-ui-components/mobile/ActionIcon';
import Alert, { ALERT_TYPES } from 'binary-ui-components/mobile/Alert';
import Button from 'binary-ui-components/mobile/Button';
import Group from 'binary-ui-components/mobile/Group';
import ImagePicker from 'binary-ui-components/mobile/ImagePicker';
import ProgressBar from 'binary-ui-components/mobile/ProgressBar';
import Section from 'binary-ui-components/mobile/Section';
import Select from 'binary-ui-components/mobile/Select';
import Slider from 'binary-ui-components/mobile/Slider';
import Switch from 'binary-ui-components/mobile/Switch';
import Textarea from 'binary-ui-components/mobile/Textarea';
import Tooltip from 'binary-ui-components/mobile/Tooltip';
import Input, { INPUT_FIELD_TYPES } from 'binary-ui-components/mobile/Input';
import Textline from 'binary-ui-components/mobile/Textline';
import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

setAddon(infoAddon);

const text = 'Important: for compatibility set container width in pixels!';

storiesOf('binary-ui-components/mobile', module)
  .addWithInfo('Group', () => (
    <div>
      <Group
        renderLeft={() => (
          <Textline isBold>
            Left text
          </Textline>
        )}
        renderRight={() => (
          <Input
            placeholder="Input"
            type={INPUT_FIELD_TYPES.TEL}
            value=""
            renderIcon={(props) => (<IconMore {...props} />)}
            onChange={action()}
            onIconClick={action()}
          />
        )}
      />
      <Group
        renderLeft={() => (null)}
        renderRight={() => (null)}
      />
      <Group
        renderLeft={() => (<Textline isBold >Label</Textline>)}
        renderRight={() => (<Textline isEdit >+8227073791</Textline>)}
      />
      <Group
        renderLeft={() => (<Textline isBold >Label</Textline>)}
        renderRight={() => (<Button label="Button" isEdit renderIcon={(props) => (<ArrowDown {...props} />)} onClick={action()} />)}
      />
      <Button label="Button" isEdit renderIcon={(props) => (<ArrowDown {...props} />)} onClick={action()} />
    </div>
  ));
