import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useReducer } from 'react';
import { AppContext, appReducer } from 'AppContext';
import Player from 'components/Player';
import { db } from 'firebase';
import type { Song } from 'models/song.model';
import { FadeLoader } from 'react-spinners';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(appReducer, {
    loading: true,
  });

  const { loading, error, songs } = state;

  useEffect(() => {
    dispatch({ type: 'pending' });

    getDocs(collection(db, 'songs'))
      .then((songs) => {
        const data: Song[] = songs.docs.map(
          (song) =>
            ({
              id: song.id,
              ...song.data(),
            } as Song)
        );

        dispatch({ type: 'success', payload: data });
      })
      .catch((error) => {
        dispatch({ type: 'error', error });
      });
  }, []);

  if (loading) {
    return (
      <div className='loader d-flex justify-center align-center'>
        <FadeLoader color='#170f23' />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <Player songs={songs} loading={loading} />
    </AppContext.Provider>
  );
}

export default App;
