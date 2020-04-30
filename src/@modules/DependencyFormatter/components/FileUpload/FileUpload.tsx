import React, { ChangeEvent, useCallback } from 'react';
import { InputFile, FormError } from '@modules/Styles';
import { useField } from 'formik';

interface FileUploadProps {
  name: string;
}

function fileUploadValidator(packageFile: File) {
  let error: string | undefined;
  const isJsonMimeType = packageFile?.type === 'application/json';
  const isJsonExtension = /\.json$/i.test(packageFile?.name || '');
  if (packageFile && !(isJsonMimeType || isJsonExtension)) {
    error = 'Please select JSON file.';
  }
  return error;
}

export function FileUpload({ name }: FileUploadProps) {
  const [field, , helpers] = useField({ name, validate: fileUploadValidator });
  const changeCallback = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.currentTarget.files?.[0];
      helpers.setTouched(true);
      helpers.setValue(file);
    },
    [helpers],
  );
  return (
    <>
      <InputFile name={field.name} accept=".json, application/json" onChange={changeCallback} />
      <br />
      <FormError name={field.name} />
    </>
  );
}
