export const reducer = (state={}, action) => {
 switch (action.type) {
     case 'agregar':
        return [...state, action.payload]
    case 'borrar':
        return state.filter(tarea => tarea.id !== action.payload)
    case 'finalizado':
        return state.map(tarea => tarea.id === action.payload ? {...tarea,finalizado: !tarea.finalizado}: tarea)
     default:
        return state;
 }

    
} 