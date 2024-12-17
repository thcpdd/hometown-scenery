'use client'

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Select } from "antd";
import ImageFrame from "@/components/ImageFrame";
import styles from "@/styles/photos.module.css"


const Pictures = ({ images }) => {
  return images.map((item, i) => {
    return <ImageFrame
        key={i}
        items={[item.path]}
        imageHeight={"178px"}
        frameWidth={"31%"}
        description={item.description}
        many={false}/>
  })
}

const Page = () => {
  const params = useSearchParams()
  const paramsValue = params.get('sceneryName') || 'lijiang'
  const [defaultValue, setDefaultValue] = useState(paramsValue)
  const options = [
    {label: '漓江', value: 'lijiang'},
    {label: '象鼻山', value: 'xiangbishan'},
    {label: '灵渠', value: 'lingqu'},
  ]
  const images = {
    lijiang: [{path: "images/banner1.jpg", description: '图片1'}, {path: "images/banner2.jpg", description: '图片2'}, {path: "images/banner2.jpg", description: '图片2'}],
    xiangbishan: [{path: "images/banner2.jpg", description: '图片1'}, {path: "images/banner3.webp", description: '图片2'}, {path: "images/banner2.jpg", description: '图片2'}],
    lingqu: [{path: "images/banner4.webp", description: '图片1'}, {path: "images/banner2.jpg", description: '图片2'}, {path: "images/banner1.jpg", description: '图片1'}],
  }

  return (
      <div className={styles.content}>
        <div className={styles.title}>
          <div>🖼️景点影像：</div>
          <Select defaultValue={defaultValue} style={{width: 90}} options={options} onChange={v => {setDefaultValue(v)}}/>
        </div>
        <div className={styles.detail}>
          <Pictures images={images[defaultValue]}/>
        </div>
      </div>
  );
}

export default Page