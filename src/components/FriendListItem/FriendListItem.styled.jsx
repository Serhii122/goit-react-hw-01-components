import styled from 'styled-components';

export const FriendItemStyled = styled.li`
  display: flex;
  align-items: center;
  background-color: #ffff;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin-right: 15px;
`;
