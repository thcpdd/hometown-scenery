import { Carousel } from "antd";

/*
* 图片轮播图组件
* 不用刻意传ID进来，内部会自己生成
* */
const ImageCarousel = ({ images, height, width }) => {
  let currentID = 0;
  const carouselElements = images.map(item => {
    return <img src={item.imagePath} alt={item.imageName} height={height || "100%"} width={width || "100%"} key={++currentID}/>
  })

  return (
      <Carousel autoplay={true} effect={'fade'} arrows={true}>{carouselElements}</Carousel>
  );
}

export default ImageCarousel
