import React, { useState } from 'react';
import cn from 'classnames';
import styles from './actorTabs.module.css';

type PropsType = {
  tabs: string[];
};

export const ActorTabs: React.FC<PropsType> = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <ul className={styles.tabsList}>
      {tabs.map((tab, index) => (
        <li
          key={tab}
          onClick={() => setSelectedTab(index)}
          className={cn(styles.tabsItem, index === selectedTab ? styles.active : null)}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
};
