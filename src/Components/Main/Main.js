import { Grid, ThemeProvider } from '@material-ui/core';
import ChatsList from "../ChatsList/ChatsList";
import { Link } from 'react-router-dom';

function Main({chatsList, theme, Item}) {
  
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <ChatsList chatsList={chatsList} />
            <Link to="/profile">Profile</Link>
          </Item>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Main;
