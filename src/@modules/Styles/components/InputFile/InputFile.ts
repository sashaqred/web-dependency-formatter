import styled from '@emotion/styled/macro';
import { InputHTMLAttributes, DetailedHTMLProps } from 'react';
import { withProps } from 'recompose';

const InputFileStyled = styled.input`
  display: inline-block;
  padding: 1rem;
  border: 1px dashed black;
  block-size: 15rem;
  inline-size: 15rem;
  max-block-size: 100%;
  max-inline-size: 100%;
`;

interface InputFileHardcodedProps {
  type?: string;
}

type InputFileProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  keyof InputFileHardcodedProps
>;

export const InputFile = withProps<InputFileHardcodedProps, InputFileProps>({ type: 'file' })(
  InputFileStyled,
);
