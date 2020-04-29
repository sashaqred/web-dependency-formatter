import styled from '@emotion/styled/macro';

interface LatestVersionStyledProps {
  isDifferent: boolean;
}

function getColor({ isDifferent }: LatestVersionStyledProps) {
  return isDifferent ? 'red' : 'green';
}

export const LatestVersionStyled = styled.span`
  color: ${getColor};
`;
