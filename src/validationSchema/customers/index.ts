import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
});
