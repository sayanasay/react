import { useState, useEffect, useRef } from "react";
import { Grid, Paper, ThemeProvider, createTheme } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import FormComponent from "./FormComponent/FormComponent";
import MessageList from "./MessageList/MessageList";
import ChatsList from "./ChatsList/ChatsList";

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
  const [messageList, setMessageList] = useState([]);
  const ref = useRef(null);
  const chatsList = [{name: 'user1', id: '1'}, {name: 'user2', id: '2'}, {name: 'user3', id: '3'}, {name: 'user4', id: '4'}, {name: 'user5', id: '5'},]
  
  useEffect(() => {
    ref.current?.focus();
  }, [messageList]);

  useEffect(() => {
    if ((messageList[messageList.length - 1]?.author) === 'user') {
      setTimeout(() =>
        setMessageList(prev => [...prev, { id: prev.length, text: 'This is automatic answer', author: 'robot' }])
        , 1500)
    }
  }, [messageList]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <ChatsList chatsList={chatsList}/>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <FormComponent setFunc={setMessageList} refVal={ref}/>
            <MessageList messageList={messageList}/>
          </Item>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
