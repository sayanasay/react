import { useParams } from "react-router";
import { useRef, useState, useEffect } from "react";
import FormComponent from "../FormComponent/FormComponent";
import MessageList from "../MessageList/MessageList";
import CheckChat from "../HOC/checkChat";
import { Grid, ThemeProvider } from '@material-ui/core';
import ChatsList from "../ChatsList/ChatsList";

const ChatComponent = ({ chatsList, theme, Item }) => {
  const [messageList, setMessageList] = useState([]);
  const ref = useRef(null);

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

  const { chatId } = useParams();

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <ChatsList chatsList={chatsList} />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <CheckChat chatId={chatId} chatsList={chatsList}>
              <p>Chat {chatId}</p>
              <FormComponent setFunc={setMessageList} refVal={ref} />
              <MessageList messageList={messageList} />
            </CheckChat>
          </Item>
        </Grid>
      </Grid>
    </ThemeProvider>

  );
}

export default ChatComponent;