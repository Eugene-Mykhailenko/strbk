// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
// import { text, boolean } from '@storybook/addon-knobs';
// import { withState } from '@dump247/storybook-state';
// import Dropdown from '../src/components/Dropdown/Dropdown';
//
// import storyStyles from './Stories.scss';
//
// const addInfo = withInfo({
//   text: `component: `,
// });
// const addState = withState({ value: '', isPasswordShow: false });
//
// const wrapper = () => (
//   <div className={storyStyles.container}>
//     <div className={storyStyles.row}>
//       <div className={storyStyles.col}>
//         <Dropdown
//           label={text('Lable text:', 'Lable Text')}
//           isRequired={boolean('isRequired', true)}
//           hesError={boolean('hesError', false)}
//           errorText="Lorem ipsum dolor sit amet, consectetur adipiscing
// elit."
//           disabled={boolean('disabled', false)}
//         />
//       </div>
//     </div>
//   </div>
// );
//
// // storiesOf('Dropdown', module).add('Dropdown', addState(addInfo(wrapper)));
