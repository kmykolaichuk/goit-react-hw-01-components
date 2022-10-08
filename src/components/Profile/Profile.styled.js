import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 280px;
  margin: 0 auto;
  border-radius: 6px;
  border-top: 1px solid #e1e1e1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.2);
`;

export const DescriptionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

export const UserAvatar = styled.img`
  margin-top: 24px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid;
`;

export const UserName = styled.p`
  margin-top: 24px;
  font-size: 24px;
  line-height: 1.33;
  font-weight: 600;
`;

export const UserTag = styled.p`
  margin-top: 12px;
  font-size: 18px;
  line-height: 1.33;
  font-weight: 500;
  color: #87918d;
`;

export const UserLocation = styled.p`
  margin-top: 12px;
  font-size: 18px;
  line-height: 1.33;
  font-weight: 500;
  color: #87918d;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  border-top: 1px solid #e1e1e1;
  background-color: #f2f7f5;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    width: calc((100% - 9px) / 3);
    :not(:first-child) {
      border-left: 1px solid #e1e1e1;
    }
  }
`;

export const LabelSpan = styled.span`
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 1.33;
  color: #87918d;
`;

export const QuantitySpan = styled.span`
  font-size: 18px;
  line-height: 1.33;
  font-weight: 700;
`;
