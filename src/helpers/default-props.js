import PropTypes from 'prop-types';

/*
  Global attributes
  https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes.
  Missing attributes to be included.
*/
const Common = {
  className: PropTypes.string,
  rest: PropTypes.any,
};

export default Common;

export const Input = {
  ...Common,
  disabled: PropTypes.bool,
};
