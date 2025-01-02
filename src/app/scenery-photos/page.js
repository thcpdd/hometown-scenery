'use client'

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Select } from "antd";
import ImageFrame from "@/components/ImageFrame";
import styles from "@/styles/photos.module.css"


const Pictures = ({ images }) => {
  return images.map((item, i) => {
    return <ImageFrame
        key={i}
        items={item.path}
        imageHeight={"178px"}
        frameWidth={"300px"}
        description={item.description}
    />
  })
}

// https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
const Main = () => {
  const params = useSearchParams()
  const paramsValue = params.get('sceneryName') || 'lijiang'
  const [defaultValue, setDefaultValue] = useState(paramsValue)
  const options = [
    {label: '漓江', value: 'lijiang'},
    {label: '象鼻山', value: 'xiangbishan'},
    {label: '灵渠', value: 'lingqu'},
  ]
  const images = {
    lijiang: [
      {path: ["images/lijiang/8.webp", "images/lijiang/9.jpg", "images/lijiang/24.jpg", "images/lijiang/25.jpg"], description: '漓江元宝山'},
      {path: ["images/lijiang/10.jpg", "images/lijiang/11.jpg", "images/lijiang/29.jpg"], description: '夕阳和漓江'},
      {path: ["images/lijiang/12.jpg", "images/lijiang/14.jpg", "images/lijiang/15.jpg", "images/lijiang/21.jpg", "images/lijiang/27.jpg"], description: '漓江'},
      {path: ["images/lijiang/13.jpg"], description: '漓江黎明静悄悄'},
      {path: ["images/lijiang/17.jpg", "images/lijiang/20.jpg", "images/lijiang/26.jpg", "images/lijiang/28.jpg"], description: '漓江夜景'},
      {path: ["images/lijiang/15.jpg", "images/lijiang/16.jpg"], description: '桂林山水甲天下'},
      {path: ["images/lijiang/18.jpg", "images/lijiang/22.jpg", "images/lijiang/23.jpg", "images/lijiang/30.jpg"], description: '漓江——人间仙境'},
      {path: ["images/lijiang/19.jpg"], description: '在天空中看到的漓江景色'},
      {path: ["images/lijiang/31.jpg"], description: '画中漓江'},
    ],
    xiangbishan: [
      {path: ["images/xiangbishan/6.jpg", "images/xiangbishan/11.jpg", "images/xiangbishan/15.jpg", "images/xiangbishan/20.jpg"], description: '桂林象鼻山景色'},
      {path: ["images/xiangbishan/7.jpg", "images/xiangbishan/10.jpg"], description: '象鼻山俯视图'},
      {path: ["images/xiangbishan/8.jpg", "images/xiangbishan/9.jpg", "images/xiangbishan/12.jpeg", "images/xiangbishan/13.jpg"], description: '象鼻山夜景'},
      {path: ["images/xiangbishan/17.jpg", "images/xiangbishan/14.jpg", "images/xiangbishan/16.jpg"], description: "象鼻山公园"},
      {path: ["images/xiangbishan/18.jpg"], description: "象鼻山公园栈道"},
      {path: ["images/xiangbishan/19.jpg"], description: "普贤塔"},
    ],
    lingqu: [
      {path: ["images/lingqu/5.jpg", "images/lingqu/7.jpg", "images/lingqu/8.jpg", "images/lingqu/9.jpg", "images/lingqu/11.jpg", "images/lingqu/13.jpg", "images/lingqu/14.jpg", "images/lingqu/15.jpg", "images/lingqu/16.jpg"], description: '灵渠'},
      {path: ["images/lingqu/4.jpg"], description: '灵渠塔'},
      {path: ["images/lingqu/6.jpg", "images/lingqu/10.jpg", "images/lingqu/12.jpg", "images/lingqu/17.jpg", "images/lingqu/18.jpg", "images/lingqu/19.jpg", "images/lingqu/20.jpg", "images/lingqu/21.jpg", "images/lingqu/22.jpg"], description: '灵渠公园'}
    ],
  }

  return (
      <div className={styles.content}>
        <div className={styles.title}>
          <div>📸景点影像：</div>
          <Select defaultValue={defaultValue} style={{width: 90}} options={options} onChange={v => {setDefaultValue(v)}}/>
        </div>
        <div className={styles.detail}>
          <Pictures images={images[defaultValue]}/>
        </div>
      </div>
  );
}

const Page = () => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <Main/>
      </Suspense>
  )
}

export default Page
