import Add from '@mui/icons-material/Add';
import { Tile } from "./Tile"
import { Typography } from "@mui/material";

export const AddTile = (props) => {

  return (
    <Tile>
      <Add sx={{ fontSize: 140 }} {...props}/>
      <Typography
        variant="h5"
      >
        Add Tile
      </Typography>
    </Tile>
  )
}