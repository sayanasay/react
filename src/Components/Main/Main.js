import { Grid, ThemeProvider } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Main({ theme, Item }) {

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <p>
              <Link to="/chats">Chats</Link>
            </p>
            <p>
              <Link to="/profile">Profile</Link>
            </p>
            <p>
              <Link to="/Gifs">Gifs</Link>
            </p>
          </Item>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Main;
