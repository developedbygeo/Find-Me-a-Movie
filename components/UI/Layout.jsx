import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/shared/globalStyle';
import Header from '@/components/Header/Header';
import appTheme from '@/shared/theme';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
