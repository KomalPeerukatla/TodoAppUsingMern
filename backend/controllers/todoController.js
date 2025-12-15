import Todo from "../models/todo.js";

export const addTodo=async(req,res)=>{
    try {
    const todo = await Todo.create({
      title: req.body.title,
      user: req.user
    });
    res.json({ success: true, todo });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

export const getAllTodos=async(req,res)=>{
    try{
        const todos=await Todo.find({user:req.user});
        res.json({success:true,todos});
    }catch(error){
        res.json({succes:false,message:error.message});
    }
}

export const updateTodo=async(req,res)=>{
    try{
        const todo=await Todo.findOneAndUpdate(
            {_id:req.params.id,user:req.user},
            {title:req.body.title},
            {new:true}
        );
        res.json({success:true,todo});
    }catch(error){
        res.json({success:false,message:error.message})
    }
}

export const toggleComplete=async(req,res)=>{
try{
    const todo=await Todo.findOne({_id:req.params.id,user:req.user});
    todo.completed=!todo.completed;
    await todo.save();
    res.json({success:true,todo});
}catch(error){
    res.json({success:false,message:error.message});
}
}

export const deleteTodo=async(req,res)=>{
    try{
        await Todo.findOneAndDelete({_id:req.params.id,user:req.user});
         res.json({ success: true });
    }catch(error){
         res.json({ success: false });
    }
}