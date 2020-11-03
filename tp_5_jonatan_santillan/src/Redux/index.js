import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const intialStore = {
  isFetching: false,
  usuarios: [],
  error: undefined,
}
export const fetchUsuarios = () => {
  return async (dispatch) => {
    dispatch(fetchUsuariosPendientes())
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()
      return dispatch(fetchUsuariosExito(data))
    }
    catch(error) {
      return dispatch(fetchUsuariosError(error.toString()))
    }
  }
}

export const fetchUsuariosPendientes = () => {
  return {
    type: "FETCH_USUARIOS_PENDIENTES",
  }
}

export const fetchUsuariosExito = (data) => {
  return {
    type: "FETCH_USUARIOS_EXITO",
    payload: data,
  }
}

export const fetchUsuariosError = (error) => {
  return {
    type: "FETCH_USUARIOS_ERROR",
    payload: error,
  }
}

const reducer = (store = intialStore, action) => {
  switch (action.type) {
    case 'FETCH_USUARIOS_PENDIENTES': 
      return {
        ...store,
        isFetching: true,
      }
    case 'FETCH_USUARIOS_EXITO': 
      return {
        ...store,
        isFetching: false,
        usuarios: action.payload,
      }
    case 'FETCH_USUARIOS_ERROR': 
      return {
        ...store,
        isFetching: false,
        error: action.payload,
      }
    default:
      return store;
  }
}

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))