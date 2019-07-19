import React from 'react';
import Label from './Label';

const config = {
  isRequired: true,
  hasFocus: true,
  hasError: true,
  text: 'Lorem',
};

describe('Label', () => {
  it('should render provided text', () => {
    const label = shallow(<Label text={config.text} />);

    expect(label.text()).toEqual(`${config.text}:`);
    expect(label).toMatchSnapshot();
  });

  it('should be able to indicate required status', () => {
    const label = shallow(
      <Label isRequired={config.isRequired} text={config.text} />,
    );

    expect(label.prop('className')).toMatch(/is-required/);
    expect(label).toMatchSnapshot();
  });

  it('should be able to indicate focused state', () => {
    const label = shallow(
      <Label hasFocus={config.hasFocus} text={config.text} />,
    );

    expect(label.prop('className')).toMatch(/has-focus/);
    expect(label).toMatchSnapshot();
  });

  it('should be able to indicate error status', () => {
    const label = shallow(
      <Label hasError={config.hasError} text={config.text} />,
    );

    expect(label.prop('className')).toMatch(/has-error/);
    expect(label).toMatchSnapshot();
  });
});
