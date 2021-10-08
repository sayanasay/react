import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GifItem } from "../GifItem/GifItem";
import { getGifs, setSearhText } from "../../actions/gifAction";
import { Grid, CircularProgress } from '@material-ui/core';
import InfiniteScroll from "react-infinite-scroll-component";
import Error from "../Error/Error";

const GifsList = ({ value }) => {
  const dispatch = useDispatch();

  const gifs = useSelector(state => state.gifs.gifsList);
  const error = useSelector(state => state.gifs.error);
  const loading = useSelector(state => state.gifs.request);
  const [limit, setLimit] = useState(20);

  const requestGifs = () => {
    dispatch(getGifs(value, limit));
    dispatch(setSearhText(value));
    setLimit(20);
  }

  useEffect(() => {
    requestGifs();
  }, [value]);

  const fetchMoreData = () => {
    setLimit(limit+10);
  }

  useEffect(() => {
    dispatch(getGifs(value, limit));
  }, [limit]);
  

  return (
    <>
      {error ? <Error error={error} func={requestGifs} /> : null}
      {loading === 1 ? <CircularProgress /> : null}
      {gifs?.length ? (
        <InfiniteScroll
          dataLength={gifs.length}
          next={fetchMoreData}
          hasMore={gifs.length === 50 ? false : true}
          loader={<CircularProgress />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Grid container spacing={2}>
            {gifs.map((el) => (
              <Grid item xs={6} sm={3} md={3} key={el.id}>
                <GifItem gif={el} />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      ) : null}
    </>
  );
}

export default GifsList;