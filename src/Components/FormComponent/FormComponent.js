import { useState } from "react";
import { TextField, Button } from '@material-ui/core';
import { styled } from '@material-ui/styles';

const MyTextField = styled(TextField)({
  margin: '0 10px 0 0',
});


const FormComponent = ({setFunc, refVal}) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    setFunc(prev => [...prev, { id: prev.length, text: value, author: 'user' }]);
    setValue('');
    event.preventDefault();
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

