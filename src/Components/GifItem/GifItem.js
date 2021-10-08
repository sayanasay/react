import { Card, CardMedia } from "@material-ui/core";

export const GifItem = ({ gif }) => {
  return (
    <Card>
      <CardMedia component="img" height="180" image={gif.images.downsized.url} />
    </Card>
  );
};