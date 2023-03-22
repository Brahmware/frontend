import React from 'react';
import ArrowLink from '../arrowlink';

const TabComponent = (props) => {
    return (
        <div className="tab-component">
            {
                props.data.map((tab, tabKey) => {
                    return (
                        <div className="tab"
                            id={`tab_${tab.link}`}
                            key={tabKey}
                            onClick={props.clickedOnTab}
                        >
                            <ArrowLink
                                text={tab.title}
                                link={`#${tab.link}`}
                                withoutComponent={false}
                                itemID={tab.link}
                                clickedOnTab={props.clickedOnTab}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TabComponent