import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

class TabsList extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
      parent:this.props.parent
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    var className,
    isParentTabList;
    if(this.state.parent){
      className="parent-tab-list";
      isParentTabList = true
    }
    else{
      className="child-tab-list";
      isParentTabList=false
    }
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      },
    } = this;

    const intFrameHeight = window.innerHeight;
      let size = intFrameHeight*(50/100);
      let setNewHeight = {
         height: size
      }


    return (
    <div className="tabs-container">
      <div className="tabs">
        <ol className={className}>
          {children.map((child) => {
            const { label } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
                isParentTabList={isParentTabList}
              />
            );
          })}
        </ol>
        
        <div className="tab-content">
            {children.map((child) => {
             if (child.props.label !== activeTab) return undefined;
             return child.props.children;
           })}
        </div>
      </div>
    </div>
    );
  }
}

export default TabsList;
