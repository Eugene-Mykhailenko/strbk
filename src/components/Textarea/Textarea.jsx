import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import * as DefaultProps from '../../helpers/default-props';
import styles from './Textarea.scss';
import animationStyles from '../../assets/styles/base/animations.scss';

import Label from '../Label/Label';

const Textarea = (props) => {
  const {
    value,
    rows,
    placeholder,
    hasError,
    errorText,
    label,
    isRequired,
    resize,
    onChange,
  } = props;

  const getClassNames = () =>
    classNames(styles.textarea, {
      [styles.error]: hasError,
    });

  const getClassNamesTextarea = () =>
    classNames({
      [styles.error]: hasError,
      [styles.resize]: resize,
    });

  return (
    <div className={getClassNames(styles)}>
      {label && <Label text={label} isRequired={isRequired} />}
      <div className={styles['textarea-wrap']}>
        <textarea
          value={value}
          placeholder={placeholder}
          rows={rows}
          className={getClassNamesTextarea(styles)}
          onChange={onChange}
        />
      </div>
      <CSSTransition
        in={hasError}
        classNames={{
          enter: animationStyles['fade-in-start'],
          enterActive: animationStyles['fade-in-end'],
          exit: animationStyles['fade-out-start'],
          exitActive: animationStyles['fade-out-end'],
        }}
        timeout={300}
        unmountOnExit
      >
        <div className={styles['error-text']}>{errorText}</div>
      </CSSTransition>
    </div>
  );
};

Textarea.propTypes = {
  ...DefaultProps.Input,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.string,
  resize: PropTypes.bool,
  hasError: PropTypes.bool,
  errorText: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Textarea.defaultProps = {
  placeholder: undefined,
  rows: '5',
  resize: false,
  hasError: undefined,
  errorText: undefined,
  label: undefined,
  isRequired: undefined,
};

Textarea.styles = styles;

export default Textarea;
