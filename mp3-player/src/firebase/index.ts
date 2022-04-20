// music
// import { initializeApp } from 'firebase/app';
// import { getStorage } from 'firebase/storage';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyClAxXEfuxNNHwbCRqCrwy5Ci9-CvrklZc',
//   authDomain: 'music-507ad.firebaseapp.com',
//   projectId: 'music-507ad',
//   storageBucket: 'music-507ad.appspot.com',
//   messagingSenderId: '262513997061',
//   appId: '1:262513997061:web:e0e3175302aeedf9f7b36c',
//   measurementId: 'G-68S7SH39DJ',
// };

// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app, 'gs://music-507ad.appspot.com');
// const db = getFirestore(app);

// export { app, storage, db };

// mp3-player
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDeroV-BZ4yWRvbCRRSjigyy6r04r80x2Q',
  authDomain: 'banx-mp3-player.firebaseapp.com',
  projectId: 'banx-mp3-player',
  storageBucket: 'banx-mp3-player.appspot.com',
  messagingSenderId: '917223241673',
  appId: '1:917223241673:web:7f62846568392a69ae9a18',
  measurementId: 'G-F9RSE9S5NK',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, 'gs://banx-mp3-player.appspot.com');
const db = getFirestore(app);

export { app, storage, db };
