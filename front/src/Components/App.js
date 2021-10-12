import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Main/Main";
import ChatComponent from "./ChatComponent/ChatComponent";
import NotFound from "./NotFound/NotFound";
import Profile from "./Profile/Profile";
import { createTheme, Paper } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import GiphyComponent from "./GiphyComponent/GiphyComponent";
import AuthPage from "./AuthPage/AuthPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
        <Route exact path="/" component={AuthPage} />
        <PrivateRoute path="/main" >
          <Main theme={theme} Item={Item} />
        </PrivateRoute>
        <PrivateRoute path="/chats/:chatId?">
          <ChatComponent theme={theme} Item={Item} />
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute exact path="/gifs">
          <GiphyComponent />
        </PrivateRoute>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;