import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components';
import { TAP_HIGHLIGHT_COLOR } from '../utils/styles';

export default styled.div`
  align-items: center;
  box-sizing: border-box;
  cursor: default;
  display: flex;
  flex-direction: row-reverse;
  height: ${LIST_ITEM_HEIGHT}px;
  padding-left: 10px;
  width: 100%;
  ${props => (
    props.isTapHighlight ? `&:active { background-color: ${TAP_HIGHLIGHT_COLOR}; }` : undefined
  )}
`;
