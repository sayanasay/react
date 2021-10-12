import styled from 'styled-components';
import { Button } from '@material-ui/core';

const StyledDiv = styled.div`
display: flex;
margin-bottom: 10px;
color: red;
`;

const Error = ( {error, func} ) => {
  return(
    <StyledDiv>
      <h3>{error}</h3>
      <Button variant="outlined" onClick={func}>
        Retry
      </Button>
    </StyledDiv>
  );
}

export default Error;