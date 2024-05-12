import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = require("./app_config.json");

// Firebase
export const firebase_app = firebase.initializeApp({
  apiKey: "Enter your apiKey",
  authDomain: "Enter your authDomain",
  databaseURL: "Enter your databaseURL",
  projectId: "Enter your projectId",
  storageBucket: "Enter your storageBucket",
  messagingSenderId: "Enter your messagingSenderId",
  appId: "Enter your apiId",
});

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
export const db = firebase.firestore();

// Auth0
export const auth0 = {
  domain: config.auth0.domain,
  clientId: config.auth0.clientID,
  redirectUri: config.auth0.redirectUri,
};

// Jwt
export const Jwt_token = config.jwt_token;
