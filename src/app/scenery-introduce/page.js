'use client'

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Divider, Typography } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "@/components/Paragraph";
import ImageFrame from "@/components/ImageFrame";
import styles from "@/styles/introduce.module.css"


const SceneryList = ({ currentSceneryName }) => {
  const sceneryNames = [
    {name: '漓江', href: '/scenery-introduce?sceneryName=lijiang', sign: 'lijiang'},
    {name: '象鼻山', href: '/scenery-introduce?sceneryName=xiangbishan', sign: 'xiangbishan'},
    {name: '灵渠', href: '/scenery-introduce?sceneryName=lingqu', sign: 'lingqu'},
  ]
  const sceneryNamesNode = sceneryNames.map((item, i) => {
    let className = ''
    if (currentSceneryName === item.sign) {
      className = styles.activate
    }
    return <li key={i}><Link href={item.href} className={className}>{item.name}</Link></li>
  })

  return (
      <div className={styles.sceneryList}>
        <div className={styles.listName}>景点列表</div>
        <div className={styles.listItem}>
          <ul>{sceneryNamesNode}</ul>
        </div>
      </div>
  );
}

// 这个组件的内容在真实的网站中应该是存储在后端，而不是在这里写死
const _LiJiangDescriptionContent = () => {
  return (
      <Typography>
        <Paragraph>
          漓江，珠江流域西江支流桂江上游河段的通称，属珠江流域西江水系，位于桂林市。
          传统意义上的漓江，起点为桂江源头越城岭猫儿山，现代水文定义为兴安县溶江镇灵渠口，终点为平乐三江口。
        </Paragraph>
        <ImageFrame items={["/images/lijiang/1.png"]} description={'漓江干流走向'} frameWidth={"60%"} center={true} many={false}/>
        <Paragraph>
          漓江上游河段为大溶江，下游河段为传统名称的桂江。灵渠河口为桂江大溶江段和漓江段的分界点，
          荔浦河、恭城河口为漓江段和桂江段的分界点。漓江段流经兴安、灵川、桂林、阳朔、平乐等地，全长164公里。
          沿江河床多为水质卵石，泥沙量小，水质清澈，两岸多为岩溶地貌。旅游资源丰富，著名的桂林山水就在漓江上。
        </Paragraph>
        <Paragraph>
          漓江曾是岭南与中原交往的水上重要通道，对于国家的统一、经济文化的交流起过重要作用。20世纪30年代后，漓江航运地位与作用逐步为公路、铁路所取代。
        </Paragraph>
        <Paragraph>
          历史上对漓江的发源地，有三种说法：（一）《水经注》称：“漓水亦出阳海山”，“湘漓同源，分为二分，南为漓水，北则湘川”。
          宋·范成大《桂海虞衡志》称：“湘漓二水，皆出灵川之海阳，行百里，分南北而下。北曰湘……，南曰漓，……”。
          （二）清·乾隆五至八年任兴安知县的黄海则说，漓水发源于县南之双女井。（三）唐兆民在《灵渠文献粹编》的《引言》中说：“……离水（漓水），
          实际上就是源出今兴安县西的严冈，上游称源江、中段称石龙江、下游称清水河、水流三十多里的一条溪河，也就是历史上著名的澪水（零水）”。
          “可知澪（零）水即是离（漓）水”。各说所指均系灵渠的水源，并非今天的漓江。
        </Paragraph>
        <Paragraph>
          漓江发源于广西壮族自治区兴安县华江乡（四百里越城岭山脉的最高峰）猫儿山东北面海拔1732米（黄海基面）的老山界南侧。四周群山环抱，
          竹海茫茫，漓江主源乌龟江和砂木江在山脚下高寨村区域的十里峡谷（猫儿山十里峡谷）相会，在南流中西接龙塘江，东纳黑洞江，三江汇合后称六峒河，
          往南流至司门前与黄柏江、川江汇合称大溶江，至溶江镇附近与灵河汇合，始称漓江。漓江经灵川县过桂林市在平乐县平乐镇北与恭城河汇合，
          漓江段全长164公里。平乐镇以下称桂江。河流继续南流至梧州汇入西江。
        </Paragraph>
        <ImageFrame items={["/images/lijiang/2.png"]} description={'漓江段上段兴安县溶江镇段'} frameWidth={"60%"} center={true} many={false}/>
        <Paragraph>
          在兴安县境，自溶江镇河口，接古运河灵渠，为漓江起点（古代水文认为：灵渠为漓江的上源），接小溶江后出境。
        </Paragraph>
        <ImageFrame items={["/images/lijiang/3.png"]} description={'漓江灵川县三街镇段'} frameWidth={"60%"} center={true} many={false}/>
        <Paragraph>
          在灵川县境，在小溶江村进入境。漓江境内流域面积2173.29平方公里。全长45公里，分两段：上段长33.5公里，河面平均宽度160米。
          自小溶江村起，流经峡背、岩头、三街、富丘渡、渡头、双潭、崔家圩、三岔尾；先后纳白云江、潞江、淦江、瀑布水、三百源、甘棠江诸水，
          沿下秦至大面圩流入桂林市。下段11.5公里，河面平均宽度220米，均卵石夹沙泥河底。自大圩镇上力脚村再人县境，经敢兴、大圩镇至南村，
          纳黄沙河、涧沙河、潮田河3水，南流至清水潭受古东水，出桂林市郊、下阳朔县。
        </Paragraph>
        <ImageFrame items={["/images/lijiang/4.png"]} description={'漓江桂林市城区段'} frameWidth={"60%"} center={true} many={false}/>
        <Paragraph>
          在桂林市区，漓江在灵川县秦家进入桂林市区，由北向南穿过城区，汇桃花江后至斗鸡山折向南流，过灵川大圩镇又蜿蜒向南，
          在草坪乡冠岩处入阳朔境，流经市区49.3公里。在桂林水文站（穿山乡樟木村尾）处流域面积为2762平方公里，流域平均宽度39.2公里，
          干流长105公里。流域形状为上、下游两头较窄，中间宽的长形多支流河系。大溶江至桂林为岩溶峰林平原，河床比降为0.94%，市区段河床平均比降为0.44%。
        </Paragraph>
        <ImageFrame items={["/images/lijiang/5.png"]} description={'漓江阳朔县兴平镇段'} frameWidth={"60%"} center={true} many={false}/>
        <ImageFrame items={["/images/lijiang/6.png"]} description={'漓江阳朔县阳朔镇段'} frameWidth={"60%"} center={true} many={false}/>
        <Paragraph>
          在阳朔县境，自杨堤乡官岩村流入县境。入本县境流经杨堤、兴坪、福利、阳朔镇、城关、普益、接纳山背河、土岭河、大源河、樟桂河、双月河、
          田家河、双桥河等支流，至普益乡马草坪入平乐县境，共长69公里，占漓江干流（通常称兴安至平乐河段为漓江，全长164公里）的42%，为流经各县境最长的一段。
        </Paragraph>
        <ImageFrame items={["/images/lijiang/7.png"]} description={'漓江段终点平乐县平乐镇段（我土生土长的地方）'} frameWidth={"60%"} center={true} many={false}/>
        <Paragraph>
          在平乐县境，荔江（荔浦河、漓江、茶江（恭城河））三江在平乐镇相汇称桂江，往南流入昭平县。
        </Paragraph>
        <ImageFrame items={["/images/lijiang/8.webp"]} description={'阳朔县兴坪镇元宝山'} frameWidth={"60%"} center={true} many={false}/>
        <Paragraph>其中，20元的人名币背面的景色就来源于阳朔段的漓江。</Paragraph>
      </Typography>
  );
}

