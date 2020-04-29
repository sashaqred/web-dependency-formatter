import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@modules/Styles';
import { jsonReader } from '../../utils';
import { FileUpload } from '../FileUpload';

interface FileSelectorProps {
  onFileLoaded?: (json: object) => void;
}

interface FileSelectorFormValue {
  packageFile: File | undefined;
}

export function FileSelector({ onFileLoaded }: FileSelectorProps) {
  const submitCallback = useCallback(
    async (value: FileSelectorFormValue) => {
      try {
        const json = await jsonReader(value.packageFile);
        onFileLoaded?.(json);
      } catch (error) {
        // TODO #2 Add error handling
        // eslint-disable-next-line no-console
        console.warn(error);
      }
    },
    [onFileLoaded],
  );

  return (
    <Formik initialValues={{ packageFile: undefined }} onSubmit={submitCallback}>
      <Form>
        <FileUpload name="packageFile" />
        <br />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
}
