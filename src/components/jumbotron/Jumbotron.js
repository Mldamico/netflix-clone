import React from 'react';
import {
  InnerStyles,
  ContainerStyles,
  PaneStyles,
  TitleStyles,
  SubTitleStyles,
  ImageStyles,
  ItemStyles,
} from './styles/JumbotronStyles';

export const Jumbotron = ({ children, direction = 'row', ...restProps }) => {
  return (
    <ItemStyles {...restProps}>
      <InnerStyles direction={direction}> {children}</InnerStyles>
    </ItemStyles>
  );
};

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <ContainerStyles {...restProps}>{children}</ContainerStyles>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <PaneStyles {...restProps}>{children}</PaneStyles>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <TitleStyles {...restProps}>{children}</TitleStyles>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitleStyles {...restProps}>{children}</SubTitleStyles>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <ImageStyles {...restProps} />;
};
