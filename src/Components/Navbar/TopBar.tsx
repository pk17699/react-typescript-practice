import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

const TopBar = () => {
  return (
    <Box flexGrow={1}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "black",
          color: "white",
        }}
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h6">Todo List</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
