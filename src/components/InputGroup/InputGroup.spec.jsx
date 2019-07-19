import React from 'react';
import InputGroup from './InputGroup';
import Input from '../Input/Input';

jest.mock('../Icon/importIcons');

describe('InputGroup', () => {
  it('should render children', () => {
    const inputGroup = shallow(
      <InputGroup>
        <Input onChange={() => {}} />
      </InputGroup>,
    );

    expect(inputGroup.children().length).toEqual(1);
    expect(inputGroup.children().props().type).toEqual('text');
    expect(inputGroup).toMatchSnapshot();
  });
});
