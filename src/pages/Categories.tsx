import { useState } from "react";

import useCategories from "../hooks/useCategories";

import CategoryForm from "../components/category/CategoryForm";

import CategoryTable from "../components/category/CategoryTable";


export default function Categories(){


const {

categories,
loading,
addCategory,
editCategory,
removeCategory

}=useCategories();



const [editingCategory,setEditingCategory]=useState<any>(null);




const handleSubmit=async(data:{name:string})=>{


if(editingCategory){

await editCategory(
editingCategory.id,
data
);

setEditingCategory(null);


}

else{

await addCategory(data);

}


};




if(loading){

return (

<h2>
Loading...
</h2>

);

}



return (

<div>


<h1 className="
text-3xl
font-bold
text-slate-800
mb-6
">

Categories

</h1>



<CategoryForm

onSubmit={handleSubmit}

editingCategory={editingCategory}

cancelEdit={()=>setEditingCategory(null)}

/>



<CategoryTable

categories={categories}

onEdit={setEditingCategory}

onDelete={removeCategory}

/>



</div>

);


}