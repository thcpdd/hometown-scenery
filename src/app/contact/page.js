'use client'

import { useState } from "react";
import { Divider, Modal, Input, Form, Select, Tag, Pagination, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import Title from "antd/es/typography/Title";
import styles from "@/styles/contact.module.css"


const ContactContentItem = ({ username, phone, datetime, title, tag, content }) => {
  return (
      <div>
        <div style={{marginBottom: '5px'}}>
          <span>{ username }</span><br/>
          <span style={{color: 'gray', fontSize: '14px'}}>{ datetime }</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
          <span style={{fontWeight: "bold", marginRight: '10px', fontSize: '20px'}}>{ title }</span>
          <Tag color="#34b585">{ tag }</Tag>
        </div>
        <div style={{color: 'gray'}}>{ content }</div>
        <div style={{marginTop: '10px', display: 'flex'}}>
          <span style={{fontSize: '15px', color: 'gray', marginLeft: 'auto'}}>——该留言来自手机尾号 { phone } 的游客</span>
        </div>
        <Divider/>
      </div>
  );
}

const ContactContent = () => {
  // 所有的留言内容实际情况应来自于后端
  const contents = [
    {username: 'Rainbow', phone: '0287', datetime: '2025年1月1日 10:37', title: '象鼻山太好堪啦！', tag: '象鼻山', content: '象鼻山的壮观景色让人流连忘返，自然奇观令人叹为观止。'},
    {username: '游客1', phone: '1234', datetime: '2024年12月31日 10:38', title: '漓江，推荐', tag: '漓江', content: '漓江的山水如画，乘船游览仿佛置身仙境，绝对值得一游。'},
    {username: '游客2', phone: '2345', datetime: '2024年12月30日 09:11', title: '桂林推荐景点', tag: '灵渠', content: '灵渠不仅历史悠久，而且风光旖旎，是了解古代水利工程的好去处。'},
    {username: '游客3', phone: '3456', datetime: '2024年12月30日 08:56', title: '象鼻山留言', tag: '象鼻山', content: '象鼻山的独特造型和背后的故事给旅程增添了许多趣味和文化气息。'},
    {username: '游客4', phone: '4567', datetime: '2024年12月27日 18:37', title: '灵渠景点介绍', tag: '灵渠', content: '灵渠作为古代重要的交通命脉，至今仍保留着历史的痕迹与美丽的风景。'},
    {username: '游客5', phone: '5678', datetime: '2024年12月16日 10:25', title: '游玩漓江景区心得', tag: '漓江', content: '在漓江边漫步或泛舟，感受大自然的魅力，心灵得到了前所未有的放松。'},
    {username: '游客6', phone: '6789', datetime: '2024年12月13日 19:32', title: '欢迎来到桂林景点象鼻山', tag: '象鼻山', content: '欢迎各位朋友到访象鼻山，体验这独一无二的自然景观，定会不虚此行。'},
  ]
  const [current, setCurrent] = useState(1)
  const pageSize = 5
  const currentContent = contents.slice((current - 1) * pageSize, (current - 1) * pageSize + pageSize)
  const ContactContentItems = currentContent.map((item, i) => {
    return <ContactContentItem key={i} {...item}/>
  })

  return (
      <div>
        <div>{ContactContentItems}</div>
        <Pagination
            current={current}
            onChange={v => {setCurrent(v)}}
            total={contents.length}
            defaultCurrent={1}
            pageSize={pageSize}
            align="center"
        />
      </div>
  )
}

const Page = () => {
  const [openModal, setOpenModal] = useState(false)
  const [messageApi, contextHolder] = message.useMessage();
  const selectOptions = [
    {label: '漓江', value: 'lijiang'},
    {label: '象鼻山', value: 'xiangbishan'},
    {label: '灵渠', value: 'lingqu'},
  ]
  const onFinish = values => {
    messageApi.open({
      type: 'success',
      content: '留言发表成功！'
    })
    console.log(values)
    setOpenModal(false)
  }

  return (
      <div className={styles.content}>
        <div className={styles.title}>
          {contextHolder}
          <Title level={2} style={{textAlign: 'center'}}>📒留言板</Title>
          <span className={styles.publish} onClick={() => {setOpenModal(true)}}>发表留言</span>
          <Modal
              open={openModal}
              onCancel={() => {setOpenModal(false)}}
              title={"发表留言"}
              okText={"发表"}
              cancelText={"取消"}
              okButtonProps={{autoFocus: true, htmlType: 'submit'}}
              destroyOnClose={true}
              modalRender={(dom) => (
                  <Form
                      layout="vertical"
                      initialValues={{
                        modifier: 'public',
                      }}
                      clearOnDestroy
                      onFinish={onFinish}
                  >{dom}</Form>
              )}
          >
            <Form.Item name="username" label="用户名" rules={[{required: true, message: '请输入用户名'}]}>
              <Input/>
            </Form.Item>
            <Form.Item name="phone" label="手机号" rules={[{required: true, message: '请输入手机号'}]}>
              <Input/>
            </Form.Item>
            <Form.Item name='scenery' label="意向景点" rules={[{required: true, message: '请选择需要留言的景点'}]}>
              <Select options={selectOptions}/>
            </Form.Item>
            <Form.Item name="title" label="留言标题" rules={[{required: true, message: '请输入留言标题'}]}>
              <Input/>
            </Form.Item>
            <Form.Item name="content" label="留言内容" rules={[{required: true, message: '请输入留言内容'}]}>
              <TextArea/>
            </Form.Item>
          </Modal>
        </div>
        <Divider/>
        <div className={styles.detail}>
          <ContactContent/>
        </div>
      </div>
  );
}

export default Page
