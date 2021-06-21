# my smart bank app  using [React.js](https://reactjs.org)

> **This application has features like adding,removing,deleting, resetting products which reflects in the total number of products into our shopping cart.**

**This is a very basic app but useful to understand the React Components, states, Data Flow, parent to child etc. .**


Install node modules

#### `npm install`

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


Before testing make sure you have already running smart bank api in tomcat 
> **Smar bank Api is backend application built in java Spring boot which has the services to be consumed by react app like adding,removing,deleting, resetting products which reflects in the total number of products into our shopping cart.**

 **Once the back end service is started you can change the port in the constants file under src>Constants.js .**
**Point your react App to backend service URL by updating below line and restart your app by npm start.**
 **export const API_URL = "http://localhost:8082/" .**