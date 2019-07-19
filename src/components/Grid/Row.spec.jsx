import React from 'react';
import Row from './Row';

const div = <div className="find-me">Lorem Ipsum is simply dummy text</div>;

describe('Row', () => {
  it('should render with no children by default', () => {
    const row = shallow(<Row>{div}</Row>);

    expect(row.prop('className')).toEqual('row');
    expect(row).toMatchSnapshot();
  });

  it('should render provided children', () => {
    const row = shallow(<Row>{div}</Row>);

    expect(row.find('.find-me')).toHaveLength(1);
    expect(row).toMatchSnapshot();
  });
});
