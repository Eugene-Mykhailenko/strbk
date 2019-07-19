import React from 'react';
import SportsNavigation from './SportsNavigation';

const config = {
  items: [
    {
      id: 'soccer',
      title: 'Soccer',
      icon: 'SI_Soccer',
    },
    {
      id: 'basketball',
      title: 'Basketball',
      icon: 'SI_Basketball',
    },
    {
      id: 'tennis',
      title: 'Tennis',
      icon: 'SI_Tennis',
    },
    {
      id: 'hockey',
      title: 'Hockey',
      icon: 'SI_IceHockey',
    },
  ],
  onClick: jest.fn(),
};

const itemIds = ['soccer', 'basketball', 'tennis', 'hockey'];

describe('SportsNavigation', () => {
  it('should render items defined in the provided config', () => {
    const sportsNavigation = shallow(<SportsNavigation {...config} />);

    expect(sportsNavigation.children().length).toBe(4);
    expect(sportsNavigation).toMatchSnapshot();
  });

  it('should pass proper configuration for items', () => {
    const sportsNavigation = shallow(<SportsNavigation {...config} />);

    config.items.forEach((item, index) => {
      expect(sportsNavigation.props().children[index].key).toEqual(
        itemIds[index],
      );
    });

    expect(
      sportsNavigation
        .childAt(0)
        .childAt(1)
        .text(),
    ).toEqual(config.items[0].title);
    expect(
      sportsNavigation
        .childAt(0)
        .childAt(0)
        .props().glyph,
    ).toEqual(config.items[0].icon);
    expect(sportsNavigation).toMatchSnapshot();
  });

  it('should highlight active item', () => {
    const sportsNavigation = shallow(
      <SportsNavigation activeItemId={config.items[0].id} {...config} />,
    );

    expect(sportsNavigation.childAt(0).prop('className')).toMatch(/active/);
    expect(sportsNavigation).toMatchSnapshot();
  });

  it('should handle click event', () => {
    const sportsNavigation = mount(<SportsNavigation {...config} />);

    sportsNavigation
      .childAt(0)
      .childAt(0)
      .find('a')
      .simulate('click');

    expect(config.onClick).toHaveBeenCalledTimes(1);
    expect(config.onClick).toHaveBeenCalledWith(
      expect.any(Object),
      config.items[0],
    );

    config.onClick.mockClear();

    expect(sportsNavigation).toMatchSnapshot();
  });
});
