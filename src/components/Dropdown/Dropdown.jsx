import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Select from 'react-select';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import styles from './Dropdown.scss';
import animationStyles from '../../assets/styles/base/animations.scss';
import Label from '../Label/Label';

const Dropdown = (props) => {
  const { onChange, hasError, errorText, label, isRequired } = props;

  const renderErrorText = () => (
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
      <div className={styles['text-error']}>{errorText}</div>
    </CSSTransition>
  );

  return (
    <div className={styles.dropdown}>
      {label && <Label text={label} isRequired={isRequired} />}
      <Select
        onChange={onChange}
        defaultValue={{ label: 'Default Option', value: 'default-value' }}
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ]}
      />
      {renderErrorText()}
    </div>
  );
};

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
  hasError: PropTypes.bool,
  errorText: PropTypes.string,
  label: PropTypes.string,
};

Dropdown.defaultProps = {
  hasError: false,
  isRequired: false,
  errorText: undefined,
  label: undefined,
};

export default Dropdown;
