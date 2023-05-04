interface TodoType{
    id: string | number;
    task:string;
    isDone: boolean; 
  }

  interface ITodoList {
    todos:TodoType[]
  }
  
  type AddF= (text:string)=> void;