const sizes = {
  mobileSS: '239px',
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  landscapeMobileSS: '319px',
  landscapeMobileS: '568px',
  landscapeMobileSmallMed: '650px',
  landscapeMobileMS: '660px',
  landscapeMobileM: '812px',
  landscapeMobileL: '925px',
  tablet: '768px',
  tabletL: '800px',
  laptop: '1024px',
  laptopM: '1280px',
  laptopL: '1440px',
  desktop: '2560px',
  desktop4K: '3840px',
};

const devices = {
  mobileSS: `(min-width: ${sizes.mobileSS})`,
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,

  landscapeMobileSS: `(min-width: ${sizes.landscapeMobileSS}) and (orientation: landscape) and (max-height: 450px)`,
  landscapeMobileS: `(min-width: ${sizes.landscapeMobileS}) and (max-height: 450px) and (orientation: landscape)`,
  landscapeMobileSmallMed: `(min-width: ${sizes.landscapeMobileSmallMed}) and (max-height: 450px) and (orientation: landscape)`,
  landscapeMobileMS: `(min-width: ${sizes.landscapeMobileMS}) and (max-height: 450px) and (orientation: landscape)`,
  landscapeMobileM: `(min-width: ${sizes.landscapeMobileM}) and (max-height: 450px) and (orientation: landscape)`,
  landscapeMobileL: `(min-width: ${sizes.landscapeMobileL}) and (max-height: 450px) and (orientation: landscape)`,

  tablet: `(min-width: ${sizes.tablet})`,
  tabletL: `(min-width: ${sizes.tabletL}) and (orientation: portrait)`,
  landscapeTablet:
    '(min-width: 1000px) and (min-height: 600px) and (max-height: 600px) and (orientation: landscape)',
  laptop: `(min-width: ${sizes.laptop}) and (orientation: landscape)`,
  laptopM: `(min-width: ${sizes.laptopM}) and (orientation: landscape)`,
  laptopL: `(min-width: ${sizes.laptopL}) and (orientation: landscape)`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktop4K: `(min-width: ${sizes.desktop4K})`,
};

export default devices;
