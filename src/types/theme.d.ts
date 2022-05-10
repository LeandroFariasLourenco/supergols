import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      text: {
        primary: string;
        secondary: string;
      };
    };
  }
}
