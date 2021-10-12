import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGifs, setSearhText } from "../../actions/gifAction";
import useDebounce from "./useDebounce";
import { TextField } from "@material-ui/core";
import styled from "styled-components";

const MyTextField = styled(TextField)({
  margin: '0 0 20px 0',
});

const GifSearch = () => {
  const[text, setText] = useState('');
  const searchText = useSelector(state => state.gifs.searchText);

  const debounceValue = useDebounce(text, 2000);
  const dispatch = useDispatch();
  useEffect(() => {
    if (debounceValue) {
      setText('');
      dispatch(getGifs(debounceValue));
      dispatch(setSearhText(debounceValue));
    }
  }, [debounceValue]);

return (
  <>
  <MyTextField variant="outlined"
    type="text"
    value={text}
    onChange={(e) => setText(e.target.value)}
    label="Search gifs"
  />
  { (searchText) ? <p>Search results for <span>{searchText}</span></p> : null }
  </>
);
}

export default GifSearch;