import React from 'react';
import Button from './Button';

jest.mock('../Icon/importIcons');

const config = {
  text: `Hi it's a button!`,
  isLoading: true,
  onClick: jest.fn(),
  icon: 'UII_BurgerMenu',
};

describe('Button', () => {
  beforeEach(() => {
    config.onClick.mockClear();
  });

  it('should handle click event', () => {
    const button = mount(<Button onClick={config.onClick} />);

    button.simulate('click');

    expect(config.onClick).toHaveBeenCalledTimes(1);

    config.onClick.mockClear();

    expect(button).toMatchSnapshot();
  });

  it('should be of button type by default', () => {
    const button = shallow(<Button onClick={config.onClick} />);

    expect(button.props().type).toBe('button');
    expect(button).toMatchSnapshot();
  });

  it('should be able to indicate loading state', () => {
    const button = shallow(
      <Button isLoading={config.isLoading} onClick={config.onClick} />,
    );

    expect(button.prop('className')).toMatch(/is-loading/);
  });

  it('should render provider text', () => {
    const button = shallow(
      <Button text={config.text} onClick={config.onClick} />,
    );

    expect(button.text()).toEqual(config.text);
  });

  it('should be able to render provider icon', () => {
    const button = shallow(
      <Button icon={config.icon} onClick={config.onClick} />,
    );

    expect(button.childAt(0).props().glyph).toEqual(config.icon);
    expect(button).toMatchSnapshot();
  });

  it('should be able to render in a disabled state', () => {
    const isDisabled = true;

    const button = shallow(
      <Button disabled={isDisabled} onClick={config.onClick} />,
    );

    expect(button.prop('disabled')).toBe(true);
    expect(button).toMatchSnapshot();
  });

  it('should not handle click in a disabled state', () => {
    const isDisabled = true;

    const button = mount(
      <Button disabled={isDisabled} onClick={config.onClick} />,
    );

    button.simulate('click');

    expect(config.onClick).toHaveBeenCalledTimes(0);

    config.onClick.mockClear();

    expect(button).toMatchSnapshot();
  });
});
