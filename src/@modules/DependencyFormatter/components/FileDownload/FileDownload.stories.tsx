import React from 'react';
import { Form, Formik } from 'formik';
import { text } from '@storybook/addon-knobs';
import { Button } from '@modules/Styles';
import { action } from '@storybook/addon-actions';
import { FileDownload } from './FileDownload';

export default {
  title: 'DependencyFormatter/components/FileDownload',
  component: FileDownload,
};

export function withKnobs() {
  return (
    <Formik initialValues={{ storyFile: undefined }} onSubmit={action('submit')}>
      <Form>
        <FileDownload label={text('Label', 'Link Label')} name="storyLink" />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
}
