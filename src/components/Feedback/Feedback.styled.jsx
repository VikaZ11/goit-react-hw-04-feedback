import styled from 'styled-components';

export const SectionStyled = styled.section`
  padding-left: 15px;
  padding-right: 15px;
`;

export const ButtonList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

export const Button = styled.button`
  margin-right: 20px;
  width: 70px;
  padding: 5px;
  cursor: pointer;
  background-color: #ededed;
  border: 1px solid black;
  border-radius: 5px;
  text-transform: capitalize;

  :hover {
    background-color: white;
  }
`;

export const StatisticsList = styled.ul`
  list-style: none;
  padding: 0;
`;
