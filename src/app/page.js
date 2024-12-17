'use client'

import { useState } from "react";
import Link from "next/link";
import { Image, Typography, Steps, Tooltip, Tabs } from "antd";
import Paragraph from "@/components/Paragraph";
import styles from "@/styles/index.module.css"
import ImageCarousel from "@/components/ImageCarousel";
import ImageFrame from "@/components/ImageFrame";


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

const ImpressionContent = () => {
  const bannerImages = [
    {imagePath: '/images/banner1.jpg', imageName: 'banner1'},
    {imagePath: '/images/banner2.jpg', imageName: 'banner2'},
    {imagePath: '/images/banner3.webp', imageName: 'banner3'},
    {imagePath: '/images/banner4.webp', imageName: 'banner4'},
  ]

  const catalog = [
    {name: '桂林印象', href: '/#impression', id: 1},
    {name: '桂林简介', href: '/#introduce', id: 2},
    {name: '桂林历史', href: '/#history', id: 3},
    {name: '著名景点', href: '/#sceneries', id: 4},
  ]

  const catalogElement = catalog.map(item => {
    return <li key={item.id}><Link href={item.href}><div>{item.name}</div></Link></li>
  })

  return (
      <div className={styles.impression} id="impression">
        <DescriptionBox title={'桂林印象'} slogan={'桂林山水甲天下，玉碧罗青意可参。'}/>
        <div className={styles.impressionDetail}>
          <div className={styles.impressionDetailList}>
            <ul>{catalogElement}</ul>
          </div>
          <div className={styles.impressionDetailCarousel}>
            <ImageCarousel height={'293px'} images={bannerImages}/>
          </div>
          <div className={styles.impressionDetailPhotosSet}>
            <Image src="/images/banner1.jpg" alt="" width="50%" height="146px"/>
            <Image src="/images/banner2.jpg" alt="" width="50%" height="146px"/>
            <Image src="/images/banner3.webp" alt="" width="50%" height="147px"/>
            <Image src="/images/banner4.webp" alt="" width="50%" height="147px"/>
          </div>
        </div>
      </div>
  );
}

const IntroduceContent = () => {
  return (
      <div className={styles.introduce} id="introduce">
        <DescriptionBox title={'桂林简介'} slogan={'士气未饶军气振，文场端似战场酣。'}/>
        <div className={styles.introduceDetail}>
          <Typography>
            <Paragraph>
              桂林市（Guilin City），简称“桂”，古称桂州、静江、始安，广西壮族自治区辖地级市，省域副中心城市，地处中国华南，
              湘桂走廊南端，位于南岭山系西南部、桂林—阳朔岩溶盆地北端中部，处在“湘桂夹道”中，属亚热带季风气候，总面积2.78万平方千米。
              截至2023年5月，全市辖6个市辖区、8个县、2个自治县，代管1个县级市。2023年末，桂林市常住人口为495.07万人。
            </Paragraph>
            <Paragraph>
              “桂林”之名，始于秦代，秦始皇置桂林、象、南海三郡，桂林郡因当地盛产玉桂而成名，这是“桂林”名称的最早起源。
              桂林市是世界著名风景游览城市、万年智慧圣地、全国重要高新技术产业基地，中国老工业基地，是Ⅱ型大城市、三线城市，
              国务院批复确定的中国对外开放国际旅游城市、全国旅游创新发展先行区和国际旅游综合交通枢纽，
              是泛珠江三角洲经济区与东盟自由贸易区战略交汇的重要节点城市，国家卫生城市，全国文明城市，第二批海绵城市建设示范城市，
              是以新型工业为主的国际旅游胜地。 是首批国家历史文化名城，秦始皇统一岭南后属桂林郡。桂林是广西重要高校集聚区，
              拥有广西师范大学、桂林电子科技大学、桂林理工大学、桂林医学院、陆军特种作战学院等16所高校。
            </Paragraph>
            <Paragraph>
              桂林是山水甲天下的国际旅游名城、底蕴深厚的国家历史文化名城、宜居宜养的生态山水名城。
              <Tooltip title="桂林三宝分别是：桂林三花酒、桂林辣椒酱、桂林豆腐乳">
                <span className={styles.introduceThreeTreasures}>“万年文化桂林三宝”</span>
              </Tooltip>
              是桂林市具有世界级品质的文化瑰宝。
            </Paragraph>
          </Typography>
        </div>
      </div>
  );
}

