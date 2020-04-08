import styled from 'styled-components';

export default styled.div`
  background: ${(props) => props.theme.colors.backgroundColor};
  color: ${(props) => props.theme.colors.textColor};
  height: ${(props) => props.height};
  margin: 0;
  padding: 0;
`;
