import { useDispatch, useSelector } from "react-redux";
import './Components.css';
import {sweetalert2} from "sweetalert2"
import { RemoveTodo, getAllTodos, setCheck, setFvaourite } from "../rtk/slices/todo-slice";
import { useEffect } from "react";


function Todo({ name, done, id , favourite }){

    
    const dispatch = useDispatch()
    const handleCheck = () => {
        dispatch(setCheck(id));
      };
    const handleFavourite = () => {
    dispatch(setFvaourite(id));
    };

    return(
        <>
        <div className="row mx-auto mt-2" style={{maxWidth:"300px"}}> 
            <div className="mycard">
                <a className="card1" href="#">
                    <p className="small">{name}</p>
                    <div className="go-corner" href="#">
                    <div className="go-arrow">
                        →
                    </div>
                    </div>
                    <div className="flex items-center" style={{position:"absolute",right:"0"}}>
                        
                        <div className="heart-container me-2" title="Like">
                            <input type="checkbox" id={id} checked={done} onChange={handleCheck} className="checkbox"/>
                            <div className="svg-container">
                            <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                                </path>
                            </svg>
                            <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                                </path>
                            </svg>
                            <svg className="svg-celebrate" width={100} height={100} xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,10 20,20" />
                                <polygon points="10,50 20,50" />
                                <polygon points="20,80 30,70" />
                                <polygon points="90,10 80,20" />
                                <polygon points="90,50 80,50" />
                                <polygon points="80,80 70,70" />
                            </svg>
                            </div>
                        </div>

                            <span onClick={()=>{}} className="bg-yellow-200 text-yellow-900 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Edit</span>
                            <span onClick={(e)=>{e.preventDefault();dispatch(RemoveTodo(id))}} className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Delete</span>
                        
                            <label className="done-label me-2">
                                <input className="check-input" id={id} checked={favourite} onChange={handleFavourite} type="checkbox"/>
                                <span className="checkbox" ></span>
                        </label>
                    </div>
                </a>
                
            </div>          
        </div>
        </>
    )
}

export default Todo