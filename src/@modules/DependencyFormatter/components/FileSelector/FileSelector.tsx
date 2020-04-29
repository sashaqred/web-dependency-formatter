import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@modules/Styles';
import { jsonReader } from '../../utils';
import { FileUpload } from '../FileUpload';

interface FileSelectorProps {
  onFileLoaded?: (json: object) => void;
}

interface FileSelectorFormValue {
  package: File | undefined | null;
}

function validateFileSelector(formValue: FileSelectorFormValue) {
  const errors: Partial<Record<keyof FileSelectorFormValue, string>> = {};
  const isJsonMimeType = formValue.package?.type === 'application/json';
  const isJsonExtension = /\.json$/i.test(formValue.package?.name || '');
  if (!(isJsonMimeType || isJsonExtension)) {
    errors.package = 'Please select JSON file.';
  }
  return errors;
}

export function FileSelector({ onFileLoaded }: FileSelectorProps) {
  const submitCallback = useCallback(
    async (value: FileSelectorFormValue) => {
      try {
        const json = await jsonReader(value.package);
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
    <Formik
      initialValues={{ package: undefined }}
      validate={validateFileSelector}
      onSubmit={submitCallback}
    >
      <Form>
        <FileUpload name="package" />
        <br />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
}
