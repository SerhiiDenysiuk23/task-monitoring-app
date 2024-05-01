import { IPaymentField } from '@common/api/paymentApi/payment.api.types'
import { usePaymentContext } from '@common/components/AddPaymentModal'
import { ServiceType } from '@utils/constants'

const Inflicion: React.FC<{
  record: IPaymentField & { key: string }
  preview?: boolean
}> = ({ record, preview }) => {
  const { company, service, prevPayment } = usePaymentContext()

  if (company?.inflicion && prevPayment?.invoice && service) {
    const prevPlacingInvoice = prevPayment.invoice.find(
      (invoice) => invoice.type === ServiceType.Placing
    )
    const prevPlacing = prevPlacingInvoice?.sum || 0
    const inflicion = service.inflicionPrice - 100 || 0

    return (
      <>
        {inflicion.toRoundFixed()}% від {prevPlacing.toRoundFixed()}
      </>
    )
  }
}

export default Inflicion
