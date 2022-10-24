import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 250px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  color: #010101;
  background-color: #ffffff;
  border-radius: 1.5%;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  font-size: 14px;
  color: #4e4e4ead;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 35px;
`;
export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  width: 90px;
  border-radius: 50%;
`;
export const Name = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #010101;
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  color: #4e4e4ead;
  background-color: #f9f5f5ad;
  padding-left: 8px;
  padding-right: 8px;
`;
export const StatsItem = styled.li`
  width: 33%;
  padding-top: 25px;
  padding-bottom: 28px;

  box-sizing: border-box;
  text-align: center;

  :not(:last-child) {
    border-right: 1px solid #adaaaaad;
`;
export const Label = styled.span`
  display: block;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  color: #010101;
  font-weight: 500;
`;
