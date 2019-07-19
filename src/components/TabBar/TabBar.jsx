import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import transitionStyles from '../../assets/styles/base/animations.scss';
import Icon from '../Icon/Icon';
import styles from './TabBar.scss';

const TabBar = (props) => {
  const { activeTabId, items, onClick, isHidden } = props;

  const getClassNames = (item) =>
    classNames(styles.tab, {
      [styles.active]: item.id === activeTabId,
    });

  const renderItems = () =>
    items.map((item) => (
      <a
        href={item.link}
        className={getClassNames(item)}
        key={item.id}
        onClick={(event) => onClick(event, item)}
      >
        <div className={styles['icon-wrapper']}>
          <Icon width={32} height={24} glyph={item.icon} />
          {item.counter && (
            <span className={styles.counter}>{item.counter}</span>
          )}
        </div>
        <span className={styles.title}>{item.title}</span>
      </a>
    ));

  return (
    <div>
      <CSSTransition
        in={!isHidden}
        classNames={{
          enter: transitionStyles['fade-in-down-start'],
          enterActive: transitionStyles['fade-in-down-end'],
          exit: transitionStyles['fade-in-up-start'],
          exitActive: transitionStyles['fade-in-up-end'],
        }}
        timeout={300}
        unmountOnExit
      >
        <div className={styles['tab-bar']}>{renderItems()}</div>
      </CSSTransition>
    </div>
  );
};

TabBar.styles = styles;

TabBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
  activeTabId: PropTypes.string,
  isHidden: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

TabBar.defaultProps = {
  isHidden: false,
  items: [],
  activeTabId: undefined,
};

export default TabBar;
