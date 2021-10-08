import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Main/Main";
import ChatComponent from "./ChatComponent/ChatComponent";
import NotFound from "./NotFound/NotFound";
import Profile from "./Profile/Profile";
import { createTheme, Paper } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import GiphyComponent from "./GiphyComponent/GiphyComponent";
import GifsList from "./GifsList/GifsList";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#0288d1",
    },
    spacing: 4,
  },
});

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main theme={theme} Item={Item} />
        </Route>
        <Route path="/chats/:chatId?">
          <ChatComponent theme={theme} Item={Item} />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/gifs">
          <GiphyComponent />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;