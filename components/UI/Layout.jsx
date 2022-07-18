import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/shared/globalStyle';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import appTheme from '@/shared/theme';
import { StyledLayout } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyle />
      <StyledLayout>
        <Header />
        <main>{children}</main>
        <Footer />
      </StyledLayout>
    </ThemeProvider>
  );
};

export default Layout;
