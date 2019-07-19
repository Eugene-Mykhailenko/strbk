import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Input/Input.scss';

const InputGroup = (props) => {
  const { children } = props;

  return <div className={styles['input-group']}>{children}</div>;
};

InputGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default InputGroup;
