import React, { ChangeEvent, useCallback } from 'react';
import { Form, Formik } from 'formik';
import { jsonReader } from '../../utils';

interface FileSelectorProps {
  onFileLoaded?: (json: object) => void;
}

interface FileSelectorFormValue {
  package: File | undefined | null;
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
    <Formik initialValues={{ package: undefined }} onSubmit={submitCallback}>
      {({ setFieldValue }) => (
        <Form>
          <input
            type="file"
            name="package"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              const file = event.currentTarget.files?.[0];
              setFieldValue('package', file);
            }}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
