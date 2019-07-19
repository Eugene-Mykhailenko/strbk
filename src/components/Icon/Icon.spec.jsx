import React from 'react';
import Icon from './Icon';

jest.mock('./importIcons');

const config = {
  glyph: 'UII_Bonuses',
};

const xlinkHref = `#${config.glyph}`;

describe('Icon', () => {
  it('should be able to indicate xlinkHref attribute', () => {
    const icon = shallow(<Icon {...config} />);

    expect(icon.childAt(0).props().xlinkHref).toEqual(xlinkHref);
    expect(icon).toMatchSnapshot();
  });

  it('should be able to indicate fill attribute', () => {
    const icon = shallow(<Icon {...config} />);

    expect(icon.props().fill).toEqual('currentColor');
    expect(icon).toMatchSnapshot();
  });
});
