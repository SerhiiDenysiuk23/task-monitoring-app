import { QuestionCircleOutlined, SelectOutlined } from '@ant-design/icons'
import { Button, Form, FormInstance, Popover, message } from 'antd'
import { useRouter } from 'next/router'

import { useInvoicesPaymentContext } from '@common/components/DashboardPage/blocks/paymentsBulk'
import MonthServiceSelect from '@common/components/Forms/AddPaymentForm/MonthServiceSelect'
import AddressesSelect from '@common/components/UI/Reusable/AddressesSelect'
import DomainsSelect from '@common/components/UI/Reusable/DomainsSelect'
import { AppRoutes, Operations } from '@utils/constants'
import {
  useAddPaymentMutation,
  useGetPaymentsCountQuery,
} from '@common/api/paymentApi/payment.api'
import {
  filterInvoiceObject,
  getPaymentProviderAndReciever,
} from '@utils/helpers'

const InvoicesHeader = () => {
  const router = useRouter()
  const { form, companies, service } = useInvoicesPaymentContext()
  const [addPayment, { isLoading }] = useAddPaymentMutation()
  const { data: invoiceNumber = 0 } = useGetPaymentsCountQuery({})

  const handleSave = async () => {
    const invoices = await prepareInvoiceObjects(form)
    const filteredInvoices = filterInvoiceObject(invoices[0])

    for (const company of companies) {
      const { provider, reciever } = getPaymentProviderAndReciever(company)

      const response = await addPayment({
        invoiceNumber: invoiceNumber + companies.indexOf(company) + 1,
        type: Operations.Debit,
        domain: service?.domain,
        street: service?.street,
        company: company?._id,
        monthService: service?._id,
        invoiceCreationDate: new Date(),
        description: '',
        generalSum:
          filteredInvoices.reduce((acc, val) => acc + (val.sum || 0), 0) || 0,
        provider,
        reciever,
        invoice: filteredInvoices,
      })

      if ('data' in response) {
        form.resetFields()
        message.success(`Додано рахунок для компанії ${company?.companyName}`)
      } else {
        message.error(
          `Помилка при додаванні рахунку для компанії ${company?.companyName}`
        )
      }
    }
    //debugger
    //invoices
    router.push(AppRoutes.PAYMENT)
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Button type="link" onClick={() => router.push(AppRoutes.PAYMENT_BULK)}>
        Інвойси
        <SelectOutlined />
      </Button>

      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <DomainsSelect form={form} />
        <AddressesSelect form={form} />
        <MonthServiceGeneralInfo />
      </div>

      <Button type="link" onClick={handleSave}>
        Зберегти
      </Button>
    </div>
  )
}

function MonthServiceGeneralInfo() {
  const { form } = useInvoicesPaymentContext()

  const serviceId = Form.useWatch('monthService', form)

  return (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <MonthServiceSelect form={form} />
      {serviceId && (
        <Popover
          content={<PopoverMonthService serviceId={serviceId} />}
          title="Послуги за місяць"
        >
          <QuestionCircleOutlined style={{ marginLeft: 16 }} />
        </Popover>
      )}
    </span>
  )
}

function PopoverMonthService(serviceId: any) {
  // const { service } = ({ serviceId })

  return (
    <>
      <strong>TODO:</strong> content
    </>
  )

  // return (
  //   <ul>
  //     {services
  //       ?.filter((service) => moment(service.date).month() === monthNumber)
  //       .map((service) => (
  //         <li key={service._id}>
  //           {moment(service.date).format('DD MMMM YYYY')} -{' '}
  //           {service.description}
  //         </li>
  //       ))}
  //   </ul>
  // )
}

export default InvoicesHeader

const prepareInvoiceObjects = async (form: FormInstance): Promise<any[]> => {
  const values = await form.validateFields()
  const invoices: any[] = Object.values(values.companies)

  return invoices.map((invoice) => ({
    maintenancePrice: {
      amount: invoice.totalArea,
      ...invoice.maintenancePrice,
    },
    placingPrice: {
      amount: invoice.totalArea,
      ...invoice.placingPrice,
    },

    electricityPrice: invoice.electricityPrice,
    waterPrice: invoice.waterPrice,
    waterPart: invoice.waterPart,

    garbageCollectorPrice: {
      price: invoice.garbageCollector,
      sum: invoice.garbageCollector,
    },
    inflicionPrice: {
      price: invoice.inflicionPrice,
      sum: invoice.inflicionPrice,
    },
    // TODO: proper fields
  }))
}
