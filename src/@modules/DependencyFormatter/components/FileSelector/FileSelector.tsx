import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@modules/Styles';
import { jsonReader, fetchFile } from '../../utils';
import { FileUpload } from '../FileUpload';
import { FileDownload } from '../FileDownload';

interface FileSelectorProps {
  onFileLoaded?: (json: object) => void;
}

interface FileSelectorFormValue {
  packageFile: File | undefined;
  packageLink: string;
}

export function FileSelector({ onFileLoaded }: FileSelectorProps) {
  const submitCallback = useCallback(
    async (value: FileSelectorFormValue) => {
      try {
        if (value.packageFile) {
          const json = await jsonReader(value.packageFile);
          onFileLoaded?.(json);
        } else if (value.packageLink) {
          const json = await fetchFile(value.packageLink);
          onFileLoaded?.(json);
        }
      } catch (error) {
        // TODO #2 Add error handling
        // eslint-disable-next-line no-console
        console.warn(error);
      }
    },
    [onFileLoaded],
  );

  return (
    <Formik initialValues={{ packageFile: undefined, packageLink: '' }} onSubmit={submitCallback}>
      <Form>
        <FileUpload name="packageFile" />
        <br />
        <FileDownload name="packageLink" label="or insert link to JSON file" />
        <br />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
}
