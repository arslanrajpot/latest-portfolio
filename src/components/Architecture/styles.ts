import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 128px 40px 0;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 80px 1.5rem 0;
  }
`;

export const TabBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: max-content;
  max-width: 100%;
  margin-bottom: 24px;
  padding: 5px;
  gap: 4px;
  background: ${props => props.theme.colors.background.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.pill};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    border-radius: ${props => props.theme.borderRadius.md};

    button {
      flex: 1 1 auto;
    }
  }
`;

export const Tab = styled.button<{ $active: boolean }>`
  min-height: 42px;
  padding: 0 20px;
  border: 0;
  border-radius: ${props => props.theme.borderRadius.pill};
  background: ${props => (props.$active ? props.theme.colors.primary : 'transparent')};
  color: ${props => (props.$active ? props.theme.colors.onAccent : props.theme.colors.text.primary)};
  font-size: 13.5px;
  font-weight: 600;
  transition: all 0.2s ease;
  white-space: nowrap;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 24px;
  align-items: stretch;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const DiagramPanel = styled.div`
  grid-column: span 8;
  background: ${props => props.theme.colors.background.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 26px;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-column: span 1;
  }
`;

export const DiagramIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .kind {
    font-size: 12px;
    color: ${props => props.theme.colors.primary};
  }

  h3 {
    margin: 0;
    font-size: 32px;
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: ${props => props.theme.colors.text.primary};
  }

  p {
    margin: 0;
    max-width: 600px;
    font-size: 14.5px;
    color: ${props => props.theme.colors.text.secondary};
  }
`;

export const NodeGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 40px;
  row-gap: 48px;
  padding: 32px 30px 30px;
  background-color: ${props => props.theme.colors.background.primary};
  background-image: radial-gradient(${props => props.theme.colors.borderHair} 1px, transparent 1px);
  background-size: 18px 18px;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    row-gap: 44px;
  }
`;

export const Node = styled.div<{ $gc: number; $gr: number }>`
  position: relative;
  grid-column: ${props => props.$gc};
  grid-row: ${props => props.$gr};
  min-height: 116px;
  padding: 14px 16px 16px;
  background: ${props => props.theme.colors.background.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.sm};
  box-shadow: ${props => props.theme.shadows.sm};
  display: flex;
  flex-direction: column;
  gap: 6px;

  .num {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 20px;
    border-radius: 7px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.onAccent};
    font-size: 11px;
  }

  .title {
    font-size: 14.5px;
    font-weight: 600;
    line-height: 1.25;
    color: ${props => props.theme.colors.text.primary};
  }

  .sub {
    font-size: 12.5px;
    line-height: 1.4;
    color: ${props => props.theme.colors.text.secondary};
  }

  .arrow {
    position: absolute;
    color: ${props => props.theme.colors.primary};
  }

  .arrow-r {
    right: -30px;
    top: 50%;
    margin-top: -9px;
  }

  .arrow-l {
    left: -30px;
    top: 50%;
    margin-top: -9px;
  }

  .arrow-d {
    left: 50%;
    bottom: -34px;
    margin-left: -9px;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-column: 1 !important;
    .arrow-r,
    .arrow-l {
      display: none;
    }
    .arrow-d {
      display: block;
    }
  }
`;

export const Sidebar = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-column: span 1;
  }
`;

export const SideBox = styled.div<{ $accent?: boolean }>`
  flex-grow: 1;
  background: ${props => (props.$accent ? props.theme.colors.primary : props.theme.colors.background.card)};
  color: ${props => (props.$accent ? props.theme.colors.onAccent : props.theme.colors.text.primary)};
  border: 1px solid ${props => (props.$accent ? 'transparent' : props.theme.colors.border)};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .heading {
    font-size: 12px;
    opacity: ${props => (props.$accent ? 1 : undefined)};
    color: ${props => (props.$accent ? 'inherit' : props.theme.colors.text.muted)};
  }

  .item {
    display: flex;
    gap: 12px;
    font-size: 14px;
    line-height: 1.5;
    opacity: ${props => (props.$accent ? 0.95 : 0.9)};
  }

  .dot {
    flex-shrink: 0;
    width: 7px;
    height: 7px;
    margin-top: 7px;
    border-radius: 50%;
    background: currentColor;
  }

  .dash {
    flex-shrink: 0;
    width: 13px;
    height: 2px;
    margin-top: 10px;
    border-radius: 2px;
    background: currentColor;
  }
`;
