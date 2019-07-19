/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import styles from './Select.scss';
import animationStyles from '../../assets/styles/base/animations.scss';
import Icon from '../Icon/Icon';

export default class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasFocus: false,
    };

    this.internalOnChange = this.internalOnChange.bind(this);
  }

  getContainerClassNames() {
    const { hasError, isRequired, disabled, isDefault } = this.props;
    const { hasFocus } = this.state;

    return classNames(styles['form-group'], {
      [styles['has-focus']]: hasFocus,
      [styles['has-error']]: hasError,
      [styles['is-required']]: isRequired,
      [styles['is-disabled']]: disabled,
      [styles['is-default']]: isDefault,
    });
  }

  itemList() {
    const { items, isDefault } = this.props;

    /* eslint-disable */
    const itemList = items.map((item, index) => (
      <option key={index} value={item.value}>
        {item.label}
      </option>
    ));

    !isDefault &&
      itemList.unshift(<option key="placeholder" disabled={true} selected />);

    return itemList;
  }

  internalOnChange(event) {
    const { onChange, disabled } = this.props;

    if (disabled) {
      return;
    }

    if (event.target.value.length) {
      this.setState({
        hasFocus: true,
      });
    } else {
      this.setState({
        hasFocus: false,
      });
    }

    onChange(event);
  }

  renderLabel() {
    const { placeholder, isDefault } = this.props;

    return (
      placeholder &&
      !isDefault && <label className={styles.label}>{placeholder}</label>
    );
  }

  renderErrorText() {
    const { hasError, errorText, isDefault } = this.props;

    return (
      !isDefault && (
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
      )
    );
  }

  render() {
    const { disabled, value, width } = this.props;

    return (
      <div
        className={this.getContainerClassNames()}
        style={{
          width,
        }}
      >
        {this.renderLabel()}
        <div className={styles['custom-select']}>
          <select
            disabled={disabled}
            onChange={this.internalOnChange}
            defaultValue={value}
          >
            {this.itemList()}
          </select>
          <Icon
            className={styles.arrow}
            glyph="UII_ChevronDown"
            width="16"
            height="16"
          />
        </div>
        {this.renderErrorText()}
      </div>
    );
  }
}

Select.propTypes = {
  /** List of select items (id, value, label) */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }).isRequired,
  ),
  /** Curntly selected value */
  value: PropTypes.string,
  /** Select Placeholder/Label */
  placeholder: PropTypes.string,
  /** Select width */
  width: PropTypes.string,
  /** Callback function for event */
  onChange: PropTypes.func.isRequired,
  /** Add star for label if this field is required */
  isRequired: PropTypes.bool,
  /** Error indication */
  hasError: PropTypes.bool,
  /** Error message */
  errorText: PropTypes.string,
  /** Disabled Select */
  disabled: PropTypes.bool,
  /** Default type */
  isDefault: PropTypes.bool,
};

Select.defaultProps = {
  items: [],
  value: undefined,
  placeholder: '',
  width: undefined,
  hasError: false,
  isRequired: false,
  errorText: undefined,
  disabled: false,
  isDefault: false,
};
