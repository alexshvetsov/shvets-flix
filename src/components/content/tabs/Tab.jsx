import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

const Tab = (props) => {
  const { activeTab, label, onClick } = props;
  const [className, setClassName] = useState('tab-list-item');

  const onTabClick = () => {
    onClick(label);
  };

  useEffect(() => {
    if (activeTab === label) {
      setClassName((prev) => (prev += ' tab-list-active'));
    } else {
      setClassName(() => ' tab-list-item');
    }
  }, [activeTab, label]);

  return (
    <>
      <li className={className} onClick={onTabClick}>
        {label}
      </li>
    </>
  );
};

Tab.propTypes = {
  activeTab: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired
};

export default Tab;
