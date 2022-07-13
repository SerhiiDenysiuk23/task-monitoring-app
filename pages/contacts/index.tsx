import {
  FacebookOutlined,
  GithubOutlined,
  HomeOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import React from 'react'
import s from './style.module.scss'

const ContactsPage = () => {
  const onFinish = (values: any) => {
    console.log(values)
  }
  return (
    <>
      <h1 className={s.Header}>Contact Us</h1>
      <p className={s.Text}>
        We can`t solve your problem if you don`t tell us about it!
      </p>
      <div className={s.Container}>
        <div className={s.HalfBlock}>
          <div className={s.MyForm}>
            <Form name="nest-messages" onFinish={onFinish}>
              <Form.Item name={['user', 'name']} rules={[{ required: true }]}>
                <Input placeholder="*Name" />
              </Form.Item>
              <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}>
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item name={['user', 'introduction']}>
                <Input.TextArea placeholder="Message" />
              </Form.Item>
              <Form.Item>
                <Button block type="primary" htmlType="submit">
                  Send
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className={s.Divider} />
        <div className={s.HalfBlock}>
          <div className={s.MediumBlock}>
            <div className={s.Block}>
              <HomeOutlined />
              <p>Zhytomyr</p>
            </div>
            <div className={s.Block}>
              <PhoneOutlined />
              <p>+(380)96-111-2222</p>
            </div>
            <div className={s.Block}>
              <MailOutlined />
              <p>gmail.com</p>
            </div>
            <div className={s.Links}>
              <FacebookOutlined />
              <LinkedinOutlined />
              <InstagramOutlined />
              <GithubOutlined />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactsPage
