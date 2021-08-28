import React, { useEffect } from 'react';
import { useStoreState,useStoreActions } from 'easy-peasy';
function App() {
  const {jokes,loadingState} = useStoreState((state) => state.jokes);
  const getjokes = useStoreActions((state) => state.jokes.getJokes);

  console.log(loadingState)

  useEffect(() => {
    getjokes('food')
    // eslint-disable-next-line
  }, []);
  return (
   
    <div>
      <p>
        {jokes.value}
      </p>
    </div>
  );
}

export default App;
