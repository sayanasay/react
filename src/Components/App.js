import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Main/Main";
import ChatComponent from "./ChatComponent/ChatComponent";
import NotFound from "./NotFound/NotFound";
import Profile from "./Profile/Profile";
import { createTheme, Paper} from "@material-ui/core";
import { styled } from '@material-ui/styles';
import { Provider } from "react-redux";
import { store } from "../store";

const theme = createTheme ({
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
  const chatsList = [{name: 'user1', id: '1'}, {name: 'user2', id: '2'}, {name: 'user3', id: '3'}, {name: 'user4', id: '4'}, {name: 'user5', id: '5'},]

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main chatsList={chatsList} theme={theme} Item={Item} />
        </Route>
        <Route exact path="/chats/">
          <ChatComponent chatsList={chatsList} theme={theme} Item={Item} />
        </Route>
        <Route exact path="/chats/:chatId">
          <ChatComponent chatsList={chatsList} theme={theme} Item={Item} />
        </Route>
        <Route exact path="/profile">
          <Provider store={store}>
            <Profile />
          </Provider>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
