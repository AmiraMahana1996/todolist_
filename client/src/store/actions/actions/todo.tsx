import { Action } from "redux";
import { axiosInstance } from "../../../axiosInstance";
import * as TYPES from "../../types/todo";
import { ThunkDispatch } from "redux-thunk";
export const getTodos = () => (dispatch: any) => {
  axiosInstance
    .get("/todos/all")
    .then(function (response) {
      console.log(response, "response");
      // success
      dispatch({
        type: TYPES.GET_TODOS,
        payload: response.data.data,
      });
    })
    .catch(function (error) {
      // show snackbar
      console.log(error);
    });
};
export const updateTodos = (id: number) => (dispatch: any) => {
  axiosInstance
    .put(`/todos/edit/${id}`)
    .then(function (response) {
      // success
      dispatch({
        type: TYPES.UPDATE_TODO,
        payload: response.data,
      });
    })
    .catch(function (error) {
      // show snackbar
      console.log(error);
    });
};

export const addTodos = (data: any) => (dispatch: any) => {
  axiosInstance
    .post(`/todos/add/`, data)
    .then(function (response) {
      // success
      dispatch({
        type: TYPES.ADD_TODO,
        payload: response.data,
      });
    })
    .catch(function (error) {
      // show snackbar
      console.log(error);
    });
};
