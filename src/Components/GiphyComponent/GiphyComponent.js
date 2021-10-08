import { useEffect, useState } from "react";
import GifsList from "../GifsList/GifsList";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../actions/gifCategoriesAction";
import { Button, CircularProgress } from "@material-ui/core";
import styled from 'styled-components';
import GifSearch from "../GifSearch/GifSearch";
import Error from "../Error/Error";

const StyledListItem = styled.li`
  padding: 5px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`;

const GiphyComponent = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.gifsCategories.categories);
  const error = useSelector(state => state.gifsCategories.error);
  const loading = useSelector(state => state.gifsCategories.request);

  const requestGifsCategories = () => {
    dispatch(getCategories());
  }

  useEffect(() => {
    requestGifsCategories();
  }, []);

  return (
    <>
      {error ? <Error error={error} func={requestGifsCategories} /> : null}
      {loading === 1 ? <CircularProgress /> : null}
      <StyledList>
        {categories?.length
          ? categories.map((el) => (
              <StyledListItem key={el.name}>
                <Button variant="outlined" onClick={() => setValue(el.name)}>
                  {el.name}
                </Button>
              </StyledListItem>
            ))
          : null}
      </StyledList>
      <GifSearch />
      { (value) ? <GifsList value={value} /> : null }
    </>
  );
};

export default GiphyComponent;