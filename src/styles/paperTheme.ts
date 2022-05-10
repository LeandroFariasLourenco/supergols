import { DefaultTheme } from 'react-native-paper';

const theme: typeof DefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
  },
};

export default theme;
