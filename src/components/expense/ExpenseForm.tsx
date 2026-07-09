import { useEffect, useState } from "react";
import { Plus, Save, X } from "lucide-react";


interface Props {

  onSubmit:(data:any)=>void;

  editingExpense:any;

  cancelEdit:()=>void;

  categories:any[];

}



export default function ExpenseForm({

onSubmit,
editingExpense,
cancelEdit,
categories

}:Props){



const [form,setForm]=useState({

title:"",
amount:"",
description:"",
category_id:""

});



useEffect(()=>{


if(editingExpense){

setForm({

title:editingExpense.title,

amount:String(editingExpense.amount),

description:editingExpense.description || "",

category_id:String(editingExpense.category_id)

});


}

else{


setForm({

title:"",
amount:"",
description:"",
category_id:""

});


}


},[editingExpense]);





const handleChange=(e:any)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};




const handleSubmit=(e:any)=>{


e.preventDefault();



onSubmit({

...form,

amount:Number(form.amount),

category_id:Number(form.category_id)

});



};



return (


<div

className="
bg-white
rounded-2xl
shadow-sm
p-6
mb-6
"

>


<h2 className="
text-xl
font-semibold
mb-5
text-slate-800
">

{
editingExpense
?
"Edit Expense"
:
"Add Expense"
}

</h2>




<form

onSubmit={handleSubmit}

className="
grid
grid-cols-1
md:grid-cols-2
gap-4
"

>



<input

name="title"

placeholder="Expense title"

value={form.title}

onChange={handleChange}

className="
border
rounded-lg
px-4
py-2
focus:ring-2
focus:ring-blue-500
"

/>




<input

name="amount"

type="number"

placeholder="Amount"

value={form.amount}

onChange={handleChange}

className="
border
rounded-lg
px-4
py-2
focus:ring-2
focus:ring-blue-500
"

/>





<input

name="description"

placeholder="Description"

value={form.description}

onChange={handleChange}

className="
border
rounded-lg
px-4
py-2
"

 />





<select

name="category_id"

value={form.category_id}

onChange={handleChange}

className="
border
rounded-lg
px-4
py-2
focus:ring-2
focus:ring-blue-500
"

>

<option value="">

Select Category

</option>



{
categories.map((cat)=>(

<option

key={cat.id}

value={cat.id}

>

{cat.name}

</option>

))

}


</select>




<div className="flex gap-3">


<button

className="
bg-blue-600
text-white
px-5
py-2
rounded-lg
flex
items-center
gap-2
hover:bg-blue-700
"

>


{
editingExpense
?
<Save size={18}/>
:
<Plus size={18}/>
}


{
editingExpense
?
"Update"
:
"Add"
}


</button>




{
editingExpense &&

<button

type="button"

onClick={cancelEdit}

className="
bg-slate-200
px-5
py-2
rounded-lg
flex
items-center
gap-2
"

>

<X size={18}/>

Cancel

</button>

}


</div>



</form>


</div>


);


}