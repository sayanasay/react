import { List, ListItem } from '@material-ui/core';

const ChatsList = ({chatsList}) => {
  return (
    <List>
      {chatsList.map((obj) => (
        <ListItem key={obj.id}>
          <div>{obj.name}</div>
        </ListItem>
      ))}
    </List>
  );
}

export default ChatsList;