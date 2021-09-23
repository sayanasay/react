import { List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

const ChatsList = ({chatsList}) => {

  return (
    <>
      <List>
        {chatsList.map((obj) => (
          <ListItem key={obj.id}>
            <Link to={`/chats/${obj.id}`}>{obj.name}</Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ChatsList;