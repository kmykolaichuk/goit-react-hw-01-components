import PropTypes from 'prop-types';

import {
  StatSection,
  Title,
  StatList,
  StatListItem,
  LabelSpan,
  PercentageSpan,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatListItem key={id}>
            <LabelSpan>{label}</LabelSpan>
            <PercentageSpan>{percentage}%</PercentageSpan>
          </StatListItem>
        ))}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
