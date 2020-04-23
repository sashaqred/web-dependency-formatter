import React, { ChangeEvent, useCallback } from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import { jsonReader } from '../../utils';

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
      {({ setFieldValue, setFieldTouched }) => (
        <Form>
          <input
            type="file"
            name="package"
            accept=".json, application/json"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              const file = event.currentTarget.files?.[0];
              setFieldTouched('package');
              setFieldValue('package', file);
            }}
          />
          <ErrorMessage name="package" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