const createHistoryContent = (historyContent) => {
  let id = 0;
  const content = historyContent.map(item => {
    return <Paragraph key={id++} style={{fontSize: '16px', textIndent: '2em'}}>{item}</Paragraph>
  })
  return <Typography>{content}</Typography>
}

const HistoryContent = () => {
  const [current, setCurrent] = useState(0);
  const historyContents = [
      ['夏商周时期，该处是“百越人”的居住地。', '春秋战国时期，岭南称百越之地，桂林属百越的一部分。'],
      ['公元前214年，秦王朝征服百越，在岭南设置桂林郡、南海郡和象郡。秦始皇开凿灵渠，沟通湘、' +
      '漓二水后，桂林便成为“南连海域，北达中原”的重镇。秦始皇统一岭南后，' +
      '桂林的政治、经济、文化和军事地位越来越突显。', '秦始皇二十八年（公元前219年），秦军50万，南下统一百越，' +
      '在兴安开凿了可与长城并称的灵渠。', '西汉元鼎六年（公元前111年），在今桂林设始安县，隶属荆州零陵郡。东汉改属始安侯国。三国先属蜀，' +
      '后归吴。甘露元年（265年），置始安郡始安县，郡县治所都在今之桂林。南朝改为桂州。'],
      ['隋唐时属岭南桂州总管府。', '唐武德四年（621年），李靖修城于独秀峰南。贞观八年（634年），改名临桂县，属桂州始安郡。唐初地方设州、' +
      '县。岭南45州分属广州、桂州、容州、邕州、安南5个都督府（又称岭南五管）。永徽六年（655年）以后，5府皆隶于广州，长官称为五府（管）经略使，' +
      '由广州刺史兼任。光化三年（900年）始，属静江使度。', '五代十国先后属楚和南汉的桂州。', '从南朝开始，桂林逐渐成为岭南西部的政治中心。'],
      ['宋时，前属广南西路桂州，后属静江府。宋代地方行政制度分路、州（府、军）、县三级。', '宋太宗至道三年（997年），桂州成为' +
      '广南西路的省会。', '宋高宗绍兴三（1133年）年，因高宗即位前受封“静江军节度使”，将桂州视为潜邸，桂州升为静江府。',
      '元时，元世祖至元十三（1276年）年，元军攻占静江府。至元十五年（1278年），升静江府为静江路，并为广西两江道治所，故桂林在南宋、' +
      '元时期又称为“静江”。'],
      ['明朝，朱元璋的侄孙朱守谦被封为靖江王，藩国桂林。明洪武五年（1372年）修建府第，洪武五年，明朝政府改静江府为桂林府，' +
      '布政使司、府、县三级地方政权的治所仍置于桂林。', '明王朝在桂林城区修建了靖江王府，后筑靖江王城。靖江王袭14代，历270余年。' +
      '靖江王城虽历经战火，城内建筑只剩残基石栏，但用大青石筑成的城墙保存完好，为全国唯一保存完好的古代藩王城址。', '清世祖顺治六年（1649年），清军攻' +
      '占桂林府，仍置广西布政司于此，后广西巡抚同驻。清代沿明旧制，桂林仍是广西全省的政治、文化中心。清代在原靖江王城内建起的广西贡院，' +
      '铸造了广西古代教育史上的辉煌，迄今王城的城门上仍镶嵌着“三元及第”“状元及第”“榜眼及第”等牌匾。'],
      ['民国时，属广西省，民国历史上长期为广西省会。', '民国元年（1912年）1月21日，省会从桂林迁往南宁。4月19日，驻桂林议员成立临时省议会。' +
      '形成“桂林议会”和“南宁议会”。8月28日，广西省会由桂林迁设南宁，获得北京临时政府内务部的批准。', '民国三年（1914年），改名桂林县。', '民国二' +
      '十一年（1932年），以新桂系为首的李宗仁、白崇禧主政广西，出于抗战的准备和安全的考虑，计划将省府迁回桂林。', '民国二十五年（1936年）10月1日，广西省政府和' +
      '国民革命军第四集团军总部迁回桂林；同时省会从南宁迁回到桂林；桂林成为新桂系军阀统治的省城，省立广西大学从迁至桂林雁山西林公园；' +
      '桂林公安局改为省会公安局；11月，广西省银行总行迁桂林营业', '民国二十七年（1938年），抗日战争爆发，武汉、广州相继沦陷，工厂内迁，' +
      '桂林人口骤增。抗战时期桂林是仅次于重庆的大后方重镇，桂林成为华南地区军事、政治、经济、文化中心和西南抗日重镇，桂林成为国民党统治区进步' +
      '报刊的中心，时称“文化城”', '民国三十三年（1944年）11月至民国三十四年（1945年）7月28日，为日寇占领，光复后仍为广西省辖市。'],
      ['1949年11月22日，桂林解放，为广西省辖市。', '1981年7月、1983年10月，阳朔县、临桂县分别划归桂林市管辖。城区和郊区。', '1996年12月26日，' +
      '经国务院批准，桂林实施部分区划调整，将郊区更名为雁山区。', '1998年9月8日，经国务院批准，桂林市和桂林地区合并，组建新的桂林市。']
  ]
  const titles = ['夏商时期', '秦汉时期', '隋唐时期', '宋元时期', '明清时期', '民国时期', '新中国']
  const steps = titles.map((title, i) => {
    return {title: title, content: createHistoryContent(historyContents[i])}
  })
  const items = steps.map(item => ({
    key: item.title,
    title: item.title,
  }));

  return (
      <div className={styles.history} id="history">
        <DescriptionBox title={'桂林历史'} slogan={'九关虎豹看劲敌，万里鲲鹏伫剧谈。'}/>
        <div className={styles.historyDetail}>
          <Steps
              current={current}
              items={items}
              onChange={v => {setCurrent(v)}}
              progressDot={true}
              direction={"vertical"}
              style={{maxWidth: 'max-content'}}
          />
          <div style={{width: '100%', marginLeft: '5px'}}>
            <h2 style={{marginTop: '5px'}}>历史简述：</h2>
            <div className={styles.historyDescription}>{steps[current].content}</div>
          </div>
        </div>
      </div>
  );
}

