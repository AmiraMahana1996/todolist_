import { Action } from "redux";
import { axiosInstance } from "../../../axiosInstance";
import * as TYPES from "../../types/todo";

export const getTodos = () => (dispatch: any) => {
  axiosInstance
    .get("/todos/all")
    .then(function (response) {
      let activeTodos = response.data.data.filter((item: any) => {
        return item.status == true;
      });
      let completedTodos = response.data.data.filter((item: any) => {
        return item.status == false;
      });

      // success
      dispatch({
        type: TYPES.GET_TODOS,
        payload: {
          activeTodos: activeTodos,
          completedTodos: completedTodos,
          all: response.data.data,
        },
      });
    })
    .catch(function (error) {
      // show snackbar
      console.log(error);
    });
};
export const updateTodos = (id: string, body: any) => (dispatch: any) => {
  axiosInstance
    .put(`/todos/update/${id}`, body)
    .then(function (response) {
      let activeTodos = response.data.data.filter((item: any) => {
        return item.status == true;
      });
      let completedTodos = response.data.data.filter((item: any) => {
        return item.status == false;
      });
      dispatch({
        type: TYPES.UPDATE_TODO,
        payload: {
          activeTodos: activeTodos,
          completedTodos: completedTodos,
          all: response.data.data,
        },
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
      let activeTodos = response.data.data.filter((item: any) => {
        return item.status == true;
      });
      let completedTodos = response.data.data.filter((item: any) => {
        return item.status == false;
      });
      dispatch({
        type: TYPES.ADD_TODO,
        payload: {
          activeTodos: activeTodos,
          completedTodos: completedTodos,
          all: response.data.data,
        },
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
      let activeTodos = response.data.data.filter((item: any) => {
        return item.status == true;
      });
      let completedTodos = response.data.data.filter((item: any) => {
        return item.status == false;
      });
      dispatch({
        type: TYPES.DELETE_TODO,
        payload: {
          activeTodos: activeTodos,
          completedTodos: completedTodos,
          all: response.data.data,
        },
      });
    })
    .catch(function (error) {
      // show snackbar
      console.log(error);
    });
};
