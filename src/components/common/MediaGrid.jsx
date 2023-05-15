import { Grid } from "@mui/material";
import MediaItem from "./MediaItem";

const MediaGrid = ({ medias, mediaType }) => {
  return (
    <Grid container spacing={3} sx={{ marginRight: "-8px!important" }}>
      {medias.map((media, index) => (
        <Grid item xs={12} sm={6} md={2} key={index}>
          <MediaItem media={media} mediaType={mediaType} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MediaGrid;
