import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import '../src/assets/styles/common.scss';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.jsx?$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

addDecorator(withKnobs);
configure(loadStories, module);