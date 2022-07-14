import { createGlobalStyle } from 'styled-components';

import { maxContainer, customScrollbar } from './mixins';
import { headingL, headingM, headingS, body } from './typography';
import devices from './breakpoints';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    font-size: 62.5%;
    overflow-x: hidden;
    @media ${devices.mobileSS}{
      font-size: 19%;
    }
    @media ${devices.mobileS}{
      font-size: 32%;
    }
    @media (min-width: 280px) and (max-width: 320px){
      font-size: 30%;
    }
    @media ${devices.mobileM}{
      font-size: 37.5%;
    }
    @media ${devices.mobileL}{
      font-size: 40%;
    }
    @media ${devices.tablet}{
      font-size: 47.5%;
    }
    @media ${devices.tabletL}{
      font-size: 62.5%;
    }
    @media ${devices.laptop}{
      font-size: 46.5%;
    }
    @media ${devices.laptopM}{
      font-size: 50%;
    }
    @media ${devices.laptopL}{
      font-size: 60.5%;
    }
    @media ${devices.desktop}{
      font-size: 70.5%;
    }
    @media ${devices.landscapeMobileSS}{
      font-size: 22%;
    }
    @media ${devices.landscapeMobileS}{
      font-size: 27%;
    }
    @media ${devices.landscapeMobileMS}{
      font-size: 28.5%;
    }
    @media ${devices.landscapeMobileM}{
      font-size: 31.5%;
    }
    @media ${devices.landscapeMobileL}{
      font-size: 35%;
    }
    @media ${devices.desktop4K}{
      font-size: 90%;
    }
}
body{
    height: 100vh;
    width: 100vw;
    font-family: 'Outfit', sans-serif;
    background: rgb(${({ theme }) => theme.colors.background});
    overflow-x: hidden;
    overflow-y: auto;
    ${customScrollbar};
}
#root{
  box-sizing: border-box;
  ${maxContainer};
  &>svg{
    ${maxContainer};
  }
}
main{
    width: 100%;
    margin: auto;
    background: rgb(${({ theme }) => theme.colors.background});
    color: rgb(${({ theme }) => theme.colors.white});
    &>svg{
      ${maxContainer};
    }
}
h1,h2{
  ${headingL};
  color: rgb(${({ theme }) => theme.colors.white});
  letter-spacing: 0.225rem;

}
h3 {
  ${headingM};
}
h4{
  ${headingM};
}
h5{
  ${headingS};
}
p,
button,
select,
input,
textarea,
label,
div,
li,
a {
  font-size: 1.8rem;
}
p{
  ${body}
}
span{
  color: rgb(${({ theme }) => theme.colors.accent});
}
button, a{
  cursor: pointer;
}
a {
  text-decoration: none;
  color: inherit;
}
li{
  list-style: none;;
}
`;

export default GlobalStyle;
