import React from 'react';
import styled from 'styled-components';
import { useStoreState} from 'easy-peasy';
function Jokes() {
const {joke} = useStoreState((state) => state.jokes);
const Wrapper = styled.div`
 display: inline;

`;

  return (
    <Wrapper>
    <img src={joke.icon_url} alt='placeholder' ></img>
      <h3>
        {joke.value}
      </h3>

      <h6>Updated at : {joke.updated_at}</h6>
      
    </Wrapper>
  );
  
}

export default Jokes;
