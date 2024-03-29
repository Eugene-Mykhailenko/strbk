/* eslint-disable import/no-extraneous-dependencies */

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;

jest.mock('../src/components/Icon/importIcons.js');
