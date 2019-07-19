import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withState } from '@dump247/storybook-state';

/* eslint-disable-next-line */
import SportsNavigation from '../src/components/SportsNavigation/SportsNavigation';
import storyStyles from './Stories.scss';

const addState = withState({ activeItemId: 'soccer' });
const addInfo = withInfo({
  text: `SportsNavigation component: useful in feed line.`,
  inline: true,
});
const props = {
  items: [
    {
      id: 'soccer',
      title: 'Soccer',
      icon: 'SI_Soccer',
    },
    {
      id: 'tennis',
      title: 'Tennis',
      icon: 'SI_Tennis',
    },
    {
      id: 'volleyball',
      title: 'Volleyball',
      icon: 'SI_BeachVolleyball',
    },
    {
      id: 'basketball',
      title: 'Basketball',
      icon: 'SI_Basketball',
    },
    {
      id: 'baseball',
      title: 'Baseball',
      icon: 'SI_Baseball',
    },
  ],
};

/* eslint-disable-next-line react/prop-types */
const wrapper = ({ store }) => (
  <div className={storyStyles.container}>
    <div className={storyStyles.col}>
      <SportsNavigation
        {...store.state}
        {...props}
        onClick={(event, item) => store.set({ activeItemId: item.id })}
      />
    </div>
  </div>
);

storiesOf('SportsNavigation', module).add(
  'SportsNavigation',
  addState(addInfo(wrapper)),
);
