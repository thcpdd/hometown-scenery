'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Carousel } from "antd";
import styles from "@/styles/header.module.css"

// 图片轮播图组件
const ImageCarousel = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);

    // 添加窗口大小改变事件监听器
    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // 清除事件监听器
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    {imagePath: '/images/banner1.jpg', imageName: 'banner1', id: 1},
    {imagePath: '/images/banner2.jpg', imageName: 'banner2', id: 2},
    {imagePath: '/images/banner3.webp', imageName: 'banner3', id: 3},
    {imagePath: '/images/banner4.webp', imageName: 'banner4', id: 4},
  ]

  const carouselElements = images.map(item => {
    return (
        <div key={item.id}>
          <Image src={item.imagePath} alt={item.imageName} width={width} height={height}/>
        </div>
    )
  })

  return (
      <Carousel autoplay={true} effect={'fade'} dots={false}>{carouselElements}</Carousel>
  );
}

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
  const menuItems = [
    {name: '首页', path: '/', id: 1},
    {name: '景点介绍', path: '/scenery-introduce', id: 2},
    {name: '景点图片', path: '/scenery-photos', id: 3},
    {name: '留言板', path: '/contact', id: 4},
    {name: '关于我们', path: '/about', id: 5},
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
          <Link href="https://github.com/thcpdd/hometown-scenery" target="_blank">
            <Image src='/images/github.svg' alt='github.svg' height='30' width='30'/>
          </Link>
        </div>
      </div>
  );
}

// 头部组件
export const Header = () => {
  return (
      <div>
        <Navigator/>
      </div>
  )
}
