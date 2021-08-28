import { createStore } from 'easy-peasy';
import jokes from './jokesModel';


const store = createStore({
   jokes,
});

export default store;