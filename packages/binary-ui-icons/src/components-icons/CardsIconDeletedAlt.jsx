import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M400,113.3l-80,0l0,-20c0,-16.2 -13.1,-29.3 -29.3,-29.3l-69.5,0c-16.1,0 -29.2,13.1 -29.2,29.3l0,20l-80,0l0,14.7l21.1,0l23.6,290.7c0,16.2 13.1,29.3 29.3,29.3l141,0c16.2,0 29.3,-13.1 29.3,-29.3l23.3,-290.7l20.4,0l0,-14.7Zm-193.4,-20c0,-8.1 6.6,-14.7 14.6,-14.7l69.5,0c8.1,0 14.6,6.6 14.6,14.7l0,20l-98.7,0l0,-20l0,0Zm135,324.6l0,0.8c0,8.1 -6.6,14.7 -14.6,14.7l-141,0c-8.1,0 -14.6,-6.6 -14.6,-14.7l0,-0.4l0,-0.4l-23.7,-289.9l217.2,0l-23.3,289.9Z"
      />
      <Shape d="M263,159.976l-14,0.024l0.421,241l14,-0.025l-0.421,-240.999Z" />
      <Shape d="M320,160l-14.6,0l-10.7,241l14.6,0l10.7,-241Z" />
      <Shape d="M206.5,160l-14.5,0l10.7,241l14.6,0l-10.8,-241Z" />
    </Group>
  )
);