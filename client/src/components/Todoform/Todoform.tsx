import { Button, FormLabel, Grid } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { FormControl } from "@mui/base/FormControl";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addTodos } from "../../store/actions/actions/todo";
const useStyles = makeStyles({
  customIconButton: {
    minWidth: "30px",
    padding: "15px",
    height: "55px",
  },
});
export default function Todoform() {
  const [onboardingData, setOnboardingData] = useState({});
  const classes = useStyles();
  const dispatch = useDispatch();
  const onInputChange = (event: any) => {
    setOnboardingData({
      title: event.target.value,
      status: true,
    });
    console.log(event.target.value, onboardingData);
  };
  const handelSubmit = () => {
    dispatch(addTodos(onboardingData as any) as any);
    console.log(onboardingData);
  };
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={8} sm={8} md={8}>
          <FormControl defaultValue="" required>
            <TextField
              fullWidth
              id="filled-basic"
              label="add todo"
              variant="filled"
              name="title"
              onChange={onInputChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            className={classes.customIconButton}
            onClick={handelSubmit}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
