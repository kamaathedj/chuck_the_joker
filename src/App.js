import React, {useEffect} from 'react';
import { useStoreState,useStoreActions } from 'easy-peasy';
import styled from 'styled-components';
import Joke from './components/joke'
import categories from './utilities/category';
import state from './utilities/utils';


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 0.2em;
  padding: 0.25em 1em;
  
  
  &:hover {
    background:palevioletred;
    color:white 
  }
  `;
  
  const Wrapper = styled.div`
  display: inline-block;
  align-items: center;
  
  
  `;
  const ScentedBox = styled.div`
  color: palevioletred;
  border: 2px solid palevioletred;
  border-radius: 30px;
  padding:10px;
  
  `;



const App = ()=> {
  const {getJokes} = useStoreActions((state) => state.jokes);
  const {loadingState} = useStoreState((state) => state.jokes);

 const handleClick = category =>event =>{
    event.preventDefault()
    console.log(category)
    getJokes(category)
  }
  useEffect(() => {
    getJokes('dev')
    // eslint-disable-next-line
  }, []);
  return (
    <Wrapper>
      {categories.map(it => (
        
        <Button key = {it}onClick={handleClick(it)}>{it}</Button>  
      ))}
      <ScentedBox>
        {loadingState === state.loading ? <h3>loading ....</h3>:<Joke/>}
      </ScentedBox>
    </Wrapper>
  );
}

export default App;
