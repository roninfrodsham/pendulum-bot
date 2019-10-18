import React from "react";
import { createGlobalStyle } from "styled-components";
import Main from "./Main";

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
	
	* {
		box-sizing: border-box;
	}

	html, body {
		height: 100%;
		-webkit-overflow-scrolling : touch !important;
    overflow: auto !important;
	}

	body {
		display: flex;
		flex-direction: column;
  	align-items: center;
		height: 100%;
		margin: 0;
		padding: 0;
		background-color: #bef0dc;
		font-family: Montserrat, sans-serif;
		font-style: normal;
		font-size: 14px;
		-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
		line-height: 1.3;
		color: #28283c;
	}
	
	button, input, textarea {
		font-family: Montserrat, sans-serif;
		font-size: 13px;
		outline: 0;
	}

	input {
		border: 0;
		outline: 0;
	}

	h1, h2 {
		margin-bottom: 10px;
	}

	h2 {
		margin-top: 30px;
	}

	p {
		font-size: 16px;
	}

	#root {
		height: 100%;
	}

	.App {
		width: 400px;
  	text-align: left;
	}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
}

export default App;
