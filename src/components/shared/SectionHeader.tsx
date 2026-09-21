import React from 'react';
import styled from 'styled-components';

const Kicker = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid ${props => props.theme.colors.borderStrong};
  font-size: 13px;

  .idx {
    color: ${props => props.theme.colors.primary};
  }

  .count {
    color: ${props => props.theme.colors.text.muted};
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 48px;
  padding: 36px 0 52px;
  flex-wrap: wrap;

  h2 {
    margin: 0;
    max-width: 760px;
    font-size: 64px;
    font-weight: 700;
    line-height: 0.98;
    letter-spacing: -0.045em;
    color: ${props => props.theme.colors.text.primary};
  }

  p {
    margin: 0;
    max-width: 340px;
    font-size: 16px;
    color: ${props => props.theme.colors.text.secondary};
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    h2 {
      font-size: 40px;
    }
  }
`;

interface SectionHeaderProps {
  index: number;
  total: number;
  label: string;
  title: React.ReactNode;
  description: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ index, total, label, title, description }) => {
  const num = String(index).padStart(2, '0');
  const totalStr = String(total).padStart(2, '0');

  return (
    <>
      <Kicker className="mono">
        <span>
          <span className="idx">[{num}]</span>&nbsp; {label}
        </span>
        <span className="count">
          {num} / {totalStr}
        </span>
      </Kicker>
      <TitleRow>
        <h2 className="disp">{title}</h2>
        <p>{description}</p>
      </TitleRow>
    </>
  );
};
