import { BINARY_COLOR_RED_40 } from 'binary-ui-styles';
import styled from 'styled-components/native';
import { LIST_ITEM_HALF_HEIGHT } from '../../../utils/styles';

export default styled.View`
  ${props => (props.progress >= 90
    ? `background-color: ${BINARY_COLOR_RED_40}`
    : 'background-color: #000'
  )}
  height: 1px;
  position: absolute;
  top: ${LIST_ITEM_HALF_HEIGHT};
  width: ${props => props.progress}%;
`;
