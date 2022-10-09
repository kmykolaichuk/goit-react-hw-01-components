import styled from 'styled-components';

export const List = styled.ul`
  margin: 0 auto;
  margin-top: 40px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 10px 12px;
  width: 240px;
  border-radius: 4px;
  border: 1px solid #e1e1e1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.2);
`;

export const Status = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    return isOnline ? '#008000' : '#FF0000';
  }};
`;

export const Avatar = styled.img`
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  margin-left: 12px;
`;

export const Name = styled.p`
  margin-left: 12px;
  text-align: center;
  font-size: 24px;
  line-height: 1.33;
  font-weight: 500;
`;
