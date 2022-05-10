import { ThemeProvider } from 'styled-components';
import { Provider as PaperProvider } from 'react-native-paper';

import Routes from 'src/core/routes';
import GlobalProvider from 'src/core/context/GlobalContext';
import appTheme from 'src/styles/theme';
import paperTheme from 'src/styles/paperTheme';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <PaperProvider theme={paperTheme}>
      <GlobalProvider>
        <Routes />
      </GlobalProvider>
    </PaperProvider>
  </ThemeProvider>
);

export default App;
