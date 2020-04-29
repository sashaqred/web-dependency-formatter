import React, { ChangeEvent } from 'react';
import { InputFile, FormError } from '@modules/Styles';
import { useFormikContext } from 'formik';

interface FileUploadProps {
  name: string;
}

export function FileUpload({ name }: FileUploadProps) {
  const { setFieldTouched, setFieldValue } = useFormikContext();
  return (
    <>
      <InputFile
        name={name}
        accept=".json, application/json"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const file = event.currentTarget.files?.[0];
          setFieldTouched(name);
          setFieldValue(name, file);
        }}
      />
      <br />
      <FormError name={name} />
    </>
  );
}
