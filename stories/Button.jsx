import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, select, boolean } from '@storybook/addon-knobs';

import Button from '../src/components/Button/Button';

import styles from './Stories.scss';

storiesOf('Button', module)
  .add(
    'Button',
    withInfo({
      text: `Button component to follow style guide. See the usage below`,
      inline: true,
    })(() => (
      <div className={styles.container}>
        <div className={styles.col}>
          <Button
            text={text('Button text:', 'Button text')}
            intent={select('Style variant:', [
              'main',
              'primary',
              'secondary',
              'cancel',
              'default',
            ])}
            textColor={text('Text color:', '')}
            size={select('Button size:', ['md', 'sm'])}
            block={boolean('block Button:', false)}
            isLoading={boolean('isLoading Button:', false)}
            disabled={boolean('disabled Button:', false)}
            icon={text('Icon name:', '')}
            iconSize={text('Icon Size:')}
            onClick={action('On click handler')}
          />
        </div>
      </div>
    )),
  )
  .add(
    'Buttons examples',
    withInfo({
      inline: true,
      source: false,
    })(() => (
      <div className={styles.container}>
        <div className={styles.col}>
          <h2 className={styles.title}>Button Icon.</h2>
          <div className={Button.styles['btn-row']}>
            <Button intent="simple" icon="UII_BurgerMenu" />
          </div>

          <h2 className={styles.title}> Button with Icon.</h2>
          <div className={Button.styles['btn-row']}>
            <Button text="Button text" icon="UII_Bonuses" iconSize={17} />
          </div>

          <h2 className={styles.title}>Button small.</h2>
          <div className={Button.styles['btn-row']}>
            <Button
              text="Button text"
              size="sm"
              icon="UII_Bonuses"
              iconSize={15}
            />
          </div>

          <h2 className={styles.title}>Button loading.</h2>
          <div className={Button.styles['btn-row']}>
            <Button text="Button text" isLoading />
          </div>

          <h2 className={styles.title}>Button disabled.</h2>
          <div className={Button.styles['btn-row']}>
            <Button
              text="Button text"
              icon="UII_Bonuses"
              iconSize={17}
              disabled
              isLoading={false}
            />
          </div>

          <h2 className={styles.title}>Buttons Block.</h2>
          <Button text="Button text" intent="main" block />
          <Button text="Button text" intent="primary" block />

          <h2 className={styles.title}>Default buttons in button row </h2>
          <div className={Button.styles['btn-row']}>
            <Button text="Button text" intent="main" />
            <Button text="Button text" intent="primary" />
            <Button text="Button text" intent="secondary" />
            <Button text="Button text" intent="default" />
          </div>

          <h2 className={styles.title}>Block buttons in button row </h2>
          <div className={Button.styles['btn-row']}>
            <Button text="Button text" intent="main" block />
            <Button text="Button text" intent="primary" block />
            <Button text="Button text" intent="secondary" block />
          </div>
        </div>
      </div>
    )),
  );
