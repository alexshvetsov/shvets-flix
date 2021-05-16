import React, { useState } from 'react';
import Tab from './Tab';
import './Tabs.scss';
import propTypes from 'prop-types';

const Tabs = (props) => {
  const { children } = props;
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map((child) => {
          const { label } = child.props;
          return <Tab activeTab={activeTab} label={label} onClick={onClickTabItem} key={label} />;
        })}
      </ol>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: propTypes.array.isRequired
};

export default Tabs;
