import { Card, CardContent, CardHeader, Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { taskListType } from "../../App.type";

type ListCardProps = {
    items: taskListType,
    handleDelete:any
}

const ListCard = ({ items, handleDelete }:ListCardProps) => {
  return (
    <>
      {items.map((i) => {
        return (
          <Grid item xs="auto" key={i.id}>
            <Card>
              <Typography> Task id: {i.id}</Typography>
              <CardHeader
                title={i.title}
                action={
                  <IconButton onClick={() => handleDelete(i.id)}>
                    <DeleteIcon fontSize="large" sx={{ color: "red" }} />
                  </IconButton>
                }
              />
              <CardContent>
                {i.description} <br /> category: {i.category}
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

export default ListCard;
