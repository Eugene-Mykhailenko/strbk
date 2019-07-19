import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Container, Row, Col } from '../src/components/Grid';
import Logo from '../src/components/Logo/Logo';
import Button from '../src/components/Button/Button';

storiesOf('Grid', module).add(
  'Grid',
  withInfo({
    text: `Grid component allows to layout and align
    content using a series of containers, rows, and columns.`,
    inline: true,
    propTablesExclude: [Button, Logo],
  })(() => (
    <Container>
      <Row>
        <Col alignX="start" alignY="center" position="left">
          <div style={{ background: 'rgb(173, 173, 255)' }}>
            <Button intent="simple" icon="UII_BurgerMenu" />
            <Button intent="simple" icon="UII_Search" />
          </div>
        </Col>
        <Col alignX="center">
          <div style={{ background: 'rgb(173, 173, 255)' }}>
            <Logo width={100} />
          </div>
        </Col>
        <Col alignX="end" alignY="center" position="right">
          <div style={{ background: 'rgb(173, 173, 255)' }}>
            <Button intent="primary" size="sm" text="Login" />
          </div>
        </Col>
      </Row>
    </Container>
  )),
);
