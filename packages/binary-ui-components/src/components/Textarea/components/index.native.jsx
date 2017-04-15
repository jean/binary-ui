import React from 'react';
import TextareaWrapperStyled from '../components-styled/TextareaWrapperStyled';
import TextareaInput from './TextareaInput';
import ActionListItemIcon from '../../ActionListItemIcon';
import { getHighlightEditStyle } from '../../../utils/styles-api';

const propTypes = {
  isValid: React.PropTypes.bool,
  renderIcon: React.PropTypes.func,
  value: React.PropTypes.string.isRequired,
  onBlur: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onTextChange: React.PropTypes.func.isRequired,
  onMoreClick: React.PropTypes.func,
};

const defaultProps = {
  isValid: true,
  renderIcon: undefined,
  onBlur: undefined,
  onFocus: undefined,
  onTextChange: undefined,
  onMoreClick: undefined,
};

export default class Textarea extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.onMoreClick = this.onMoreClick.bind(this);
    this.onSetFocus = this.onSetFocus.bind(this);
  }

  onTextChange(value) {
    const { onTextChange } = this.props;
    if (onTextChange) {
      onTextChange(value);
    }
  }

  onMoreClick() {
    const { onMoreClick } = this.props;
    if (onMoreClick) {
      onMoreClick();
    }
  }

  onSetFocus(isActive) {
    if (this.state.isActive === isActive) {
      return;
    }
    this.setState({
      isActive,
    });
  }

  render() {
    const {
      isValid,
      renderIcon,
      onMoreClick,
      onTextChange,
      ...props,
    } = this.props;
    const { isActive } = this.state;
    return (
      <TextareaWrapperStyled
        style={getHighlightEditStyle(true, isValid, isActive, undefined)}
      >
        <TextareaInput
          multiline
          editable
          {...props}
          onChangeText={this.onTextChange}
          onSetFocus={this.onSetFocus}
        />
        {renderIcon && (
          <ActionListItemIcon renderIcon={renderIcon} onClick={this.onMoreClick} />
        )}
      </TextareaWrapperStyled>
    );
  }
}

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;
