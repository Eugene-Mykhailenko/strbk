import React from 'react';
import Input from './Input';

jest.mock('../Icon/importIcons');

const config = {
  type: 'text',
  placeholder: 'Label',
  onChange: jest.fn(),
  isRequired: true,
  hasError: true,
  errorText: 'Error Text exemple',
  disabled: true,
};

describe('Input', () => {
  it('should render input of text type by default', () => {
    const input = shallow(<Input onChange={config.onChange} />);

    expect(input.find('input').prop('type')).toEqual('text');
    expect(input).toMatchSnapshot();
  });

  it('should render floating label', () => {
    const input = shallow(
      <Input placeholder={config.placeholder} onChange={config.onChange} />,
    );

    expect(input.find('label').text()).toEqual(config.placeholder);
    expect(input).toMatchSnapshot();
  });

  it('should be able to render required state', () => {
    const input = shallow(
      <Input isRequired={config.isRequired} onChange={config.onChange} />,
    );

    expect(input.prop('className')).toMatch(/is-required/);
    expect(input).toMatchSnapshot();
  });

  it('should be able to render error state', () => {
    const input = shallow(
      <Input hasError={config.hasError} onChange={config.onChange} />,
    );

    expect(input.prop('className')).toMatch(/has-error/);
    expect(input.find('input').prop('className')).toMatch(/has-error/);
    expect(input).toMatchSnapshot();
  });

  it('should be able to render error message', () => {
    const input = shallow(
      <Input
        hasError={config.hasError}
        errorText={config.errorText}
        onChange={config.onChange}
      />,
    );

    expect(input.prop('className')).toMatch(/has-error/);
    expect(input.find('input').prop('className')).toMatch(/has-error/);
    expect(input.find('.error-text').text()).toEqual(config.errorText);
    expect(input).toMatchSnapshot();
  });

  it('should be able to render disabled state', () => {
    const input = shallow(
      <Input disabled={config.disabled} onChange={config.onChange} />,
    );

    expect(input.prop('className')).toMatch(/is-disabled/);
    expect(input.find('input').prop('disabled')).toEqual(true);
    expect(input).toMatchSnapshot();
  });

  it('should not trigger onChange handler in a disabled state', () => {
    const input = shallow(
      <Input disabled={config.disabled} onChange={config.onChange} />,
    );

    input.find('input').simulate('change');

    expect(config.onChange).toHaveBeenCalledTimes(0);
    expect(input).toMatchSnapshot();
  });

  it('should trigger onChange handler', () => {
    const input = shallow(<Input onChange={config.onChange} />);

    input.find('input').simulate('change');

    expect(config.onChange).toHaveBeenCalledTimes(1);
    expect(input).toMatchSnapshot();
  });

  it('should be able to render input of password type', () => {
    const input = shallow(<Input type="password" onChange={config.onChange} />);

    expect(input.find('input').prop('type')).toEqual('password');
    expect(input).toMatchSnapshot();
  });

  it('should render toggle password button for input of password type', () => {
    const input = shallow(<Input type="password" onChange={config.onChange} />);

    expect(input.find('input').prop('type')).toEqual('password');
    expect(input.find('button').length).toEqual(1);
    expect(input).toMatchSnapshot();
  });

  it('should add correct styles on focus', () => {
    const input = shallow(<Input type="password" onChange={config.onChange} />);

    input.find('input').simulate('focus');

    expect(input.prop('className')).toMatch(/has-focus/);
    expect(input.find('input').prop('className')).toMatch(/has-focus/);
    expect(input).toMatchSnapshot();
  });

  it('should disabled focus event', () => {
    const input = shallow(<Input type="password" onChange={config.onChange} />);

    input.find('input').simulate('focus');

    expect(input.prop('className')).toMatch(/has-focus/);
    expect(input.find('input').prop('className')).toMatch(/has-focus/);

    input.find('input').simulate('blur', { target: { value: '' } });

    expect(input.prop('className')).not.toMatch(/has-focus/);
    expect(input.find('input').prop('className')).not.toMatch(/has-focus/);
    expect(input).toMatchSnapshot();
  });
});
