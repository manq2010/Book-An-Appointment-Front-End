import { css } from 'styled-components';

const variables = css`
:root {
// handle primary colors
--primary: #fafffe;
--primary-light: #f3fffd;
--primary-lightest: #fdffff;
--primary-shadow: #bfccc9;

// handle secondary color - darker
--secondary: #272727;
--secondary-light: #3d3d3d;
--secondary-tint: #d4d4d4;


// handle tertiary colors
/* --tertiary: rgb(151,191,15); */
--tertiary: #119911;
--tertiary-light: #70c270;
--tertiary-lightest: #b8e0b8;

// handle other colors
--white: #ffffff;

// handle font family
--font-main-family:  'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
sans-serif;
--font-mono-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

// handle font-sizes
--fs-heading: 33px;
--fs-xxl: 22px;
--fs-xl: 20px;
--fs-l: 18px;
--fs-m: 16px;
--fs-s: 14px;
--fs-xs: 13px;
--fs-xxs: 12px;
}
`;

export default variables;
