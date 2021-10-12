import { useParams } from "react-router";
import { useRef, useEffect } from "react";
import FormComponent from "../FormComponent/FormComponent";
import MessageList from "../MessageList/MessageList";
import CheckChat from "../HOC/checkChat";
import { Grid, ThemeProvider } from "@material-ui/core";
import ChatsList from "../ChatsList/ChatsList";
import { useSelector, useDispatch } from "react-redux";
import { fetchMessages, robotMessage } from "../../actions/messagesAction";

const ChatComponent = ({ theme, Item }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { chatId } = useParams();
  const messageLists = useSelector(state => state.messages);
  const messages = messageLists.find((el) => el.chatIndex === +chatId)?.messages;

  useEffect(() => {
    ref.current?.focus();
  }, [messages]);

  useEffect(() => {
    if (messageLists.length === 0) {
      dispatch(fetchMessages());
    }
  }, []);

  const messageId = messages?.length ? messages.length+1 : 1;

  useEffect(() => {
    dispatch(robotMessage(messages, chatId, messageId))
  }, [messages]);


  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <ChatsList />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <CheckChat chatId={chatId}>
              <p>Chat {chatId}</p>
              <FormComponent
              chatId={chatId}
              refVal={ref}
              messageId={messageId}
              />
              <MessageList messages={messages}/>
            </CheckChat>
          </Item>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ChatComponent;
