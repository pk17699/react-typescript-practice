import {  Container } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import styled from "@emotion/styled";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {taskListType} from '../../App.type'
import AddTaskForm from "./AddTaskForm";

const BtnContainer = styled(Container)({
  border: "1px solid black",
  borderRadius: "10px",
  width: "50%",
  marginTop: "30px",
  "&:hover": {
    backgroundColor: "#fefefe",
  },
});

type AddButtonPropsType={
    setAllTasks:React.Dispatch<React.SetStateAction<taskListType>>,
    taskList:taskListType
}

const AddButton = ({ setAllTasks, taskList }:AddButtonPropsType) => {    
  return (
    <BtnContainer>
      <Accordion elevation={0}>
        <AccordionSummary expandIcon={<AddBoxOutlinedIcon />}>
          <Typography textAlign="center">Add task</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AddTaskForm
            setAllTasks={setAllTasks}
            taskList={taskList}
          ></AddTaskForm>
        </AccordionDetails>
      </Accordion>
    </BtnContainer>
  );
};

export default AddButton;
