import React from 'react';
import PropTypes from 'prop-types';
import styles from './Grid.scss';

const Row = (props) => {
  const { children } = props;

  return <div className={styles.row}>{children}</div>;
};

Row.propTypes = {
  /** Special property to pass children
   * elements directly into component output. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Row;
