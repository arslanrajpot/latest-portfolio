import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 1.5rem;
  }
`;

export const GuideLines = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1120px;
  max-width: 100%;
  margin-left: -560px;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 0;

  span {
    width: 1px;
    background: ${props => props.theme.colors.guide};
  }

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const Glow = styled.div`
  position: absolute;
  top: -100px;
  right: -120px;
  width: 640px;
  height: 640px;
  background: radial-gradient(circle, ${props => props.theme.colors.glow} 0%, transparent 65%);
  pointer-events: none;
  z-index: 0;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  gap: 24px;
  align-items: center;
  padding: 140px 0 80px;
  position: relative;
  z-index: 1;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    padding: 120px 0 60px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    order: 2;
  }
`;

export const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;

  .dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${props => props.theme.colors.primary};
    animation: heroPulse 1.6s ease-in-out infinite;
    flex-shrink: 0;
  }

  @keyframes heroPulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.25;
    }
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 72px;
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: -0.045em;
  color: ${props => props.theme.colors.text.primary};

  .pill {
    display: inline-block;
    margin-top: 6px;
    padding: 0 16px 6px;
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.onBright};
    border-radius: 20px;
  }

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: 56px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 40px;
  }
`;

export const Description = styled.p`
  margin: 0;
  max-width: 560px;
  font-size: 18px;
  line-height: 1.6;
  color: ${props => props.theme.colors.text.secondary};

  strong {
    color: ${props => props.theme.colors.text.primary};
    font-weight: 600;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    height: 50px;
    padding: 0 24px;
    font-size: 14.5px;
    font-weight: 600;
    border-radius: ${props => props.theme.borderRadius.pill};
    transition: transform 0.18s ease, box-shadow 0.18s ease;
    border: 1px solid transparent;
  }

  .btn:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.sm};
  }

  .btn-primary {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.onAccent};
  }

  .btn-outline {
    background: transparent;
    color: ${props => props.theme.colors.text.primary};
    border-color: ${props => props.theme.colors.border};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;

    .btn {
      justify-content: center;
    }
  }
`;

export const MetaLine = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.text.muted};
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 0.9rem;
  margin-top: 4px;

  a {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: ${props => props.theme.colors.background.tertiary};
    border: 1px solid ${props => props.theme.colors.border};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.text.secondary};
    font-size: 1.05rem;
    transition: all 0.3s ease;

    &:hover {
      border-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primary};
      transform: translateY(-3px);
    }
  }
`;

export const PortraitCol = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    order: 1;
    justify-content: center;
  }
`;

export const PortraitWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 380px;
  margin-right: 18px;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    margin-right: 0;
    margin-bottom: 40px;
  }
`;

export const PortraitBacking = styled.div`
  position: absolute;
  left: 18px;
  top: 18px;
  width: 300px;
  height: 380px;
  background: ${props => props.theme.colors.secondary};
  border-radius: 32px;
`;

export const PortraitFrame = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
  height: 380px;
  background: ${props => props.theme.colors.background.secondary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 32px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 22%;
  }
`;

export const NowCard = styled.div`
  position: absolute;
  left: -38px;
  bottom: -24px;
  padding: 14px 18px;
  background: ${props => props.theme.colors.background.inverted};
  color: ${props => props.theme.colors.invertedText};
  border: 1px solid ${props => props.theme.colors.borderStrong};
  border-radius: 18px;
  box-shadow: ${props => props.theme.shadows.lg};
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 210px;

  .label {
    font-size: 11px;
    color: ${props => props.theme.colors.primary};
  }

  .role {
    font-size: 14.5px;
    font-weight: 600;
  }

  .place {
    font-size: 12.5px;
    opacity: 0.8;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    left: 0;
  }
`;
