import {v4 as uuid} from "uuid";

let initialState = {
  notebooks: [
    {title:"HTML", date: "2022-01-28", description: "Introduction to HTML for Beginners" , id: uuid(),},
    {title:"CSS", date: "2022-03-7", description: "intermediate CSS for inline styling in React", id: uuid(),},
    {title:"JAVASCRIPT", date: "2022-06-10", description: "All you need to know about JavaScript in coding", id: uuid(),},
  ],
};



let notebooksReducer =(state=initialState, action)=>{
	switch (action.type) {
    case "ADD_NOTEBOOK":
      return {...state, notebooks: [...state.notebooks, action.payload] };

    case "EDIT_NOTEBOOK":
      const editedInfo = state.notebooks.map ((notebook)=>{
        if (notebook.id===action.payload.updatedNotebook.id){
          return action.payload.updatedNotebook;
        }
        else{return notebook}
      })

      return {...state, notebooks:editedInfo}

    case "DELETE_NOTEBOOK":
      const unDeletedNotebooks = state.notebooks.filter ((notebook)=>notebook.id!==action.payload)
      return {...state, notebooks:unDeletedNotebooks}  

      default:
        return state;
      }     
};



export default notebooksReducer;