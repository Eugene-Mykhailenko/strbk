import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import styles from './Stories.scss';
import Logo from '../src/components/Logo/Logo';

const addInfo = withInfo({
  text: `Logo component to mobile or desktop`,
  inline: true,
});

const wrapper = () => (
  <div className={styles.container}>
    <div className={styles.col}>
      <Logo
        link={text('Link href:', '#')}
        width={number('width:', 188)}
        height={number('height:')}
        imageUrl={text(
          'Image URL:',
          'https://media.licdn.com/dms/image/C560BAQFt7d4CSp-Ipg/company-logo_200_200/0?e=2159024400&v=beta&t=G0mATzHeqt9aCqaSS1iDdeOBJkyrmUg7eDZU3ZdJ-Eo',
        )}
        onClick={action('On click handler')}
      />
    </div>
  </div>
);

storiesOf('Logo', module).add('Logo', addInfo(wrapper));
