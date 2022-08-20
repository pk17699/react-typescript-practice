import { Button, FormControl, FormControlLabel, FormGroup, FormLabel, Input, InputLabel, Radio, RadioGroup } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import API from "../../Services/Service";
import { taskListType } from "../../App.type";

type AddTaskFormProps = {
    taskList: taskListType,
    setAllTasks:React.Dispatch<React.SetStateAction<taskListType>>,
}

const AddTaskForm = ({ setAllTasks, taskList }: AddTaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const addData = async (title:string, description: string, category: string) => {
    return await API.post("/tasks", { title, description, category }).catch(
      (err) => {
        console.log(err);
      }
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    addData(title, description, category).then((res: any) => {
        const status: number =res.status;
      if (status === 201) {
        const newTaskList = [...taskList];
        newTaskList.push(res.data);
        setAllTasks([...newTaskList]);
        alert("New task added");
      }
    });
    setTitle("");
    setDescription("");
    setCategory("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <FormGroup>
        <FormControl variant="standard">
          <InputLabel htmlFor="title">Title</InputLabel>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
          />
        </FormControl>
        <br />
        <FormControl variant="standard">
          <InputLabel htmlFor="description">Description</InputLabel>
          <Input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
          />
        </FormControl>
        <br />
        <FormLabel>Category</FormLabel>
        <RadioGroup
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <FormControlLabel value="todo" control={<Radio />} label="Todos" />
          <FormControlLabel value="work" control={<Radio />} label="Work" />
          <FormControlLabel value="reminder" control={<Radio />} label="Reminder"/>
          <FormControlLabel value="other" control={<Radio />} label="other" />
        </RadioGroup>

        <Button type="submit">Submit</Button>
      </FormGroup>
    </Box>
  );
};

export default AddTaskForm;