// 这个组件的内容在真实的网站中应该是存储在后端，而不是在这里写死
const _XiangBiShanDescriptionContent = () => {
  return (
      <Typography>
        <Title level={3}>象山历史</Title>
        <Paragraph>
          象山景区位于广西壮族自治区桂林市内，占地11.88万平方米。是一个集山青、水秀、洞奇、石美于一体的多元化国际精品旅游景区。
        </Paragraph>
        <Paragraph>
          宋代乾道初年诗人张孝祥，曾到广西桂林任广南西道经略安抚使，张孝祥与另一位桂林官员张维，在水月洞边一座凉亭内设宴，
          于是将凉亭命名为“朝阳亭”，并将水月洞改名为“朝阳洞”，并有一块碑刻《朝阳亭诗并序》留于洞内。
        </Paragraph>
        <Paragraph>后来改称洞名的这件事在桂林的老百姓中却通不过。</Paragraph>
        <Paragraph>南宋乾道九年（1173年），恢复了水月洞原来的名称。从南宋乾道九年（1173年）起，八百多年来一直沿用水月洞的名称。</Paragraph>
        <Paragraph>1986年，象山景区成立。象山景区以象鼻山为中心，涵盖了水月洞、象眼岩、普贤塔、云峰寺及寺内的太平天国革命遗址陈列馆等景观。</Paragraph>
        <Paragraph>2003年，象山景区被列为“世界旅游组织推荐游览景区”。</Paragraph>
        <Paragraph>2005年，象山景区被《中国国家地理》“选美中国”活动评选为中国最美的五大峰林之首的大自然奇迹。</Paragraph>
        <Paragraph>2017年，桂林市两江四湖•象山景区被评为国家AAAAA级旅游景区。</Paragraph>
        <Title level={3}>主要景点</Title>
        <Title level={4}>象鼻山</Title>
        <Paragraph>象鼻山，原名漓山，位于桂林市桃花江与漓江汇流之处，因其看上去犹如一只大象在用鼻子饮水，故后得名象鼻山。作为桂林旅游的标志性景点，象鼻山于1995年被定为桂林的城徽标志，也被外国游客誉为“中国符号”。</Paragraph>
        <ImageFrame items={['images/xiangbishan/1.webp']} center={true} frameWidth={"60%"} many={false} description={'象鼻山'}/>
        <Title level={4}>水月洞</Title>
        <Paragraph>
          水月洞位于象山的东端，其北依象山，东临漓江，西有桃花江，是个两面贯穿的圆洞。洞高12米，宽9.5米，长17米，像个卷篷式的大洞门，
          江水荡漾其中，好像一轮明月浮在水上。宋代蓟北处士诗云：水底有明月，水上明月浮。水流月不去，月去水还流。因名《水月洞》。
          水月洞内还保存着22幅唐、宋石刻，其中唐代诗人韩愈的名句：江作青罗带，山如碧玉簪，也镌刻于此。洞内文字多达3065个，
          是世界上洞壁面积最小却拥有唐、宋石刻文字最多的水洞。2015年，荣获了大世界基尼斯纪录。
        </Paragraph>
        <ImageFrame items={['images/xiangbishan/2.jpg']} center={true} frameWidth={"60%"} many={false} description={'水月洞'}/>
        <Title level={4}>普贤塔</Title>
        <Paragraph>
          象鼻山巅有一座普贤塔，远远望去，像插在象背上的剑柄，又像一只古雅的宝瓶。该塔始建于明代，为喇嘛式实心砖塔，距今已有400多年历史。
          塔高13.6米，塔身正北面嵌有一幅青石线刻的菩萨像，上端有“南无普贤菩萨”字样。佛经中说普贤菩萨专管智慧、道德，其坐骑正是六牙白象。
        </Paragraph>
        <ImageFrame items={['images/xiangbishan/3.webp']} center={true} frameWidth={"60%"} many={false} description={'普贤塔'}/>
        <Title level={4}>送子观音像</Title>
        <Paragraph>
          在象鼻山南麓云峰寺后的崖壁上，有明代“送子观音像”一龛，这也是桂林唯一有彩色的摩崖造像。观音菩萨身着华服，头戴天冠，双手抱一小孩放膝上，
          端坐于莲台上，身后有圆形火焰身光及头光。主像两侧，各立女侍一人，头梳发髻，着宽袖长袍宫装。龛外左右两侧站立两小孩，双手拱揖。
        </Paragraph>
        <ImageFrame items={['images/xiangbishan/4.webp']} center={true} frameWidth={"60%"} many={false} description={'送子观音像'}/>
        <Title level={4}>云峰寺</Title>
        <Paragraph>
          云峰寺位于象山西南麓，初建于唐代，后屡有修葺。清光绪十七年（1891年）重建，为尼姑所居住。1978年，桂林市文物管理委员会参照原建制改建这座寺院，寺内有太平天国历史文物陈列室，对外开放。
        </Paragraph>
        <Title level={4}>三花酒窖</Title>
        <Paragraph>
          象山的腹部，有一个近3000平方米的藏酒岩洞，可藏千缸、达两千吨的“桂林三花酒”。象鼻山的岩洞藏酒，已有悠久的历史，
          自北宋以来就成为官府酒坊的酒窖。因岩洞长年恒温在摄氏20度左右，且湿度保持在80—100%条件下，有利于酒的酯化。在藏酒洞里所藏的酒，
          一般有20年的时间，有的甚至30年以上，最好的酒已藏50年。
        </Paragraph>
        <ImageFrame items={['images/xiangbishan/5.png']} center={true} frameWidth={"60%"} many={false} description={'三花酒窖'}/>
        <Title level={4}>舍利塔</Title>
        <Paragraph>
          舍利塔，位于象鼻山西南面约500米处，离文昌桥南头不远的民主路万寿巷内。舍利塔原是桂林古“开元寺”的遗物，建于唐显庆四年（659年）。
          原为七级砖塔，高30多米，是用以保存寺庙高僧尸体焚化后的“舍利子”的地方。现存的舍利塔是明洪武十八年（1385年）重建的，塔高13.22米，
          塔东西宽25米，为喇嘛式三级砖塔。正门即南门的门额上刻有“舍利宝塔”四字，四门门额两旁分列八大金刚之名。
        </Paragraph>
        <Title level={4}>爱情岛</Title>
        <Paragraph>
          在象山公园里，离象鼻山不远处有一小岛，此处常是青年男女约会的地方，故称为“爱情岛”。岛上可以看到象鼻山与穿山、塔山所构成美丽的“三山景色”。
        </Paragraph>
      </Typography>
  );
}

