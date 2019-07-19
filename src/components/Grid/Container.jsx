import React from 'react';
import PropTypes from 'prop-types';
import styles from './Grid.scss';

const Container = (props) => {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
};

Container.propTypes = {
  /** Special property to pass children
   * elements directly into component output. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
