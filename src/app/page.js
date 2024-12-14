import Link from "next/link";
import styles from "@/styles/index.module.css"
import ImageCarousel from "@/components/ImageCarousel";

const DescriptionBox = ({title, slogan}) => {
  return (
      <div className={styles.descriptionBox}>
        <div className={styles.descriptionBoxTitle}>
          <span>{title}</span>
        </div>
        <div style={{marginLeft: 'auto'}}></div>
        <div className={styles.descriptionBoxContent}>
          <span>{'——' + slogan}</span>
        </div>
      </div>
  );
}

export default function Page() {
  const bannerImages = [
    {imagePath: '/images/banner1.jpg', imageName: 'banner1'},
    {imagePath: '/images/banner2.jpg', imageName: 'banner2'},
    {imagePath: '/images/banner3.webp', imageName: 'banner3'},
    {imagePath: '/images/banner4.webp', imageName: 'banner4'},
  ]
  const catalog = [
    {name: '走进桂林', href: '/#understand', id: 1},
    {name: '桂林简介', href: '/#introduce', id: 2},
    {name: '桂林历史', href: '/#history', id: 3},
    {name: '著名景点', href: '/#sceneries', id: 4},
  ]
  const catalogElement = catalog.map(item => {
    return <li key={item.id}><Link href={item.href}><div>{item.name}</div></Link></li>
  })

  return (
      <div className={styles.content} id="understand">
        <div className={styles.understand}>
          <DescriptionBox title={'走进桂林'} slogan={'桂林山水甲天下，玉碧罗青意可参。'}/>
          <div className={styles.understandDetail}>
            <div className={styles.understandDetailList}>
              <ul>{catalogElement}</ul>
            </div>
            <div className={styles.understandDetailCarousel}>
              <ImageCarousel height={'293px'} images={bannerImages}/>
            </div>
            <div className={styles.understandDetailPhotosSet}>
              <img src="/images/banner1.jpg" alt="" width="50%" height="146px"/>
              <img src="/images/banner2.jpg" alt="" width="50%" height="146px"/>
              <img src="/images/banner3.webp" alt="" width="50%" height="147px"/>
              <img src="/images/banner4.webp" alt="" width="50%" height="147px"/>
            </div>
          </div>
        </div>
        <div className={styles.introduce} id="introduce">
          <DescriptionBox title={'桂林简介'} slogan={'士气未饶军气振，文场端似战场酣。'}/>
          222
        </div>
        <div className={styles.history} id="history">
          <DescriptionBox title={'桂林历史'} slogan={'九关虎豹看劲敌，万里鲲鹏伫剧谈。'}/>
          333
        </div>
        <div className={styles.sceneries} id="sceneries">
          <DescriptionBox title={'著名景点'} slogan={'老眼摩挲顿增爽，诸君端是斗之南。'}/>
          <div>4444</div>
          <div>4444</div>
          <div>4444</div>
          <div>4444</div>
          <div>4444</div>
          <div>4444</div>
          <div>4444</div>
        </div>
      </div>
  );
}
