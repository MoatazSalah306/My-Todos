import {createSlice} from "@reduxjs/toolkit"

export const TodoSlice = createSlice({
    initialState : [],
    name:"TodoSlice",
    reducers:{
        AddTodo:(state,action)=>{
            state.push(action.payload)
        },
        RemoveTodo:(state,action)=>{
            return state = state.filter((item)=>item.id!==action.payload)
        },
        ClearTodo:(state)=>{
                return state = []
        },
        setCheck:(state,action)=>{
            state.map((todo)=>{
                if(action.payload === todo.id){
                    todo.done ? (todo.done = false) : (todo.done = true)
                }
            })
        },
        setFvaourite:(state,action)=>{
            state.map((todo)=>{
                if(action.payload === todo.id){
                    todo.favourite ? (todo.favourite = false) : (todo.favourite = true)
                }
            })
        }
    }
})


export const {AddTodo , RemoveTodo , ClearTodo , setCheck , setFvaourite} = TodoSlice.actions;
export default TodoSlice.reducer;