import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Grid.scss';

const Col = (props) => {
  const { children, width, alignX, alignY, position } = props;

  const getClassnames = () =>
    classNames(
      styles.col,
      styles[`col-${width}`],
      styles[`justify-content-${alignX}`],
      styles[`align-items-${alignY}`],
      styles[`position-${position}`],
    );

  return <div className={getClassnames(styles)}>{children}</div>;
};

Col.propTypes = {
  /** Special property to pass children
   * elements directly into component output. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /** Column width. */
  width: PropTypes.string,
  /** This property specifies the default alignment
   * on X-axis for items inside the column. */
  alignX: PropTypes.string,
  /** This property specifies the default alignment
   * on Y-axis for items inside the column. */
  alignY: PropTypes.string,
  /** Property specifies the type of positioning column. */
  position: PropTypes.string,
};

Col.defaultProps = {
  children: undefined,
  width: undefined,
  alignX: 'start',
  alignY: 'center',
  position: undefined,
};

export default Col;
