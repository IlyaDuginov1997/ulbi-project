import React, {FC, useState} from 'react'
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const {className} = props;

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
        <button
            onClick={() => setCollapsed(prev => !prev)}
        >
            Collapse
        </button>
        <div className={classNames(cls.switchers)}>
            <ThemeSwitcher/>
            <LangSwitcher className={cls.langSwitcher}/>
        </div>
    </div>
  )
};