import { IPaymentField } from '@common/api/paymentApi/payment.api.types'
import { Sum } from './'

const Electricity: React.FC<{
  record: IPaymentField & { key: string }
}> = ({ record }) => {
  return <Sum record={record} />
}

export default Electricity
