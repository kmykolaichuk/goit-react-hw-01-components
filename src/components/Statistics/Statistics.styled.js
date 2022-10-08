import styled from 'styled-components';

export const StatSection = styled.section`
  margin: 0 auto;
  margin-top: 40px;
  width: 400px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
`;

export const Title = styled.h2`
  padding: 24px 0;
  text-align: center;
  font-size: 24px;
  line-height: 1.33;
  text-transform: uppercase;
  font-weight: 600;
  color: #646e69;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-radius: 4px;
  background-color: #768a81;
`;

export const StatListItem = styled.li`
  width: 80px;
  text-align: center;
  :not(:first-child) {
      border-left: 1px solid #646e69;
`;

export const LabelSpan = styled.span`
  display: block;
  padding: 8px;
  font-size: 16px;
  line-height: 1.33;
  font-weight: 500;
  color: #ffffff;
`;

export const PercentageSpan = styled.span`
  display: block;
  padding-bottom: 6px;
  font-size: 22px;
  line-height: 1.33;
  font-weight: 500;
  color: #ffffff;
`;
