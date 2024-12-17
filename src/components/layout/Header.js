'use client'

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {Tooltip} from "antd";
import styles from "@/styles/header.module.css"


// 创建菜单子节点
const createMenuNode = (item, optionProps) => {
  return (
      <li key={item.id} {...optionProps}>
        <Link href={item.path}>{item.name}</Link>
      </li>
  );
}

// 导航栏组件
const Navigator = () => {
  const pathname = usePathname()

  // 路由切换时自动回到页面顶部
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  const menuItems = [
    {name: '首页', path: '/', id: 1},
    {name: '景点介绍', path: '/scenery-introduce', id: 2},
    {name: '景点影像', path: '/scenery-photos', id: 3},
    {name: '留言板', path: '/contact', id: 4},
    {name: '关于站点', path: '/about', id: 5},
  ]
  const menuNodes = menuItems.map(item => {
    let optionProps = {}
    if (pathname === item.path) {
      optionProps.className = styles.activate
    }
    return createMenuNode(item, optionProps)
  })

  return (
      <div className={styles.navigator}>
        <div className={styles.navigatorHead}>
          <span><Image src='/images/logo.png' alt='logo.png' width='40' height='40'/></span>
          <span style={{marginLeft: '10px', fontSize: '25px', fontWeight: 'bold'}}>桂林山水甲天下</span>
        </div>
        <div className={styles.push}></div>
        <div className={styles.menu}>
          <ul>{menuNodes}</ul>
        </div>
        <div style={{margin: '0 20px'}}>
          <Tooltip title="进入代码仓库">
            <Link href="https://github.com/thcpdd/hometown-scenery" target="_blank">
              <Image src='/images/github.svg' alt='github.svg' height='30' width='30'/>
            </Link>
          </Tooltip>
        </div>
      </div>
  );
}

// 头部组件
export const Header = () => {
  return (
      <header style={{position: 'sticky', top: 0, zIndex: 20}}>
        <Navigator/>
      </header>
  )
}
