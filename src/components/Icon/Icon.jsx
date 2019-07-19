import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import iconNamesFactory from './importIcons';

import styles from './Icon.scss';

export const iconNames = iconNamesFactory();

const Icon = (props) => {
  const { glyph, width, height, fill, className } = props;

  return (
    <svg
      className={classNames(className, styles.icon)}
      width={width}
      fill={fill}
      height={height}
    >
      <use xlinkHref={`#${glyph}`} />
    </svg>
  );
};

Icon.propTypes = {
  /** Icon name from Icons set. */
  glyph: PropTypes.string.isRequired,
  /** Icon width. */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Icon height. */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Default icon color. */
  fill: PropTypes.string,
  /** Additional class modifier for icon. */
  className: PropTypes.string,
};

Icon.defaultProps = {
  width: 14,
  height: 14,
  fill: 'currentColor',
  className: '',
};

Icon.styles = styles;

export default Icon;
