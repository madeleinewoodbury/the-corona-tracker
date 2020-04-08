import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;
export const ImgContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
`;
export const InfoItem = styled.div`
  padding: 1rem;
  margin: 1rem 2rem;
  background-color: ${(props) => props.theme.colors.secondaryColor};
  color: ${(props) => props.theme.colors.textColor};
  border-radius: 5px;
  font-size: 1.2rem;
  box-shadow: ${(props) => props.theme.boxShadow};
`;
