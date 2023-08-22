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
export const updateTodos = (id: string, body: any) => (dispatch: any) => {
  console.log(body, "bodybody");

  axiosInstance
    .put(`/todos/update/${id}`, body)
    .then(function (response) {
      // success
      dispatch({
        type: TYPES.UPDATE_TODO,
        payload: response.data.data,
      });
    })
    .catch(function (error) {
      // show snackbar
      console.log(error);
    });
};

export const addTodos = (data: any) => (dispatch: any) => {
  axiosInstance
    .post(`/todos/create/`, data)
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
export const deleteTodos = (id: any) => (dispatch: any) => {
  axiosInstance
    .delete(`/todos/delete/${id}`)
    .then(function (response) {
      // success
      dispatch({
        type: TYPES.DELETE_TODO,
        payload: response.data,
      });
    })
    .catch(function (error) {
      // show snackbar
      console.log(error);
    });
};
