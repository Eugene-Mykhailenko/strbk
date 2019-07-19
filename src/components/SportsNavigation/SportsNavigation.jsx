import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon/Icon';
import styles from './SportsNavigation.scss';

const SportsNavigation = (props) => {
  const { activeItemId, items, onClick } = props;

  const getClassNames = (item) =>
    classNames(styles.item, {
      [styles.active]: item.id === activeItemId,
    });

  const renderItems = () =>
    items.map((item) => (
      <a
        href={item.link}
        className={getClassNames(item)}
        style={{
          borderColor: `var(--sportСolor_${activeItemId})`,
        }}
        key={item.id}
        onClick={(event) => onClick(event, item)}
      >
        <Icon width={32} height={24} glyph={item.icon} />
        <span className={styles.title}>{item.title}</span>
      </a>
    ));

  return <div className={styles.items}>{renderItems(props)}</div>;
};

SportsNavigation.styles = styles;

SportsNavigation.propTypes = {
  /** List of SportsNavigation items (id, title, icon) */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
  /** Callback function for event */
  onClick: PropTypes.func.isRequired,
  /** Active item ID */
  activeItemId: PropTypes.string,
};

SportsNavigation.defaultProps = {
  items: [],
  activeItemId: undefined,
};

export default SportsNavigation;
