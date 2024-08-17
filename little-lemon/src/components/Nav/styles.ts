import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.nav<HTMLAttributes<HTMLElement>>`
  width: 100%;
  height: 100%;

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
  
    
    font-weight: ${({ theme }) => theme.font.weight.bold};
  };
  .home{
  margin-left: 15rem;
  }
  .logo{
  margin-right: 5rem;
  font-size: 3rem;
  }
  .basketIcon {
    max-width: 3.5rem;
  };
  li{
  margin-left: 8rem;
  }

  .orderBtn {
    padding: 1rem 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.border.radius};
    background-color: ${({ theme }) => theme.colors.primary};
  };

  @media (max-width: 768px) {
    display: none;
  };
`;