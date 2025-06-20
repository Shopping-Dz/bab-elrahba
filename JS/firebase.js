
  const firebaseConfig = {
    apiKey: "AIzaSyC2hgjiIh3nomKm2jFZpR1PWk0O3OGiEDA",
    authDomain: "babrahbashop.firebaseapp.com",
    projectId: "babrahbashop",
    storageBucket: "babrahbashop.firebasestorage.app",
    messagingSenderId: "76258426177",
    appId: "1:76258426177:web:335deb41d4efa8cd9435c0",
    measurementId: "G-S9KC921TFV"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const name = user.displayName;
      console.log("اسم المستخدم:", name);
      document.getElementById("message").innerText = `مرحبًا ${name}`;
    }
  });
  