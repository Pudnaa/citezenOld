import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDoc57P_ggKwJCiJgGHWeZi-oIXshpcDs4",
  authDomain: "moto-86243.firebaseapp.com",
  databaseURL: "https://moto-86243.firebaseio.com",
  projectId: "moto-86243",
  storageBucket: "moto-86243.appspot.com",
  messagingSenderId: "938578949385",
  appId: "1:938578949385:web:74db5383c153cdf2ebcfd8",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// const auth = firebase.auth();

// firebase.auth().languageCode = "mn";
firebase.auth().useDeviceLanguage(); //Тухайн төхөөрөмжийн хэлийг шууд сонгоё.

const firebaseAuth = firebase.auth();
const database = firebase.database();
const firestore = firebase.firestore();

const phoneAuthProvider = new firebase.auth.PhoneAuthProvider();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const emailAuthProvider = new firebase.auth.EmailAuthProvider();

// const memberContext = useContext(MemberContext);

// Configure FirebaseUI.
//https://github.com/firebase/firebaseui-web#configuration
const uiConfig = {
  signInFlow: "popup",
  // signInSuccessUrl: "/",
  signInOptions: [
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    /*
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      recaptchaParameters: {
        type: "image", // 'audio'
        size: "invisible", // 'invisible' or 'compact'
        badge: "bottomright", //' bottomright' or 'inline' applies to invisible.
      },
      defaultCountry: "MN", // Set default country to the United Kingdom (+44).
      defaultNationalNumber: "1234567890",
      loginHint: "+976-99998888",
      whitelistedCountries: ["MN", "+976"],
    },
    */
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // scopes: ["public_profile", "email", "user_likes", "user_friends"],
      scopes: ["public_profile", "email"],
      // customParameters: {
      //   // Forces password re-entry.
      //   auth_type: 'reauthenticate'
      // }
    },

    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // scopes: [
      //   'https://www.googleapis.com/auth/contacts.readonly'
      // ],
      // customParameters: {
      //   prompt: 'select_account'
      // }
    },
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // {
    //   provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //   requireDisplayName: true,
    //   signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
    // },
  ],

  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      const user = authResult.user;
      // var credential = authResult.credential;
      // var isNewUser = authResult.additionalUserInfo.isNewUser;
      // var providerId = authResult.additionalUserInfo.providerId;
      // var operationType = authResult.operationType;
      // Do something with the returned AuthResult.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      // console.log("UI Config Доторх user---------", authResult);
      // console.log("UI Config Доторх userredirectUrl---------", redirectUrl);
      // console.log("ЭНИЙГ ХАР ДАА", user);
      //!!user && memberContext.setMemberInfoAndLocal(user);

      return false;
    },
    signInFailure: function (error) {
      // Some unrecoverable error occurred during sign-in.
      // Return a promise when error handling is completed and FirebaseUI
      // will reset, clearing any UI. This commonly occurs for error code
      // 'firebaseui/anonymous-upgrade-merge-conflict' when merge conflict
      // occurs. Check below for more details on this.
      // return handleUIError(error);
      return error;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById("myUIloader").style.display = "none";
      // console.log("ХАРАГДСАН УУУУУУУУУУУУУУУУ??");
      return true;
    },
  },
};

// console.log("Cool=>", database);

export {
  database,
  firestore,
  // auth,
  firebaseAuth,
  phoneAuthProvider,
  facebookAuthProvider,
  googleAuthProvider,
  twitterAuthProvider,
  emailAuthProvider,
  StyledFirebaseAuth,
  uiConfig,
};
