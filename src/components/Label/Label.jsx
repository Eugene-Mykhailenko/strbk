/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Label.scss';

const Label = (props) => {
  const { text, isRequired, hasFocus, hasError } = props;

  return (
    <label
      className={classNames(styles.label, {
        [styles['is-required']]: isRequired,
        [styles['has-focus']]: hasFocus,
        [styles['has-error']]: hasError,
      })}
    >
      {text}:
    </label>
  );
};

Label.propTypes = {
  /** Text inside element. */
  text: PropTypes.string.isRequired,
  /** Determines whether to add a required field sign or not. */
  isRequired: PropTypes.bool,
  /** Selects element if it is currently focused. */
  hasFocus: PropTypes.bool,
  /** Sets UI to erroneous. */
  hasError: PropTypes.bool,
};

Label.defaultProps = {
  isRequired: false,
  hasFocus: false,
  hasError: false,
};

Label.styles = styles;

export default Label;
