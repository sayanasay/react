import { useState } from "react";
import { TextField, Button } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { useDispatch } from "react-redux";
import { addMessage } from "../../actions/messagesAction";

const MyTextField = styled(TextField)({
  margin: '0 10px 0 0',
});

const FormComponent = ({ refVal, chatId, messageId }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMessage(chatId, {id: messageId, text: value, author: "user"}));
    setValue('');
  }

  return (
    <>
      <MyTextField
        id="standart-basic"
        variant="standard"
        value={value}
        onChange={handleChange}
        inputRef={refVal}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Send
      </Button>
    </>
  );
}

export default FormComponent;

