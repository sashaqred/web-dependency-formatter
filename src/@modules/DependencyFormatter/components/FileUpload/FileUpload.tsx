import React, { ChangeEvent } from 'react';
import { InputFile, FormError } from '@modules/Styles';
import { useField } from 'formik';

interface FileUploadProps {
  name: string;
}

export function FileUpload({ name }: FileUploadProps) {
  const [field, , helpers] = useField({ name });
  return (
    <>
      <InputFile
        name={field.name}
        accept=".json, application/json"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const file = event.currentTarget.files?.[0];
          helpers.setTouched(true);
          helpers.setValue(file);
        }}
      />
      <br />
      <FormError name={field.name} />
    </>
  );
}
