import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withState } from '@dump247/storybook-state';
import { boolean } from '@storybook/addon-knobs';

import TabBar from '../src/components/TabBar/TabBar';
import storyStyles from './Stories.scss';

const addState = withState({ activeTabId: 'sport' });
const addInfo = withInfo({ text: `TabBars component:` });
const props = {
  items: [
    {
      id: 'sport',
      title: 'Спорт',
      icon: 'TbI_Sports',
    },
    {
      id: 'live',
      title: 'Live Ставки',
      icon: 'TbI_Live',
    },
    {
      id: 'favorites',
      title: 'Избранное',
      icon: 'TbI_Favorites',
      counter: 3,
    },
    {
      id: 'bets',
      title: 'Ставки',
      icon: 'TbI_MyBets',
    },
    {
      id: 'games',
      title: 'Игры',
      icon: 'TbI_Games',
    },
  ],
};

/* eslint-disable-next-line react/prop-types */
const wrapper = ({ store }) => (
  <div className={storyStyles.container}>
    <div className={storyStyles.col}>
      <TabBar
        {...store.state}
        {...props}
        isHidden={boolean('isHidden', false)}
      />
    </div>
  </div>
);

storiesOf('TabBar', module).add('TabBar', addState(addInfo(wrapper)));