// 这个组件的内容在真实的网站中应该是存储在后端，而不是在这里写死
const _LingQuDescriptionContent = () => {
  return (
      <Typography>
        <Paragraph>
          灵渠，古称秦凿渠、零渠、陡河、兴安运河、湘桂运河，是古代中国劳动人民创造的一项伟大工程。位于广西壮族自治区兴安县境内，
          于公元前214年凿成通航。灵渠流向由东向西，将兴安县东面的海洋河（湘江源头，流向由南向北）和兴安县西面的大溶江（漓江源头，流向由北向南）
          相连，是世界上最古老的运河之一，有着“世界古代水利建筑明珠”的美誉。
        </Paragraph>
        <Paragraph>
          1988年，灵渠被中华人民共和国国务院公布为第三批全国重点文物保护单位。 2018年8月13日，
          灵渠等4个项目入选2018年（第五批）世界灌溉工程遗产名录。2021年1月，“灵渠”入选第四批国家水情教育基地名单。
        </Paragraph>
        <ImageFrame items={['images/lingqu/1.png']} center={true} description={'灵渠主体工程'} frameWidth={'60%'} many={false}></ImageFrame>
        <Paragraph>
          灵渠水系由北南两渠组成。北渠俗称湘江新道，全由人工开凿而成，大致与湘江故道略成平行，渠槽在田畴间，其水位高过湘江故道，湘江水在分水塘经铧嘴分流和大小天坪坝引流后，约7分水流入北渠，在高塘村与湘江故道相会，全长3.25公里，最大引流量为12立方米每秒。
        </Paragraph>
        <Paragraph>
          南渠自南陡口起，过严关，流至溶江镇老街的灵河口入漓江，全长约33.15公里，南渠引湘江水约3分，最大引流量为6立方米每秒。
          灵渠自越城峤至溶江镇的灵河口一段约29公里，主要的自然河流有4条。一为越城峤以南的始安水，源出越城峤与点灯山之间的山谷，
          流程2.5公里至铁炉陡附近汇入灵渠；一为源出台板石之石龙江（又称清水河），北流10公里后再折向西流至灵山庙入灵渠；一为源出唐公背山之马尿河，
          北流13公里折西至严关零西村入灵渠；一为源出三青岩，经梅村垌至乐施堂，再西至青石陡入灵渠，长15公里。
        </Paragraph>
        <Paragraph>
          南渠自南陡口往北经兴安县城、大湾陡、折向西北穿越越城峤至铁路村会始安水，长4公里，全为人工开凿的航道，宽8～15米，水深1～1.8米，
          河床全为泥沙结构；始安水入口以下向西流至灵山庙，石龙江与灵渠汇口处，河长6.15公里，系将灵渠支流始安水小溪扩宽加深，挖成弯曲航道，
          宽8～15米，河床多为泥沙结构，水深0.4～1.3米；自灵山庙以下续向西流经严关乡至溶江镇老水街灵河口此段22.8公里，为灵渠干流经过整治的水道，
          渠宽15～50米，水深0.5～3米，河床为卵石和泥沙构成。
        </Paragraph>
        <ImageFrame items={['images/lingqu/2.png']} center={true} description={'灵渠俯瞰图'} frameWidth={'60%'} many={false}></ImageFrame>
      </Typography>
  );
}

