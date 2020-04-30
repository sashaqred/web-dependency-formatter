import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@modules/Styles';
import { object, string, mixed } from 'yup';
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

const fileSelectorSchema = object().shape({
  packageFile: mixed().test(
    'Is file JSON',
    'Please select JSON file.',
    (file: File | undefined) => {
      const isJsonMimeType = file?.type === 'application/json';
      const isJsonExtension = /\.json$/i.test(file?.name || '');
      return !file || isJsonMimeType || isJsonExtension;
    },
  ),
  packageLink: string().url('Must be a valid URL'),
});

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
    <Formik
      initialValues={{ packageFile: undefined, packageLink: '' }}
      validationSchema={fileSelectorSchema}
      onSubmit={submitCallback}
    >
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
