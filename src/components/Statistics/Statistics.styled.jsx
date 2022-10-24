import styled from 'styled-components';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const StatisticCard = styled.section`
  width: 250px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  color: #292727ad;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 18px;
  padding-top: 30px;
  padding-bottom: 30px;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  font-size: 14px;
  color: #4e4e4ead;
  background-color: #ffffff;
`;

export const Item = styled.li`
  width: 25%;
  padding-top: 10px;
  padding-bottom: 15px;

  box-sizing: border-box;
  text-align: center;
  color: #ffffff;
  background-color: ${getRandomHexColor};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 5px;
`;