const SceneryDescription = ({ currentSceneryName }) => {
  const sceneryDescriptionRef = useRef(null)
  // 每次页面切换时都使滚动条回到顶部
  useEffect(() => {
    if (sceneryDescriptionRef.current) {
      sceneryDescriptionRef.current.scrollTop = 0
    }
  }, [currentSceneryName])

  // 正常情况下，下面的这些判断都是在后端完成的
  // 后端——开始
  let sceneryChineseName, DescriptionContent
  switch (currentSceneryName) {
    case 'lijiang':
      sceneryChineseName = '漓江';
      DescriptionContent = _LiJiangDescriptionContent;
      break;
    case 'xiangbishan':
      sceneryChineseName = '象鼻山';
      DescriptionContent = _XiangBiShanDescriptionContent;
      break;
    case 'lingqu':
      sceneryChineseName = '灵渠';
      DescriptionContent = _LingQuDescriptionContent;
      break;
    default:
      sceneryChineseName = '漓江';
      DescriptionContent = _LiJiangDescriptionContent;
  }
  const title = '《' + sceneryChineseName + '》' + '景点介绍'
  // 后端——结束

  return (
      <div ref={sceneryDescriptionRef} className={styles.sceneryDescription}>
        <div className={styles.sceneryDescriptionTitle}>
          <h1>{title}</h1>
        </div>
        <Divider plain>文章内容均来源于网上</Divider>
        <div className={styles.sceneryDescriptionContent}>
          <DescriptionContent/>
        </div>
        <Divider/>
        <Link
            href={'/scenery-photos?sceneryName=' + currentSceneryName}
            style={{color: '#34b585', fontSize: '14px', float: 'right', marginBottom: '10px'}}
        >景点影像集&nbsp;&gt;
        </Link>
      </div>
  );
}

const Page = () => {
  const params = useSearchParams()
  let currentSceneryName = params.get('sceneryName') || 'lijiang'

  return (
    <div className={styles.content}>
      <SceneryList currentSceneryName={currentSceneryName}/>
      <SceneryDescription currentSceneryName={currentSceneryName}/>
    </div>
  );
}

export default Page
