import { Image } from "antd";
import PreviewGroup from "antd/es/image/PreviewGroup"

// 相框组件
const ImageFrame = ({items, description, imageWidth, imageHeight, frameWidth, frameHeight, center, margin}) => {
  let styles = {
    textAlign: "center",
    width: frameWidth || '100%',
    height: frameHeight || '100%',
    border: '#dedddd 3px solid',
    boxShadow: '0 0 2px 2px #ededed',
    borderRadius: '10px',
    overflow: 'hidden'
  }
  if (margin) {
    styles.margin = margin
  }
  if (center) {
    styles.margin = '0 auto'
  }
  let Group
  if (items.length > 1) {
    Group = (
        <PreviewGroup items={items}>
          <Image src={items[0]} width={imageWidth || '100%'} height={imageHeight || '100%'}/>
        </PreviewGroup>
    )
  } else {
    Group = <Image src={items[0]} width={imageWidth || '100%'} height={imageHeight || '100%'}/>
  }
  return (
      <div style={styles}>
        <div>{Group}</div>
        <div style={{backgroundColor: '#f2f2f2', padding: '5px', fontSize: '16px'}}>
          <span>{description}</span>
        </div>
      </div>
  );
}

export default ImageFrame
