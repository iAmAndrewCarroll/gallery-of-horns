Number and name of feature: Lots

Estimate of time needed to complete: 3 hours

Start time: 1445hrs

Finish time: 2100hrs

Actual time needed to complete: +6hrs

Lab 03

Number and name of feature: Lab 03 Modal

Estimate of time needed to complete: 4 hours

Start time: 1600hrs

Finish time: 2100hrs

Actual time needed to complete: 5 hours

Lab 04

Number and name of feature: Lab 04 Filters

Estimate of time needed to complete: 4 hours

Start time: 1600hrs

Finish time: 2100hrs

Actual time needed to complete: 5 hours


# The Real Deal to Know:

1. App.js feeds [Header.js, Main.js, ClickedBeast.js, and Footer.js]
   * App.js passes props (properties) to those child components
2. Main.js feeds [HornedBeast.js]

### App.js

* State: 
  * isModalDisplaying Boolean for if the modal is displaying
  * beastInfo: the data about the beast that was clicked on must be passed to our modal in [SelectedBeast.js]
* Methods:
  * handleModalOpen event handler to change the value of isModalDisplaying (make true)
    * And put the Beast data in state
  * handleModalClose event handeler to change the value of isModalDisplaying (make false)

### HornedBeast.js

* State: click event happens here
  * When clicked invoke the handleModalOpen method (remember it is lighting the fuse that burns back through Main.js to App.js handleModalOpen to true)
  * this.props.handleModalOpen()
  * When we invoke handleModalOpen() we need to send the beast information as an argument: this.props.handleModalOpen(beastInfo) back up to App.js to the handleModalOpen event handler
    * beastInfo: the data about the beast that was clicked on

### ClickedBeast.js

* The Modal is in this file
  * isModalDisplaying set to true?
  * handleModalClose is passed from App.js through props to ClickedBeast.js in order to close the modal.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
