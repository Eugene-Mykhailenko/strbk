import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { boolean } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import Tabs from '../src/components/Tabs/Tabs';
import storyStyles from './Stories.scss';

const addState = withState({ activeTabId: 1 });
const addInfo = withInfo({
  text: `Tabs component: a single content area with multiple panels, 
  each associated with a header in a list.`,
  inline: true,
});
const props = {
  tabs: [
    {
      id: 1,
      title: 'Top Matches',
    },
    {
      id: 2,
      title: 'Soon in LIVE',
    },
    {
      id: 3,
      title: 'Express',
    },
    {
      id: 4,
      title: 'Ordinary',
    },
  ],
};

/* eslint-disable-next-line react/prop-types */
const wrapper = ({ store }) => (
  <div className={storyStyles.container}>
    <div className={storyStyles.col}>
      <Tabs
        {...store.state}
        {...props}
        wide={boolean('tab-wide', false)}
        onClick={(activeTabId) => store.set({ activeTabId })}
      />
    </div>
  </div>
);

storiesOf('Tabs', module).add('Tabs', addState(addInfo(wrapper)));
