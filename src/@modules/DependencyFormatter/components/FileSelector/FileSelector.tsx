import React, { useCallback, ReactNode } from 'react';
import { Form, Formik } from 'formik';
import { Button, FormError } from '@modules/Styles';
import { object, string, mixed } from 'yup';
import { jsonReader, fetchFile } from '../../utils';
import { FileUpload } from '../FileUpload';
import { FileDownload } from '../FileDownload';

interface FileSelectorProps {
  onFileLoaded?: (json: object) => void;
}

interface PackageGroup {
  file: File | undefined;
  link: string;
}

interface FileSelectorFormValue {
  package: PackageGroup;
}

const fileSelectorSchema = object().shape({
  package: object()
    .shape({
      file: mixed().test('Is file JSON', 'Please select JSON file.', (file: File | undefined) => {
        const isJsonMimeType = file?.type === 'application/json';
        const isJsonExtension = /\.json$/i.test(file?.name || '');
        return !file || isJsonMimeType || isJsonExtension;
      }),
      link: string().url('Must be a valid URL'),
    })
    .test(
      'one-of-require',
      'Please fill one of fields',
      ({ file, link }: PackageGroup) => !!file || !!link,
    ),
});

export function FileSelector({ onFileLoaded }: FileSelectorProps) {
  const submitCallback = useCallback(
    async (value: FileSelectorFormValue) => {
      try {
        const { file, link } = value.package;
        if (file) {
          const json = await jsonReader(file);
          onFileLoaded?.(json);
        } else if (link) {
          const json = await fetchFile(link);
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

  const errorRender = useCallback((error: object | string) => {
    // TODO #39
    // Fix warning in console after this render function
    let result: ReactNode = null;
    if (typeof error === 'string') {
      result = (
        <>
          <span>{error}</span>
          <br />
        </>
      );
    }
    return result;
  }, []);

  return (
    <Formik
      initialValues={{ package: { file: undefined, link: '' } }}
      validationSchema={fileSelectorSchema}
      onSubmit={submitCallback}
    >
      <Form>
        <FormError name="package" render={errorRender} />
        <FileUpload name="package.file" />
        <br />
        <FileDownload name="package.link" label="or insert link to JSON file" />
        <br />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
}
