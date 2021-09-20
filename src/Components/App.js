import { useState, useEffect, useRef } from "react";
import './style.css'
import { TextField, Button, List, ListItem, ListItemText, Grid, Paper } from '@material-ui/core';
import { styled } from '@material-ui/styles';

const MyTextField = styled(TextField)({
  margin: '0 10px 0 0',
});
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const [value, setValue] = useState('');
  const [messageList, setMessageList] = useState([]);
  const ref = useRef(null);
  const chatsList = [{name: 'user1', id: '1'}, {name: 'user2', id: '2'}, {name: 'user3', id: '3'}, {name: 'user4', id: '4'}, {name: 'user5', id: '5'},]
  useEffect(() => {
    ref?.current.focus();
  }, [messageList]);
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    setMessageList(prev => [...prev, { id: prev.length, text: value, author: 'user' }]);
    setValue('');
    event.preventDefault();
  }

  useEffect(() => {
    if ((messageList[messageList.length - 1]?.author) === 'user') {
      setTimeout(() =>
        setMessageList(prev => [...prev, { id: prev.length, text: 'This is automatic answer', author: 'robot' }])
        , 1500)
    }
  }, [messageList]);


  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Paper>
          <List>
          {chatsList.map((obj) => (
            <ListItem key={obj.id}>
              <div>{obj.name}</div>
            </ListItem>
          ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper
          style={{
            padding: 8,
          }}
        >
          <MyTextField
            id="standart-basic"
            variant="standard"
            value={value}
            onChange={handleChange}
            inputRef={ref}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Send
          </Button>
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
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
