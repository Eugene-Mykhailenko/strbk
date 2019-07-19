import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Tabs.scss';

const Tabs = (props) => {
  const { wide, activeTabId, tabs, onClick } = props;

  const getClassNames = (tab) =>
    classNames(styles.tab, {
      [styles.active]: tab.id === activeTabId,
    });

  const renderTabs = () =>
    tabs.map((tab) => (
      <div
        className={getClassNames(tab)}
        key={tab.id}
        onClick={() => {
          onClick(tab.id);
        }}
      >
        {tab.title}
      </div>
    ));

  return (
    <div
      className={classNames(styles.tabs, {
        [styles.wide]: wide,
      })}
    >
      {renderTabs(props)}
    </div>
  );
};

Tabs.styles = styles;

Tabs.propTypes = {
  /**  Items list */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  ),
  /** This is when the tabs occupy the entire width of the lines. */
  wide: PropTypes.bool,
  /** It's an action when the user clicks on the tab. */
  onClick: PropTypes.func.isRequired,
  /** It's an ID of selected tab. */
  activeTabId: PropTypes.number,
};

Tabs.defaultProps = {
  tabs: [],
  wide: false,
  activeTabId: undefined,
};

export default Tabs;
