> About

- _A full stack mern project. It's a full functional CRUD application where we can create, edit, delete and update memories and we can give a like._
- **For client side required dependencies are**
   - ```npm i axios moment react-file-base64 redux redux-thunk  @material-ui/core @material-ui/icons```
     - axios: for requesting API calls,
     - moment: library for wotking with time and date,
     - react-file-base64: to convert images. base64 is most commonly used to encode binary data(eg. Images) for embedding into HTML, CSS, etc,
     - redux redux-thunk: required for asynchronous action using redux.
     - @material-ui/core @material-ui/icons: used for creating icons and in UI part.
     
- **For server side required dependencies are**
   - ```npm i body-parser cors express mongoose nodemon```
     - body-parser: it will enable us to send POST request.
     - cors: this is going to enable cross origin request, 
     - express: framework for creating routing of our application,
     - mongoose: to create models for our POST
     - nodemon: by this we don't have to manually reset the server everytime we make changes, Instead nodemon will be doing that for us.

- **I have used MongoDB Atlas for [Database](https://account.mongodb.com/)**
- **You can use it by cloning and then run it by ```npm start``` in client and server side.**
- **Deploy and make it your work live by:**
   - Deploying server side file using ```Heroku```
     - Copy the URL which you will get after the deployement of server side file and 
   - Deploy the client side on Netlify and paste the heroku url in ```client/api/index.js file```. 
     - Your site will be live.

### [Live](https://react-memories-app.netlify.app/)
![Screenshot (24)](https://user-images.githubusercontent.com/50996696/102591125-85479600-4137-11eb-99c7-665496b836e7.png)

> If you stuck somewhere please do read [my_blog](https://dev.to/smileyshivam/deploy-a-full-stack-mern-app-using-netlify-and-heroku-9da).

> **Happy Coding!!**
