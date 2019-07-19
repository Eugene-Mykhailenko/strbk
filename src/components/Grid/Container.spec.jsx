import React from 'react';
import Container from './Container';

const div = <div className="find-me">Lorem Ipsum is simply dummy text</div>;

describe('Container', () => {
  it('should render with no children by default', () => {
    const container = shallow(<Container>{div}</Container>);

    expect(container.prop('className')).toEqual('container');
    expect(container).toMatchSnapshot();
  });

  it('should render provided children', () => {
    const container = shallow(<Container>{div}</Container>);

    expect(container.find('.find-me')).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });
});
