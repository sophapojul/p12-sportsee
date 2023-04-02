<div align="center">
  <img src="public/logo.svg" width="60%">
  <p>A startup dedicated to sports coaching.</p>
</div>

<div align="center">
<h1> Web application with React and Recharts</h1>
</div>

The goal is to present a new version of the user profile page.\
This page will allow the user to track the number of sessions performed and the number of calories burned.\
The project must be readable on screens of at least 1024 by 780 pixels.

## Environment

- [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
- [![npm version](https://img.shields.io/badge/node--lts-v18.15-339933?logo=node.js)](https://www.nodejs.org/en/download) [Node](https://nodejs.org/en/)
- [![npm version](https://img.shields.io/npm/v/react.svg?logo=react&style=flat)](https://www.npmjs.com/package/react) [React](https://reactjs.org/)
- [![npm package][npm-badge]][npm] [React-routeur-dom](https://reactrouter.com/en/main)

  [npm-badge]: https://img.shields.io/npm/v/react-router-dom.svg?logo=react-router&style=flat
  [npm]: https://www.npmjs.org/package/react-router-dom

- ![npm](https://img.shields.io/npm/v/recharts?color=brightgreen) [Recharts](https://recharts.org/en-US/)
- [![npm version](https://img.shields.io/badge/npm-v4.9.5-3178C6?logo=typescript)](https://www.npmjs.com/package/typescript) [Typescript](https://www.typescriptlang.org/)
- [![npm version](https://img.shields.io/npm/v/prop-types.svg?&style=flat)](https://www.npmjs.com/package/react) [Prop-types](https://github.com/facebook/prop-types)
- styles with [Sass](https://sass-lang.com/) ![npm](https://img.shields.io/npm/v/sass?color=CC6699) and [CSS Modules](https://github.com/css-modules/css-modules)
- linter [eslint](https://eslint.org/) ![npm](https://img.shields.io/npm/v/eslint?logo=eslint) configuration [airbnb](https://airbnb.io/javascript/) <img  src="https://avatars.githubusercontent.com/u/698437?s=200&v=4" width="20" align="center">
- formater [Prettier](https://prettier.io/) ![npm](https://img.shields.io/npm/v/prettier?logo=prettier)

## Installation

### FrontEnd

- `git clone https://github.com/sophapojul/p12-sportsee.git && cd p12-sportsee && npm i`
- `npm start` to launch it.

### BackEnd

API available at this address : [https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard).

- `git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git`\
  `&& cd P9-front-end-dashboard && npm i`

otherwise you have a local server with mocked data in the directory `server` :

- `cd server && npm i`
- `npm start` to launch it.

The variable `REACT_APP_LOCAL_DATA=true` in the .env file set the local mocked data otherwise a server.

## Available Scripts

In the project directory, you can run:

- ### `npm run styleguide`

Runs the documentation server.\
Open http://localhost:6060 to view it in the browser.

- ### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

- ### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- ### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

- ### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).\
To learn Recharts, check out the [Recharts documentation](https://recharts.org/en-US).
