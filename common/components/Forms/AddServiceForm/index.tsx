import React, { FC, useState } from 'react'
import { validateField } from '@common/assets/features/validators'
import { Form, FormInstance, Input, InputNumber } from 'antd'
import { DatePicker } from 'antd'
import s from './style.module.scss'

interface Props {
  form: FormInstance<any>
}

const AddServiceForm: FC<Props> = ({ form }) => {
  const { MonthPicker } = DatePicker

  return (
    <Form form={form} layout="vertical" className={s.Form}>
      <Form.Item
        name="data"
        label="Місяць та рік"
        rules={validateField('data')}
      >
        <MonthPicker
          format="MMMM YYYY"
          placeholder="Select month"
          className={s.formInput}
        />
      </Form.Item>
      <Form.Item
        name="orenda"
        label="Утримання приміщень"
        // rules={validateField('required')}
      >
        <InputNumber className={s.formInput} />
      </Form.Item>
      <Form.Item
        name="electricPrice"
        label="Електроенергія"
        // rules={validateField('electricPrice')}
      >
        {' '}
        <InputNumber
          type="number"
          style={{ width: '32%' }}
          className={s.InputNumber}
        />
      </Form.Item>
      <Form.Item
        name="waterPrice"
        label="Водопостачання"
        // rules={validateField('required')}
      >
        <InputNumber className={s.formInput} />
      </Form.Item>
      <Form.Item
        name="inflaPrice"
        label="Індекс інфляції"
        // rules={validateField('required')}
      >
        <InputNumber className={s.formInput} />
      </Form.Item>
      <Form.Item
        name="description"
        label="Опис"
        // rules={validateField('required')}
      >
        <Input.TextArea
          placeholder="Введіть опис"
          maxLength={256}
          className={s.formInput}
          style={{ width: '90%' }}
        />
      </Form.Item>
    </Form>
  )
}

export default AddServiceForm
