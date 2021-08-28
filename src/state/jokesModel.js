import {computed,action,thunk}  from 'easy-peasy'
import axios from 'axios';
import AppState from '../utils'
const jokes = {
    loadingState : AppState.loading,
    jokes : [{
        'value':'kamaa is crazy'
    }],
    count:computed((state)=>Object.values(state.jokes).length),

    getJokes :thunk(async(actions,category,state)=>{
        
      
        const res = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
        actions.setJokes(res.data)
        state.loadingState = AppState.loading; 
    }),

    setJokes: action((state,payload)=>{
        console.log(payload)
        state.jokes = payload
       
        state.loadingState = AppState.done
    }),

}
export default jokes;