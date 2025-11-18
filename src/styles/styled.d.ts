import 'styled-components';
import { Theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: Theme['colors'];
    fonts: Theme['fonts'];
    breakpoints: Theme['breakpoints'];
    spacing: Theme['spacing'];
    borderRadius: Theme['borderRadius'];
    shadows: Theme['shadows'];
  }
}

