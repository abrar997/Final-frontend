import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const style = { color: "#db2d41" };
const RatingValue = () => {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2} precision={1} style={style}/>
  
    </Stack>
  );
};
export default RatingValue;
