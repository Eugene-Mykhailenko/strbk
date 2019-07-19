import React from 'react';
import Tabs from './Tabs';

const config = {
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
  onClick: jest.fn(),
};

const tabIds = [1, 2, 3, 4];

describe('Tabs', () => {
  it('should render with config', () => {
    const tabs = shallow(<Tabs {...config} />);

    expect(tabs.children().length).toBe(4);

    expect(tabs).toMatchSnapshot();
  });

  it('should pass proper configuration', () => {
    const tabs = shallow(<Tabs {...config} />);

    config.tabs.forEach((item, index) => {
      expect(tabs.props().children[index].key).toEqual(
        tabIds[index].toString(),
      );
    });

    expect(tabs.childAt(0).text()).toEqual(config.tabs[0].title);
  });

  it('should highlight active tab', () => {
    const tabs = shallow(<Tabs activeTabId={1} {...config} />);

    expect(tabs.childAt(0).prop('className')).toMatch(/active/);

    expect(tabs).toMatchSnapshot();
  });

  it('should be able to render wide tab', () => {
    const tabs = shallow(<Tabs wide {...config} />);

    expect(tabs.prop('className')).toMatch(/wide/);

    expect(tabs).toMatchSnapshot();
  });

  it('should handle click event', () => {
    const tabs = mount(<Tabs {...config} />);

    tabs
      .childAt(0)
      .childAt(1)
      .find('.tab')
      .simulate('click');

    expect(config.onClick).toHaveBeenCalledTimes(1);
    expect(config.onClick).toHaveBeenCalledWith(2);

    config.onClick.mockClear();

    expect(tabs).toMatchSnapshot();
  });
});
