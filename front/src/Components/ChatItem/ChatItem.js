import { ListItem } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteChat } from "../../actions/chatsAction";

const ChatItem = ({ chat }) => {
  const dispatch = useDispatch();
  const handlerClick = () => {
    dispatch(deleteChat(chat.id));
  };
  
  return (
      <ListItem>
        <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
        <button onClick={handlerClick}>Delete</button>
      </ListItem>
  );
};

export default ChatItem;
