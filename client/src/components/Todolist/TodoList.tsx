import React, { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Delete from "@mui/icons-material/Delete";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodos, getTodos } from "../../store/actions/actions/todo";
export default function TodoList() {
  const [value, setValue] = React.useState("1");
  const todos = useSelector((state: any) => state.todo);
  const [checked, setChecked] = React.useState([0]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos() as any);
  }, []);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleToggle = (id: any, value: any) => () => {};
  const handelDelete = (id: any, value: any) => () => {
    dispatch(deleteTodos(id as any) as any);
  };

  return (
    <div className="list-con">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Active" value="1" />
              <Tab label="Completed" value="2" />
              <Tab label="All" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {todos.map((item: any, index: any) => {
                const labelId = `checkbox-list-label-${index}`;
                return (
                  <ListItem
                    key={index}
                    secondaryAction={
                      <IconButton edge="end" aria-label="comments">
                        <Delete onClick={handelDelete(item._id, index)} />
                      </IconButton>
                    }
                    disablePadding
                  >
                    <ListItemButton
                      role={undefined}
                      onClick={handleToggle(item._id, index)}
                      dense
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={item.status ? true : false}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        id={labelId}
                        primary={item.title}
                        className={item.status ? "toggleCompleted" : ""}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
