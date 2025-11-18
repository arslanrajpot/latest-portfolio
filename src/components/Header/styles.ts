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
  background: ${props =>
    props.$isScrolled
      ? 'rgba(15, 23, 42, 0.95)'
      : 'transparent'};
  backdrop-filter: ${props => (props.$isScrolled ? 'blur(10px)' : 'none')};
  transition: all 0.3s ease;
  border-bottom: ${props =>
    props.$isScrolled ? `1px solid ${props.theme.colors.border}` : 'none'};
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 1rem 1.5rem;
  }

  .logo {
    font-family: ${props => props.theme.fonts.mono};
    font-size: 1.25rem;
    font-weight: 600;
    color: ${props => props.theme.colors.text.primary};
    display: flex;
    align-items: center;
    gap: 0.25rem;
    transition: all 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.primary};
      transform: scale(1.05);
    }

    .bracket {
      color: ${props => props.theme.colors.primary};
    }

    .name {
      color: ${props => props.theme.colors.text.primary};
    }
  }
`;

export const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    color: ${props => props.theme.colors.text.secondary};
    font-weight: 500;
    font-size: 0.95rem;
    position: relative;
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${props => props.theme.colors.primary};
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }

  .resume-btn {
    background: ${props => props.theme.colors.primary};
    color: white;
    padding: 0.6rem 1.5rem;
    border-radius: ${props => props.theme.borderRadius.md};
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      background: ${props => props.theme.colors.primaryDark};
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
    }

    &::after {
      display: none;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: ${props => props.theme.colors.background.secondary};
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    transform: ${props => (props.$isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease;
    border-top: 1px solid ${props => props.theme.colors.border};

    a {
      width: 100%;
      text-align: center;
      padding: 0.75rem;
      border-radius: ${props => props.theme.borderRadius.md};
      
      &:hover {
        background: ${props => props.theme.colors.background.tertiary};
      }
    }
  }
`;

export const ThemeToggle = styled.button`
  background: ${props => props.theme.colors.background.secondary};
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.text.primary};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 1rem;

  &:hover {
    background: ${props => props.theme.colors.background.tertiary};
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileMenu = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.text.primary};
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

