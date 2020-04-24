import styled from '@emotion/styled/macro';
import { ErrorMessage, ErrorMessageProps } from 'formik';
import { defaultProps } from 'recompose';

const SpanStyled = styled.span`
  color: maroon;
`;

const FormErrorDefaultProps: Partial<ErrorMessageProps> = { component: SpanStyled };

export const FormError = defaultProps(FormErrorDefaultProps)(ErrorMessage);
