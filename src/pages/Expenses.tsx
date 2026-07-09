import { useState } from "react";

import ExpenseForm from "../components/expense/ExpenseForm";
import ExpenseTable from "../components/expense/ExpenseTable";
import ExpenseFilters from "../components/expense/ExpenseFilters";

import useExpenses from "../hooks/useExpenses";
import useCategories from "../hooks/useCategories";


export default function Expenses(){


const {

expenses,
loading,
addExpense,
editExpense,
removeExpense,
fetchExpenses


}=useExpenses();



const {

categories

}=useCategories();




const [editingExpense,setEditingExpense]=useState<any>(null);





const handleSubmit=async(data:any)=>{


if(editingExpense){


await editExpense(

editingExpense.id,

data

);


setEditingExpense(null);


}

else{


await addExpense(data);


}


};






if(loading){


return (

<h2 className="
text-slate-600
text-xl
">

Loading...

</h2>

);


}





return (

<div>



<h1

className="
text-3xl
font-bold
mb-6
text-slate-800
"

>

Expenses

</h1>

<ExpenseFilters

onFilter={fetchExpenses}

/>




<ExpenseForm


onSubmit={handleSubmit}


editingExpense={editingExpense}


cancelEdit={()=>setEditingExpense(null)}


categories={categories}


/>







<ExpenseTable


expenses={expenses}


onEdit={setEditingExpense}


onDelete={removeExpense}


/>





</div>

);


}