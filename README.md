# twitter-clone

That's a simple Twitter clone just to fun with MongoDB, Node.js, Socket.io, React.js, Vue.js and React Native.

![](https://raw.githubusercontent.com/fauker/twitter-clone/master/docs/gif-twitter-clone.gif)

### MongoDB
- run mongod on `27017`

### Backend
- run npm start (Node.js will be running on http://localhost:3000)
	- POST: `/tweets` to create a new Tweet
	- POST: `/likes/:id` to like a Tweet
	- GET: `/tweets` to get all Tweets

### Frontend
- React.js in **web-react** folder
	- yarn && yarn start 
- Vue.js in **web-vue** folder (`@TODO`)
	- yarn && yarn serve

### Mobile
- React Native in mobileReactNative folder
	- react-native run-ios --simulator "iPhone XR"