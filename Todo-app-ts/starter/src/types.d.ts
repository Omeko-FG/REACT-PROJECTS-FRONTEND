interface TodoType{
    id: string | number;
    task:string;
    isDone: boolean; 
  }

  interface ITodoList {
    todos:TodoType[]
    toggleTodo:ToggleF;
    deleteTodo: DeleteF;
  }
  
  type AddF= (text:string)=> void;

  type ToggleF = (item:TodoType)=> void;

  type DeleteF= (id:string | number)=> void;

  