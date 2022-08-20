import { Container, Grid, Typography } from "@mui/material";
import API from "../../Services/Service";
import ListCard from "./ListCard";
import { taskListType } from "../../App.type";

type todoListProps = {
  taskList: taskListType,
  loading:boolean,
    setAllTasks:React.Dispatch<React.SetStateAction<taskListType>>,

}

const TodoList = ({ taskList, loading, setAllTasks }:todoListProps) => {
  const handleDelete = async (id:number) => {
    return await API.delete("/tasks/" + id)
      .then((res) => {
        const lists = [...taskList];
        const newTaskList = lists.filter((e) => {
          if (!(e.id === id)) {
            return e;
          }
        });
        setAllTasks([...newTaskList]);
        alert("Deleted task with id: " + id);
      })
      .catch((err) => {
        console.log("error occured");
      });
  };

  if (!taskList || taskList.length === 0) return <h1>"No data"</h1>;
  return (
    <Container
      sx={{
        margin: "",
        backgroundColor: "lightblue",
        padding: "20px",
        borderRadius: "5px",
        width: "fit-content",
      }}
    >
      <Typography variant="h5"> Todo list </Typography>
      {!taskList || taskList.length === 0 ? <h3>No Tasks</h3> : ""}
      <Grid container spacing={3} style={{ padding: "20px" }}>
        {loading ? "Loading" : ""}
        <ListCard items={taskList} handleDelete={handleDelete} />
      </Grid>
    </Container>
  );
};

export default TodoList;
