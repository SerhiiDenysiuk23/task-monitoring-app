import React, { FC } from 'react'
import { Table } from 'antd'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { AppRoutes } from '@utils/constants'
import s from './style.module.scss'
import TableCard from '@common/components/UI/TableCard'
import { useGetDomainsQuery } from '@common/api/domainApi/domain.api'
import OrganistaionsComponents from '@common/components/UI/OrganistaionsComponents'
import DomainStreetsComponent from '@common/components/UI/DomainsComponents/DomainStreetsComponent'
import { useGetAllStreetsQuery } from '@common/api/streetApi/street.api'

const DomainsBlock = () => {
  const { data: domains, isLoading } = useGetDomainsQuery({})
  const { data: streets } = useGetAllStreetsQuery({})
  const router = useRouter()
  const {
    pathname,
    query: { email },
  } = router

  const domainsPageColumns =
    router.pathname === AppRoutes.DOMAIN
      ? [
          {
            title: 'Телефон',
            dataIndex: 'phone',
          },
          {
            title: 'Пошта',
            dataIndex: 'email',
          },
        ]
      : []

  const columns = [
    {
      title: 'Назва',
      dataIndex: 'name',
    },
    {
      title: 'Адреса',
      dataIndex: 'address',
    },
    {
      title: 'Адміністратори',
      dataIndex: 'adminEmails',
    },
    {
      title: 'Опис',
      dataIndex: 'description',
    },
    {
      title: 'Отримувач',
      dataIndex: 'bankInformation',
    },
    ...domainsPageColumns,
  ]

  const dataWithKeys = (arr) => {
    const sourceData = []
    for (let i = 0; i < arr?.length; i++) {
      sourceData.push({
        key: i,
        ...arr[i],
      })
    }
    return sourceData
  }

  return (
    <TableCard
      title={<DomainStreetsComponent data={domains} />}
      className={cn({ [s.noScroll]: pathname === AppRoutes.DOMAIN })}
    >
      <Table
        loading={isLoading}
        expandable={{
          expandedRowRender: (data) => (
            <Table
              expandable={{
                expandedRowRender: (street) => (
                  <OrganistaionsComponents
                    domainId={data._id}
                    streetId={street}
                  />
                ),
              }}
              dataSource={dataWithKeys(data.streets)}
              columns={columns1}
              pagination={false}
            />
          ),
        }}
        dataSource={dataWithKeys(domains)}
        columns={columns}
        pagination={false}
      />
    </TableCard>
  )
}
const columns1 = [
  {
    title: 'Вулиця',
    dataIndex: 'address',
  },
]

const testData1 = [
  {
    street: '12 Короленка 12',
  },
]

export default DomainsBlock
