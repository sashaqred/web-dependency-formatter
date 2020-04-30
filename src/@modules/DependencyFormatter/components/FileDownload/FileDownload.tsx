import React from 'react';
import { Field } from 'formik';
import { FormError } from '@modules/Styles';

interface FileDownloadProps {
  label: string;
  name: string;
}

export function FileDownload({ name, label }: FileDownloadProps) {
  const labelContent = label ? (
    <>
      {label}
      <br />
    </>
  ) : null;
  return (
    <>
      <label>
        {labelContent}
        <Field name={name} />
      </label>
      <br />
      <FormError name={name} />
    </>
  );
}
