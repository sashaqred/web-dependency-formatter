import React from 'react';
import { Formik, Form, Field } from 'formik';
import { action } from '@storybook/addon-actions';
import { object, string } from 'yup';
import { FormError } from './FormError';
import { Button } from '../Button';

export default {
  title: 'Styles/components/FormError',
  component: FormError,
};

const validationSchema = object().shape({
  sampleField: string().required(),
});

export function sampleFormError() {
  return (
    <Formik
      initialValues={{ sampleField: undefined }}
      validationSchema={validationSchema}
      onSubmit={action('onSubmit')}
    >
      <Form>
        <Field name="sampleField" />
        <br />
        <FormError name="sampleField" />
        <br />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
}
