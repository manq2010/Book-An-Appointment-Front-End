import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
${variables}
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
  width: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  color: var(--tertiary);
  background-color: var(--primary);
  width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  margin: 0;
  font-size: var(--fs-l);
  line-height: 1.2;
  font-family: var(--font-main-family);
  
  @media (min-width: 768){
    font-size:  var(--fs-xl);
  }
}

body *:focus {
  outline: none;
}

main {
  margin: 0;
  width: 100%;
  /* padding: 0 0 0 15px; */

  @media (min-width: 320px){
    padding: 0 25px;
  }

  @media (min-width: 480px){
    padding: 0 50px;
  }

  @media (min-width: 768px){
    padding: 0 100px 0 300px;
  }

  @media (min-width: 1080px){
    padding: 0 150px 0 350px;
  }

  @media (min-width: 1200px){
    padding: 0 200px 0 400px;
  }
}

section {

}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 10px 0;
  font-weight: 600;
  color: var(--secondary-light);
  line-height: 1.1;
}

button {
  cursor: pointer;
  border: 0;
  border-radius: 0;
}

input {
  border-radius: 0;
  outline: 0;

  &:focus {
    outline: 0;
  }
  &:focus,
  &:active {
    &::placeholder {
      opacity: 0.5;
    }
  }
}

p {
  margin: 0 0 15px 0;
  text-align: justify;

  &:last-child,
  &:last-of-type {
    margin: 0;
  }
}

input[type="text"], 
input[type="number"]  {
  color: var(--secondary);
  background-color: transparent;
  border: 1px solid var(--secondary);
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  font-size: var(--fs-l);
  line-height: 1;
  text-decoration: none;
  margin: 0.5rem 0;
  width: 100%;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--secondary-tint);
    outline: none;
    color: var(--white);
  }
}

input[type="text"]:first-of-type {
  margin-top: 1rem;
}

input[type="submit"]{
    color: var(--white);
    background-color: var(--tertiary);
    border: 1px solid var(--tertiary);
    padding: 0.75rem 1rem;
    font-size: var(--fs-l);
    font-family: var(--font-mono-family);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    margin-top: 0.5rem;

    &:hover,
    &:focus,
    &:active {
      background-color: var(--secondary-tint);
      border: 1px solid var(--secondary-tint);
      outline: none;
    }
}

`;

export default GlobalStyle;
