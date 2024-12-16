import { Image } from "antd";
import PreviewGroup from "antd/es/image/PreviewGroup"

const ImageFrame = ({items, description, imageWidth, imageHeight, frameWidth, frameHeight, center}) => {
  let styles = {
    textAlign: "center",
    width: frameWidth || '100%',
    height: frameHeight || '100%',
    border: '#dedddd 5px solid',
    boxShadow: '0 0 3px 3px #ededed',
  }
  if (center) {
    styles.margin = '0 auto'
  }
  return (
      <div style={styles}>
        <div>
          <PreviewGroup items={items}>
            <Image src={items[0]} width={imageWidth || '100%'} height={imageHeight || '100%'}/>
          </PreviewGroup>
        </div>
        <div style={{backgroundColor: '#f2f2f2', padding: '5px', fontSize: '16px'}}>
          <span>{description}</span>
        </div>
      </div>
  );
}

export default ImageFrame
