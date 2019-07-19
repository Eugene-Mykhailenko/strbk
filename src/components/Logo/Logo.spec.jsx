import React from 'react';
import Logo from './Logo';

const config = {
  onClick: jest.fn(),
  link: 'https://air.parimatch.com/',
  imageUrl: 'https://air.parimatch.com/img/logos/pm-logo.svg',
};

describe('Logo', () => {
  beforeEach(() => {
    config.onClick.mockClear();
  });

  it('should be with link', () => {
    const logo = shallow(<Logo link={config.link} onClick={config.onClick} />);

    expect(logo.prop('href')).toEqual(config.link);
    expect(logo).toMatchSnapshot();
  });

  it('should handle click event', () => {
    const button = mount(<Logo onClick={config.onClick} />);

    button.find('.logo').simulate('click');

    expect(config.onClick).toHaveBeenCalledTimes(1);
  });

  it('should be with imageUrl', () => {
    const logo = shallow(
      <Logo imageUrl={config.imageUrl} onClick={config.onClick} />,
    );

    expect(logo.childAt(0).prop('src')).toEqual(config.imageUrl);
    expect(logo).toMatchSnapshot();
  });
});
