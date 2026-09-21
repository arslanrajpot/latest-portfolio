import styled from 'styled-components';

interface ContainerProps {
  $isScrolled: boolean;
}

export const Container = styled.header<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => (props.$isScrolled ? props.theme.colors.background.primary : 'transparent')};
  backdrop-filter: ${props => (props.$isScrolled ? 'blur(10px)' : 'none')};
  transition: background 0.3s ease;
  border-bottom: ${props => (props.$isScrolled ? `1px solid ${props.theme.colors.border}` : '1px solid transparent')};
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 16px 1.5rem;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-shrink: 0;
  }

  .badge {
    font-family: ${props => props.theme.fonts.display};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.onAccent};
    border-radius: 14px;
    font-size: 20px;
    letter-spacing: -0.04em;
  }

  .name {
    font-family: ${props => props.theme.fonts.mono};
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${props => props.theme.colors.text.primary};

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      display: none;
    }
  }
`;

export const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 22px;

  a.navlink {
    font-family: ${props => props.theme.fonts.mono};
    font-size: 12.5px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${props => props.theme.colors.text.secondary};
    transition: color 0.15s ease;

    &:hover,
    &.active {
      color: ${props => props.theme.colors.primary};
    }
  }

  .talk-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    height: 42px;
    padding: 0 20px;
    font-size: 13px;
    font-weight: 600;
    border-radius: ${props => props.theme.borderRadius.pill};
    background: ${props => props.theme.colors.background.inverted};
    color: ${props => props.theme.colors.invertedText};
    transition: transform 0.18s ease, box-shadow 0.18s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.shadows.sm};
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 1.5rem;
    background: ${props => props.theme.colors.background.secondary};
    border-top: 1px solid ${props => props.theme.colors.border};
    transform: ${props => (props.$isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease;

    a.navlink {
      padding: 0.85rem 0.5rem;
      border-radius: ${props => props.theme.borderRadius.sm};

      &:hover {
        background: ${props => props.theme.colors.background.tertiary};
      }
    }

    .talk-btn {
      justify-content: center;
      margin-top: 0.75rem;
    }
  }
`;

export const ThemeToggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 42px;
  padding: 0 14px;
  border-radius: ${props => props.theme.borderRadius.pill};
  border: 1px solid ${props => props.theme.colors.border};
  background: transparent;
  color: ${props => props.theme.colors.text.primary};
  transition: all 0.2s ease;

  span {
    font-family: ${props => props.theme.fonts.mono};
    font-size: 11.5px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    span {
      display: none;
    }
    padding: 0 10px;
  }
`;

export const MobileMenu = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.text.primary};
  font-size: 1.4rem;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    display: flex;
  }
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
