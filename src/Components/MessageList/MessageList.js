import { List, ListItem, ListItemText } from '@material-ui/core';

const MessageList = ({messageList}) => {
  return (
    <List>
      {messageList.map((obj) => (
        <ListItem key={obj.id}>
          <ListItemText
            primary={obj.text}
            secondary={obj.author}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default MessageList;