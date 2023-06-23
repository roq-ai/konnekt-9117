import * as yup from 'yup';

export const purchaseValidationSchema = yup.object().shape({
  customer_id: yup.string().nullable(),
  ticket_id: yup.string().nullable(),
});
