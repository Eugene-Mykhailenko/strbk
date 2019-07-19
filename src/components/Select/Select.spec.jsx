import React from 'react';
import Select from './Select';

jest.mock('../Icon/importIcons');

const config = {
  items: [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
  ],
  placeholder: 'Label',
  onChange: jest.fn(),
  isRequired: true,
  hasError: true,
  errorText: 'Error Text exemple',
  disabled: true,
  isDefault: true,
};

describe('Select', () => {
  it('should render floating label', () => {
    const select = shallow(
      <Select
        placeholder={config.placeholder}
        items={config.items}
        onChange={config.onChange}
      />,
    );

    expect(select.find('label').text()).toEqual(config.placeholder);
    expect(select).toMatchSnapshot();
  });

  it('should be able to render required state', () => {
    const select = shallow(
      <Select
        isRequired={config.isRequired}
        items={config.items}
        onChange={config.onChange}
      />,
    );

    expect(select.prop('className')).toMatch(/is-required/);
    expect(select).toMatchSnapshot();
  });

  it('should be able to render error state', () => {
    const select = shallow(
      <Select
        hasError={config.hasError}
        items={config.items}
        onChange={config.onChange}
      />,
    );

    expect(select.prop('className')).toMatch(/has-error/);
    expect(select).toMatchSnapshot();
  });

  it('should be able to render error message', () => {
    const select = shallow(
      <Select
        items={config.items}
        hasError={config.hasError}
        errorText={config.errorText}
        onChange={config.onChange}
      />,
    );

    expect(select.prop('className')).toMatch(/has-error/);
    expect(select.find('.error-text').text()).toEqual(`${config.errorText}`);
    expect(select).toMatchSnapshot();
  });

  it('should be able to render disabled state', () => {
    const select = shallow(
      <Select
        disabled={config.disabled}
        items={config.items}
        onChange={config.onChange}
      />,
    );

    expect(select.prop('className')).toMatch(/is-disabled/);
    expect(select.find('select').prop('disabled')).toEqual(true);
    expect(select).toMatchSnapshot();
  });

  it('should not trigger onChange handler in a disabled state', () => {
    const select = shallow(
      <Select
        disabled={config.disabled}
        items={config.items}
        onChange={config.onChange}
      />,
    );

    select.find('select').simulate('change', { target: { value: '123' } });

    expect(config.onChange).toHaveBeenCalledTimes(0);
    expect(select).toMatchSnapshot();
  });

  it('should trigger onChange handler', () => {
    const select = shallow(
      <Select items={config.items} onChange={config.onChange} />,
    );

    select.find('select').simulate('change', { target: { value: '123' } });

    expect(config.onChange).toHaveBeenCalledTimes(1);
    expect(select).toMatchSnapshot();
  });

  it('onChange event should style select', () => {
    const select = shallow(
      <Select
        isPasswordType={config.isPasswordType}
        items={config.items}
        onChange={config.onChange}
      />,
    );

    select.find('select').simulate('change', { target: { value: '123' } });

    expect(select.prop('className')).toMatch(/has-focus/);
    expect(select).toMatchSnapshot();
  });

  it('should be able to render default state', () => {
    const select = shallow(
      <Select
        items={config.items}
        onChange={config.onChange}
        isDefault={config.isDefault}
      />,
    );

    expect(select.prop('className')).toMatch(/is-default/);
    expect(select.find('label').length).toEqual(0);
    expect(select).toMatchSnapshot();
  });

  it('should not be able to render error message in default select', () => {
    const select = shallow(
      <Select
        items={config.items}
        hasError={config.hasError}
        errorText={config.errorText}
        onChange={config.onChange}
        isDefault={config.isDefault}
      />,
    );

    expect(select.find('.error-text').length).toEqual(0);
    expect(select).toMatchSnapshot();
  });
});
