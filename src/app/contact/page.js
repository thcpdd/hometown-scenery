'use client'

import { useState } from "react";
import { Divider, Modal, Input, Form, Select, Tag } from "antd";
import TextArea from "antd/es/input/TextArea";
import Title from "antd/es/typography/Title";
import styles from "@/styles/contact.module.css"


const ContactContent = () => {
  return (
      <div>
        <div style={{marginBottom: '5px'}}>
          <span>Rainbow&nbsp;(19167820287)</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
          <span style={{fontWeight: "bold", marginRight: '10px', fontSize: '19px'}}>标题</span>
          <Tag color="#34b585">象鼻山</Tag>
        </div>
        <div style={{color: 'gray'}}>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
        <Divider/>
      </div>
  );
}

const Page = () => {
  const [openModal, setOpenModal] = useState(false)
  const selectOptions = [
    {label: '漓江', value: 'lijiang'},
    {label: '象鼻山', value: 'xiangbishan'},
    {label: '灵渠', value: 'lingqu'},
  ]
  const onCancel = () => {
    setOpenModal(false)
  }
  const publish = values => {
    console.log(values)
    setOpenModal(false)
  }

  return (
      <div className={styles.content}>
        <div className={styles.title}>
          <Title level={2} style={{textAlign: 'center'}}>留言板</Title>
          <span className={styles.publish} onClick={() => {setOpenModal(true)}}>发表留言&nbsp;&gt;</span>
          <Modal
              open={openModal}
              onCancel={onCancel}
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
                      onFinish={publish}
                  >{dom}</Form>
              )}
          >
            <Form.Item name="username" label="用户名" rules={[{required: true, message: '请输入用户名'}]}>
              <Input/>
            </Form.Item>
            <Form.Item name="phone" label="手机号" rules={[{required: true, message: '请输入手机号'}]}>
              <Input/>
            </Form.Item>
            <Form.Item name='scenery' label="留言景点" rules={[{required: true, message: '请选择需要留言的景点'}]}>
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
