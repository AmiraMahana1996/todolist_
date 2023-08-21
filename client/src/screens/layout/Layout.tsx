import { Grid, Paper } from "@mui/material";
import React from "react";
// style
import "./style.css";
import Todo from "../Todo/Todo";
function Layout() {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        className="conTodo"
      >
        <Grid item xs={12} sm={12} md={12}>
          <Paper elevation={3} className="paper-style">
            <Todo />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Layout;
