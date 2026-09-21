import styled from 'styled-components';

export const Container = styled.footer`
  max-width: 1200px;
  margin: 0 auto;
  padding: 72px 40px 40px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 56px 1.5rem 32px;
  }
`;

export const OutlineName = styled.div`
  font-size: 148px;
  font-weight: 700;
  line-height: 0.85;
  letter-spacing: -0.06em;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  color: transparent;
  -webkit-text-stroke: 1.5px ${props => props.theme.colors.borderStrong};

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: 90px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 52px;
  }
`;

export const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid ${props => props.theme.colors.borderStrong};
  font-size: 12px;
  color: ${props => props.theme.colors.text.muted};
  gap: 1rem;
  flex-wrap: wrap;

  a {
    color: ${props => props.theme.colors.text.primary};
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 0.75rem;

  a {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.background.tertiary};
    border: 1px solid ${props => props.theme.colors.border};
    font-size: 0.95rem;
    transition: all 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};
    }
  }
`;
