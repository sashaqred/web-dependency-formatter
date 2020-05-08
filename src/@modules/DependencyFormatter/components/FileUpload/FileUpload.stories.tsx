import React from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@modules/Styles';
import { action } from '@storybook/addon-actions';
import { FileUpload } from './FileUpload';

export default {
  title: 'DependencyFormatter/components/FileUpload',
  component: FileUpload,
};

export function sampleInput() {
  return (
    <Formik initialValues={{ storyFile: undefined }} onSubmit={action('submit')}>
      <Form>
        <FileUpload name="storyFile" />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
}
