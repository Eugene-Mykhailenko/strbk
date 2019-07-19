import React from 'react';
import Col from './Col';

const div = <div className="find-me">Lorem Ipsum is simply dummy text</div>;

describe('Col', () => {
  it('should render with no children by default', () => {
    const col = shallow(<Col />);

    expect(col.find('.col')).toHaveLength(1);
    expect(col).toMatchSnapshot();
  });

  it('should render provided children', () => {
    const col = shallow(<Col>{div}</Col>);

    expect(col.find('.find-me')).toHaveLength(1);
    expect(col).toMatchSnapshot();
  });

  it('should be able to justify content on X-axis', () => {
    const col = shallow(<Col>{div}</Col>);

    col.setProps({ alignX: 'center' });

    expect(col.prop('className')).toMatch(/justify-content-center/);
    expect(col).toMatchSnapshot();

    col.setProps({ alignX: 'end' });

    expect(col.prop('className')).toMatch(/justify-content-end/);
    expect(col).toMatchSnapshot();
  });

  it('should be able to justify content on Y-axis', () => {
    const col = shallow(<Col>{div}</Col>);

    col.setProps({ alignY: 'start' });

    expect(col.prop('className')).toMatch(/align-items-start/);
    expect(col).toMatchSnapshot();

    col.setProps({ alignY: 'end' });

    expect(col.prop('className')).toMatch(/align-items-end/);
    expect(col).toMatchSnapshot();
  });

  it('should be able to align itself on X-axis', () => {
    const col = shallow(<Col>{div}</Col>);

    col.setProps({ position: 'left' });

    expect(col.prop('className')).toMatch(/position-left/);
    expect(col).toMatchSnapshot();

    col.setProps({ position: 'right' });

    expect(col.prop('className')).toMatch(/position-right/);
    expect(col).toMatchSnapshot();

    col.setProps({ position: 'center' });

    expect(col.prop('className')).toMatch(/position-center/);
    expect(col).toMatchSnapshot();
  });
});
