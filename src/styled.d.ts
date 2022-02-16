import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: string;
      white: string;
      blackShadow: string;
    }
  }
}