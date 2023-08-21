import React from "react";
import Todoform from "../../components/Todoform/Todoform";
import TodoList from "../../components/Todolist/TodoList";
import { Typography } from "@mui/material";

export default function Todo() {
  return (
    <>
      <Typography
        variant="h2"
        component="div"
        sx={{ flexGrow: 1 }}
        fontWeight={600}
      >
        Todo
      </Typography>
      <br />
      <Todoform />
      <TodoList />
    </>
  );
}