const SceneriesContent = () => {
  const items = [
    {
      key: 'lijiang',
      label: '漓江',
      children: <ImageFrame
          items={["/images/banner1.jpg", "/images/banner2.jpg"]}
          description={"部分漓江影像集"}
          frameWidth={"70%"}
          imageHeight={'500px'}
          center={true}
      />,
    },
    {
      key: 'xiangbishan',
      label: '象鼻山',
      children: <ImageFrame
          items={["/images/banner2.jpg", "/images/banner1.jpg"]}
          description={"部分象鼻山影像集"}
          frameWidth={"70%"}
          imageHeight={'500px'}
          center={true}
      />,
    },
    {
      key: 'lingqu',
      label: '灵渠',
      children: <ImageFrame
          items={["/images/banner3.webp", "/images/banner4.webp"]}
          description={"部分灵渠影像集"}
          frameWidth={"70%"}
          imageHeight={'500px'}
          center={true}
      />,
    },
  ];
  const [activeKey, setActiveKey] = useState(items[0].key)

  return (
      <div className={styles.sceneries} id="sceneries">
        <DescriptionBox title={'著名景点'} slogan={'老眼摩挲顿增爽，诸君端是斗之南。'}/>
        <div className={styles.sceneriesDetail}>
          <Tabs
              defaultActiveKey={activeKey}
              items={items}
              size={"large"}
              onChange={v => {setActiveKey(v)}}
              tabBarExtraContent={<Link href={'/scenery-introduce?sceneryName=' + activeKey} style={{color: "#34b585"}}>景点详情&nbsp;&gt;</Link>}
          />
        </div>
      </div>
  );
}

export default function Page() {
  return (
      <div className={styles.content}>
        <ImpressionContent/>
        <IntroduceContent/>
        <HistoryContent/>
        <SceneriesContent/>
      </div>
  );
}
