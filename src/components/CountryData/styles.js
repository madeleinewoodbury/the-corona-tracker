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

export const Flag = styled.img`
  max-width: 500px;
  margin: 1rem 0;
  @media (max-width: 600px) {
    max-width: 250px;
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
  margin-bottom: 2rem;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const InfoItem = styled.div`
  padding: 1rem;
  margin: 1rem 2rem;
  background-color: ${(props) => props.theme.colors.secondaryColor};
  color: ${(props) => props.theme.colors.textColor};
  border-radius: 5px;
  font-size: 1.2rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  @media (max-width: 600px) {
    width: 300px;
    padding: 0.75rem;
    margin: 0.75rem 1rem;
  }
`;
