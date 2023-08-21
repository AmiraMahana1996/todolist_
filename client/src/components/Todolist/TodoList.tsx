import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./style.css";
import { useSelector } from "react-redux";
export default function TodoList() {
  const [value, setValue] = React.useState(2);
  const todos = useSelector((state: any) => state.todos);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="list-con">
      {" "}
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Active" />
        <Tab label="Completed" />
        <Tab label="All" />
      </Tabs>
    </div>
  );
}
