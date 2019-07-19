import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.scss';

const Logo = (props) => {
  const { onClick, link, width, height, imageUrl, alt } = props;
  const logoStyles = { width, height };

  return (
    <a href={link} onClick={onClick} className={styles.logo} style={logoStyles}>
      <img src={imageUrl} alt={alt} />
    </a>
  );
};

Logo.propTypes = {
  /** It's an action when the user clicks on the link. */
  onClick: PropTypes.func.isRequired,
  /** Logo link URL. */
  link: PropTypes.string,
  /** Logo image width. */
  width: PropTypes.number,
  /** Logo image height. */
  height: PropTypes.number,
  /** Logo image URL. */
  imageUrl: PropTypes.string,
  /** Logo image alternative text. */
  alt: PropTypes.string,
};

Logo.defaultProps = {
  link: undefined,
  width: undefined,
  height: undefined,
  imageUrl: undefined,
  alt: '',
};

export default Logo;
