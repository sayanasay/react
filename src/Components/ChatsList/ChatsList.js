import { List } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../../actions/chatsAction';
import { addMessage } from '../../actions/messagesAction';
import ChatItem from '../ChatItem/ChatItem';

const ChatsList = () => {
  const chatsList = useSelector(state => state.chats);
  const dispatch = useDispatch();
  const handlerClick = () => {
    const id = +chatsList.slice(-1)[0].id + 1;
    dispatch(addChat({ name: `user${id}`, id: id }));
    dispatch(addMessage({chatIndex: id}));
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