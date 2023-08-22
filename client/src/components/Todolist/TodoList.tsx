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
import CircularProgress from "@mui/material/CircularProgress";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodos,
  getTodos,
  updateTodos,
} from "../../store/actions/actions/todo";
import makeStyles from "@material-ui/core/styles/makeStyles";
const useStyles = makeStyles({
  tabpanel: {
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
  },
});
export default function TodoList() {
  const [value, setValue] = React.useState("1");
  const todos = useSelector((state: any) => state.todo);
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos() as any);
  }, []);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handelDelete = (id: any, value: any) => () => {
    console.log(id, value);
    dispatch(deleteTodos(id as any) as any);
  };
  const handleToggle = (item: any, value: any) => () => {
    console.log(item);
    console.log(todos);
    item["status"] = !item["status"];
    // console.log(item);
    dispatch(updateTodos(item._id as any, item) as any);
  };

  return (
    <div className="list-con">
      <Box
        sx={{ width: "100%", typography: "body1", justifyContent: "center" }}
      >
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              justifyContent: "center",
            }}
          >
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              centered
            >
              <Tab label="Active" value="1" />
              <Tab label="Completed" value="2" />
              <Tab label="All" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
            >
              {todos.activeTodos ? (
                todos?.activeTodos.map((item: any, index: any) => {
                  const labelId = `checkbox-list-label-${index}`;
                  return (
                    <>
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
                          onClick={handleToggle(item, index)}
                          dense
                        >
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={item.status ? false : true}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            id={labelId}
                            primary={item.title}
                            className={item.status ? "" : "toggleCompleted"}
                          />
                        </ListItemButton>
                      </ListItem>
                    </>
                  );
                })
              ) : (
                <CircularProgress />
              )}
            </List>
          </TabPanel>
          <TabPanel value="2">
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {todos.completedTodos ? (
                todos.completedTodos.map((item: any, index: any) => {
                  console.log(todos.length);
                  const labelId = `checkbox-list-label-${index}`;
                  return (
                    <>
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
                          onClick={handleToggle(item, index)}
                          dense
                        >
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={item.status ? false : true}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            id={labelId}
                            primary={item.title}
                            className={item.status ? "" : "toggleCompleted"}
                          />
                        </ListItemButton>
                      </ListItem>
                    </>
                  );
                })
              ) : (
                <CircularProgress />
              )}
            </List>
          </TabPanel>
          <TabPanel value="3">
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
            >
              {todos.all ? (
                todos.all.map((item: any, index: any) => {
                  console.log(todos.length);
                  const labelId = `checkbox-list-label-${index}`;
                  return (
                    <>
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
                          onClick={handleToggle(item, index)}
                          dense
                        >
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={item.status ? false : true}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            id={labelId}
                            primary={item.title}
                            className={item.status ? "" : "toggleCompleted"}
                          />
                        </ListItemButton>
                      </ListItem>
                    </>
                  );
                })
              ) : (
                <CircularProgress />
              )}
            </List>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
