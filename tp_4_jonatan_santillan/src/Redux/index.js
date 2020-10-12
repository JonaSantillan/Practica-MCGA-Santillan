import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const intialStore = {
  contadores: [
    {
      fecha: new Date().toLocaleString(),
      fechaactual: new Date().toLocaleString(),
      valor: 0,
    }
  ],
}

export const agregar_cont = () => {
  return {
    type: 'AGREGAR_CONTADOR',
  }
}

export const sumar = (index) => {
  return {
    type: 'SUMAR',
    index: index,
  }
}

export const restar = (index) => {
  return {
    type: 'RESTAR',
    index: index,
  }
}

export const eliminar = (index) => {
  return {
    type: 'ELIMINAR_CONTADOR',
    index: index,
  }
}

const reducer = (store = intialStore, action) => {
  switch (action.type) {
    case 'AGREGAR_CONTADOR': {
      const newContador = [ ...store.contadores ]
      newContador.push({
        fecha: new Date().toLocaleString(),
        fechaactual: new Date().toLocaleString(),
        valor: 0,
      })
      return {
        contadores: newContador
      };
    }
    case 'SUMAR': {
      const newContador = store.contadores.map((contador, index) => {
        if(action.index === index) {
          return {
            fecha: contador.fecha,
            fechaactual: new Date().toLocaleString(),
            valor: contador.valor + 1
          }
        }
        return contador
      })
      return {
        contadores: newContador,
      }
    }
    case 'RESTAR': {
      const newContador = store.contadores.map((contador, index) => {
        if(action.index === index) {
          return {
            fecha: contador.fecha,
            fechaactual: new Date().toLocaleString(),
            valor: contador.valor - 1
          }
        }
        return contador
      })
      return {
        contadores: newContador,
      }
    }
    case 'ELIMINAR_CONTADOR': {
      const newContador = store.contadores.filter((item, index) => {
        if(action.index !== index) {
          return true
        }
      })
      return {
        contadores: newContador
      }
    }
    default:
      return store;
  }
}

export const store = createStore(reducer, composeWithDevTools())