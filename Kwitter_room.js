// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBP1pqXhvmoviIEyv_F40c8mfMZTBpoDqw",
    authDomain: "kwit-df171.firebaseapp.com",
    projectId: "kwit-df171",
    storageBucket: "kwit-df171.appspot.com",
    messagingSenderId: "708238640519",
    appId: "1:708238640519:web:2a456bb5b128ba4732ff22"
  };
  // Initialize Firebase

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
