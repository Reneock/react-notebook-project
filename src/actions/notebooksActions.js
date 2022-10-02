export const addNotebook =(newNotebook)=>{
  return{
    type:"ADD_NOTEBOOK",
    payload:newNotebook
  }
}

export const editNotebook = (updatedNotebook) =>{
  return{
    type:"EDIT_NOTEBOOK",
    payload:{updatedNotebook}
  }
}

export const deleteNotebook = (id) =>{
  return{
    type:"DELETE_NOTEBOOK",
    payload:id
  }
}