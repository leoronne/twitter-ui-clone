import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;

    color: var(--white);
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
  }

  *, button, input {
    border: 0;
    outline: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }
  html {
    background: var(--primary);
  }
  
  :root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;
    --transition-slow: 0.6s ease-in-out !important;
    --filter-transition: filter var(--transition-slow);
    --hover-effect: brightness(1.3);
  }

  a {
    transition: var(--filter-transition);
  }

  a:hover{
    transition: var(--filter-transition);
    filter: var(--hover-effect);
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: #3333;
  }

  ::-webkit-scrollbar-thumb {
    background: #89777a;
    border-radius: 4px;
    transition: 0.6s ease-in-out !important;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #333333;
    transition: 0.6s ease-in-out !important;
  }
`;
