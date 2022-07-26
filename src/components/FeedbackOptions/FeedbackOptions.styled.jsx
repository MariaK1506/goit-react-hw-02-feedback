import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  margin-bottom: 15px;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: ${props => `2px solid ${props.theme.colors.gray}`};
  border-radius: 5px;

  background-color: ${props => props.theme.colors.white};

  font-weight: 500;
  text-transform: capitalize;

  transition: all 250ms linear;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.gray};
    color: ${props => props.theme.colors.darkGrey};
    transition: all 250ms linear;
  }
`;
