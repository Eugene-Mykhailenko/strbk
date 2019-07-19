import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Button.scss';

import Icon from '../Icon/Icon';

const Button = (props) => {
  const {
    text,
    intent,
    size,
    block,
    isLoading,
    disabled,
    type,
    icon,
    iconSize,
    onClick,
  } = props;

  const getClassNames = () =>
    classNames(styles.btn, styles[`btn-${intent}`], {
      [styles[`btn-${size}`]]: size,
      [styles['btn-block']]: block,
      [styles.disabled]: disabled,
      [styles['is-loading']]: isLoading,
    });

  const renderIcon = () =>
    icon &&
    !isLoading && (
      <Icon
        className={styles['btn-icon']}
        glyph={icon}
        width={iconSize}
        height={iconSize}
      />
    );

  const handleClick = (event) => {
    !disabled && onClick(event);
  };

  return (
    <button
      className={getClassNames(styles)}
      disabled={disabled}
      type={type}
      onClick={handleClick}
    >
      {renderIcon()}
      {text}
    </button>
  );
};

Button.styles = styles;

Button.propTypes = {
  /** Button text. */
  text: PropTypes.string,
  /** Variant of button visualization. */
  intent: PropTypes.string,
  /** Button icon name. */
  icon: PropTypes.string,
  /** Button icon size. */
  iconSize: PropTypes.number,
  /** Render button full width. */
  block: PropTypes.bool,
  /** Button isLoading state. */
  isLoading: PropTypes.bool,
  /** Button type. */
  type: PropTypes.string,
  /** Button size. */
  size: PropTypes.string,
  /** Button disabled state. */
  disabled: PropTypes.bool,
  /** It's an action when the user clicks on the button. */
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  text: undefined,
  intent: 'main',
  block: false,
  isLoading: false,
  type: 'button',
  iconSize: 20,
  disabled: false,
  icon: null,
  size: undefined,
};

export default Button;
