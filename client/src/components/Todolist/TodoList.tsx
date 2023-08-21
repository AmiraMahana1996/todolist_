import React, { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../store/actions/actions/todo";
export default function TodoList() {
  const [value, setValue] = React.useState(2);
  const todos = useSelector((state: any) => state.todo);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos() as any);
  }, []);
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
