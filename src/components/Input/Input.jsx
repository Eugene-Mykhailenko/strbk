/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import styles from './Input.scss';
import animationStyles from '../../assets/styles/base/animations.scss';
import Icon from '../Icon/Icon';

class Input extends Component {
  constructor(props) {
    super(props);

    // TODO: decide if we need dynamic type update.
    this.state = {
      type: props.type,
      isPasswordType: props.type === 'password',
      isPasswordVisible: false,
      hasFocus: false,
    };

    this.internalOnChange = this.internalOnChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
  }

  onFocus() {
    this.setState({
      hasFocus: true,
    });
  }

  onBlur(event) {
    if (!event.target.value.length) {
      this.setState({
        hasFocus: false,
      });
    }
  }

  getContainerClassNames() {
    const { hasError, isRequired, disabled } = this.props;
    const { hasFocus, isPasswordType } = this.state;

    return classNames(styles['form-group'], {
      [styles['has-focus']]: hasFocus,
      [styles['is-required']]: isRequired,
      [styles['is-password-type']]: isPasswordType,
      [styles['has-error']]: hasError,
      [styles['is-disabled']]: disabled,
    });
  }

  getInputClassNames() {
    const { hasError } = this.props;
    const { hasFocus } = this.state;

    return classNames(styles['form-control'], {
      [styles['has-focus']]: hasFocus,
      [styles['has-error']]: hasError,
    });
  }

  togglePassword() {
    const isPasswordVisible = !this.state.isPasswordVisible;

    this.setState({
      isPasswordVisible,
      type: isPasswordVisible ? 'text' : 'password',
    });
  }

  internalOnChange(event) {
    const { onChange, disabled } = this.props;

    if (!disabled) {
      onChange(event);
    }
  }

  renderLabel() {
    const { placeholder } = this.props;

    return placeholder && <label className={styles.label}>{placeholder}</label>;
  }

  renderButton() {
    const { isPasswordVisible, isPasswordType } = this.state;

    return (
      isPasswordType && (
        <button className={styles.btn} onClick={this.togglePassword}>
          <Icon
            className={styles.icon}
            width={24}
            height={24}
            glyph={isPasswordVisible ? 'UII_Eye' : 'UII_EyeSlash'}
          />
        </button>
      )
    );
  }

  renderErrorText() {
    const { hasError, errorText } = this.props;

    return (
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
    );
  }

  render() {
    const { disabled } = this.props;
    const { type } = this.state;

    return (
      <div className={this.getContainerClassNames()}>
        {this.renderLabel()}
        <input
          className={this.getInputClassNames()}
          type={type}
          disabled={disabled}
          onChange={this.internalOnChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        {this.renderButton()}
        {this.renderErrorText()}
      </div>
    );
  }
}

Input.propTypes = {
  /** Input Placeholder/Label */
  placeholder: PropTypes.string,
  /** Input field type: text, number, password and etc */
  type: PropTypes.string,
  /** Callback function for event */
  onChange: PropTypes.func.isRequired,
  /** Add star for label if this field is required */
  isRequired: PropTypes.bool,
  /** Error indication */
  hasError: PropTypes.bool,
  /** Error message */
  errorText: PropTypes.string,
  /** Disabled input */
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: undefined,
  type: 'text',
  isRequired: false,
  hasError: false,
  errorText: undefined,
  disabled: false,
};

export default Input;
