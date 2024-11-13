import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
        isParentTabList
      },
    } = this;

    let className;

if(isParentTabList){
  className = 'parent-tab-list-item ';

    if (activeTab === label) {
      className += ' parent-tab-list-active parent-tab-list-active-border';
    }
}
else{
  className = 'child-tab-list-item';

  if (activeTab === label) {
    className += ' child-tab-list-active child-tab-list-active-border';
  }
}


    return (
      <li
        className={className}
        onClick={onClick}
      >
        {label}
      </li>
    );
  }
}

export default Tab;
