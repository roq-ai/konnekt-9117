import * as yup from 'yup';

export const eventValidationSchema = yup.object().shape({
  name: yup.string().required(),
  seating_chart: yup.string().required(),
  organization_id: yup.string().nullable(),
});
