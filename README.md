<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->


# Welcome to the Shopping-Bucket-Like-Google-Shopping project

### _This is a shopping list project similar to Google Shopping List (https://shoppinglist.google.com/)_

In this repository I have tried to add as much functionality as possible like  Google Shopping List Application. The main focus of this application was to follow good coding practices and to keep the codebase as clean as possible.

## Technology stack

This repository is built on top of React.js and Easy-Peasy. For managing the state I have decided to use Easy-Peasy (https://easy-peasy.vercel.app/). Easy-Peasy is basically a redux wrapper that allows us to manage state more flexibly and efficiently. I have use raw CSS following BEM methodology for writing manageable and more maintainable CSS code. As this is a full Frontend application, I have used localStorage for data persisting.

#### Client side

- [React] - A JavaScript library for building user interfaces
- [Easy-Peasy] - Vegetarian friendly state for React
- [JSDoc] - An API documentation generator for JavaScript
- [prop-types] - Runtime type checking for React props and similar objects.
- [shortid] - Amazingly short non-sequential url-friendly unique id generator.

Details frameworks and packages can be found in the package.json files in server and client directory.

## Run the application

This project can be run manually via vscode.

### Visual Studio Code

##### Prerequisites

- [x] Node.js : To run npm packages

##### Steps
#### Client commands

```
npm i
npm start
```

## Test client app

To view the client, open your browser and visit `http://localhost:3000` url.

## Scripts

| Project | Command           | Task                                                 |
| ------- | ----------------- | ---------------------------------------------------- |
| client  | `yarn add`        | Install client side dependencies                  |
| client  | `yarn run start`  | Start the react app                                  |
| client  | `yarn run build`  | Build the react app in production mode               |


## License

This project is [MIT licensed](https://github.com/facebook/react/blob/main/LICENSE).

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[node.js]: http://nodejs.org
[react]: https://reactjs.org/
[easy-peasy]: https://easy-peasy.vercel.app/
[JSDoc]: https://jsdoc.app/
[prop-types]: https://www.npmjs.com/package/prop-types
[shortid]: https://www.npmjs.com/package/shortid

