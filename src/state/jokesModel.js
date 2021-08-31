import {computed,action,thunk}  from 'easy-peasy'
import axios from 'axios';
import AppState from '../utilities/utils'
const jokes = {
    loadingState : AppState.loading,
    joke : {},
    count:computed((state)=>Object.values(state.joke).length),

    getJokes :thunk(async(actions,category,state)=>{
        actions.setState(AppState.loading)
        const res = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
        actions.setJokes(res.data)
        console.log(res.data)

    }),

    setState : action((state,payload)=>{
        state.loadingState = payload
    }),

    setJokes: action((state,payload)=>{
        state.joke =payload
        state.loadingState = AppState.done
    }),

}
export default jokes;