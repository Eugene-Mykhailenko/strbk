import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import storyStyles from './Stories.scss';

import Icon, { iconNames } from '../src/components/Icon/Icon';

const icons = iconNames.map((iconName) => (
  <Icon style={{ marginRight: 10 }} width="35" height="35" glyph={iconName} />
));

storiesOf('Icon', module)
  .add(
    'Icon',
    withInfo({
      text: `Icon component can be used for 
        rendering any SVG icon from predefined icons set.`,
      inline: true,
    })(() => (
      <div className={storyStyles.container}>
        <Icon width="25" height="25" glyph="UII_Bonuses" />
      </div>
    )),
  )
  .add('Icons set', () => (
    <div className={storyStyles.container}>
      <div className={storyStyles.col}>
        <h3 className={storyStyles.title}>All Icons</h3>
        <ul className={storyStyles['list-two-col']}>
          {icons.map((icon) => (
            <li className={storyStyles['list-item']} key={Math.random()}>
              {icon}
              {icon.props.glyph}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ));
