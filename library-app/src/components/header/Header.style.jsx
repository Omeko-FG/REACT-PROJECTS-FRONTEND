import styled from "styled-components";
import Flex from "../../styles/Flex";

export const HeaderContainer = styled(Flex)`
    flex-direction:column; 
`

export const HeaderTitle = styled.h2`
  margin-top: 1rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.detailColor};

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 1.5rem;
  }
`;

export const HeaderForm = styled.form`
  display: flex;
  width: 45%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.headerFormColor};
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.3px);
  -webkit-backdrop-filter: blur(8.3px);
  border: 1px solid rgba(15, 63, 42, 0.3);
  margin: 20px;
  @media (max-width: ${({theme})=> theme.screens.lg}) {
    flex-direction:column;
    padding:1rem;
    width:90%;
  }
`;

export const SearchInput = styled.input`
  height: 3rem;
  width: 85%;
  border: none;
  margin-top: 2rem;
  border-radius: 3px;
  outline: none;
  text-indent: 10px;
  font-size: 2rem;
  border-radius: 1rem;
  border-radius: 1rem;
  background-color: rgb(255, 255, 255, 0.5);
  ::placeholder {
    text-transform: capitalize;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
    border-radius: 5px;
    width: 55vw;
  }
`;

export const SelectBox = styled.select`
  border-radius: 3px;
  margin: 2rem;
  padding: 5px;
  height: 3rem;
  width: 85%;
  border: none;
  outline: none;
  font-size: 2rem;
  border-radius: 1rem;
  background-color: rgb(255, 255, 255, 0.8);
  border-radius: 1rem;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
    width: 55vw;
    border-radius: 5px;

  }
`;

export const HeaderButton = styled.button`
  background-color: #e1f1dd;
  width: 15vw;
  padding: 5px;
  outline: none;
  height: 3rem;
  margin: 1rem;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 2rem;
  border-radius: 2rem;
  
  &:hover {
    background:  #ffebbb};
    transition: all 0.3s ease-in;
  

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    border-radius: 5px;
    border-radius: 2rem;
    width: 35vw;
  }
`;