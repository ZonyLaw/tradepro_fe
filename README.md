# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Production

This front end webpage is launced using Netify. Any new updates in Github will automatically be deployed at:

https://tradeprotool.netlify.app/report


Firebase has also been used to deployed and found at:

https://tradepro-e7784.web.app/



# Coding Notes

- Upon initialisation of project, there is 9 conflicts. 6 has been resolved by adding a  n-check package in the package.json.
- There is also a warning message about babel dependencies which will not be maintain no more.

## Setup

- "npm install react-bootstrap bootstrap" is performed to use install the bootstrap package
- https://react-bootstrap.github.io/docs/components/navbar
- https://cdnjs.com/ gives you the cdnjs to fontawesome
- this app uses axios module to access the api so this needs to be installed


### setting up firebase

Here are some bash commands to setup firebase if website is to be launch on gcp:

 - npm install -g firebase-tools       -> Install Firebase CLI globally
 - firebase login                      -> Authenticate your Google account
 - firebase init hosting               -> Initialize Firebase Hosting in your project folder


### nvm for managing node js version

Here is some bash commands to manage node js versions:

 - curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh
 - export NVM_DIR="$HOME/.nvm"
 - source "$NVM_DIR/nvm.sh"
 - nvm install 20
 - nvm use 20


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


