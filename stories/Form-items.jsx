/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text, boolean } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';
import storyStyles from './Stories.scss';
import Input from '../src/components/Input/Input';
import Select from '../src/components/Select/Select';
import InputGroup from '../src/components/InputGroup/InputGroup';

const addInputInfo = withInfo({
  text: `Input component`,
  inline: true,
});
const addInputState = withState({ value: '' });
const inputWrapper = ({ store }) => (
  <div className={storyStyles.container}>
    <div className={storyStyles.row}>
      <div className={storyStyles.col}>
        <Input
          placeholder={text('Placeholder / Label:', 'Password input')}
          type="password"
          isRequired={boolean('isRequired', true)}
          hasError={boolean('hasError', false)}
          errorText={text(
            'Error text:',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          )}
          disabled={boolean('disabled', false)}
          onChange={(event) => store.set({ value: event.target.value })}
        />
      </div>
    </div>
    <div className={storyStyles.row}>
      <div className={storyStyles.col}>
        <Input
          placeholder="Text input"
          onChange={(event) => store.set({ value: event.target.value })}
        />
      </div>
    </div>
  </div>
);

const addSelectInfo = withInfo({
  text: `Select component:`,
  inline: true,
});
const addSelectState = withState({ value: '' });
const selectOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
];
const selectWrapper = ({ store }) => (
  <div className={storyStyles.container}>
    <div className={storyStyles.row}>
      <div className={storyStyles.col}>
        <Select
          items={selectOptions}
          placeholder={text('Label text:', 'Label Text')}
          isRequired={boolean('isRequired', true)}
          hasError={boolean('hasError', false)}
          errorText={text(
            'Error text:',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          )}
          disabled={boolean('disabled', false)}
          isDefault={boolean('isDefault', false)}
          onChange={(event) => store.set({ value: event.target.value })}
        />
      </div>
    </div>
  </div>
);

const addInputGroupInfo = withInfo({
  text: `Input Group component was created for grouping From Items 
  (Input , Select etc) in one line`,
  inline: true,
});
const addInputGroupState = withState({ value: '' });
const inputGroupWrapper = ({ store }) => (
  <div className={storyStyles.container}>
    <div className={storyStyles.row}>
      <div className={storyStyles.col}>
        <InputGroup>
          <Input
            value={store.state.value}
            placeholder={text(
              'Placeholder / Label text:',
              'Placeholder / Label',
            )}
            type="text"
            isRequired={boolean('isRequired', true)}
            hasError={boolean('hasError', false)}
            errorText={text(
              'Error text:',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            )}
            disabled={boolean('disabled', false)}
            onChange={(event) => store.set({ value: event.target.value })}
          />
          <Select
            items={selectOptions}
            width="150px"
            disabled={boolean('disabled', false)}
            onChange={(event) => store.set({ value: event.target.value })}
          />
        </InputGroup>
      </div>
    </div>
  </div>
);

storiesOf('Form Items', module)
  .add('Input', addInputState(addInputInfo(inputWrapper)))
  .add('Select', addSelectState(addSelectInfo(selectWrapper)))
  .add('InputGroup', addInputGroupState(addInputGroupInfo(inputGroupWrapper)));
