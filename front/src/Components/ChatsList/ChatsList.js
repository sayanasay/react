import { List } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, fetchChats } from '../../actions/chatsAction';
import { addMessage } from '../../actions/messagesAction';
import ChatItem from '../ChatItem/ChatItem';

const ChatsList = () => {
  const chatsList = useSelector(state => state.chats);
  const dispatch = useDispatch();

  useEffect(() => {
    if (chatsList.length === 0) {
      dispatch(fetchChats());
    }
  }, []);

  const handlerClick = () => {
    const id = (chatsList.length) ? +chatsList.slice(-1)[0].id + 1 : 1;
    dispatch(addChat({ name: `user${id}`, id: id }));
    dispatch(addMessage(id, null));
  }
  
  return (
    <>
      <List>
        {chatsList.map((obj) => <ChatItem chat={obj} key={obj.id} />)}
      </List>
      <button onClick={handlerClick}>Add Chat</button>
    </>
  );
}

export default ChatsList;