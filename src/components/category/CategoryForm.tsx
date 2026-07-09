import { useEffect, useState } from "react";
import { Plus, Save, X } from "lucide-react";


interface Props {

  onSubmit: (data:{name:string}) => void;
  editingCategory:any;
  cancelEdit:()=>void;

}



export default function CategoryForm({

  onSubmit,
  editingCategory,
  cancelEdit

}:Props){


const [name,setName] = useState("");



useEffect(()=>{

  if(editingCategory){
    setName(editingCategory.name);
  }
  else{
    setName("");
  }

},[editingCategory]);




const handleSubmit=(e:React.FormEvent)=>{

e.preventDefault();


if(!name.trim()) return;


onSubmit({
  name
});


setName("");

};



return (

<form

onSubmit={handleSubmit}

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
text-slate-800
mb-4
">

{
editingCategory
?
"Edit Category"
:
"Add Category"
}

</h2>



<div className="
flex
gap-4
"


>


<input

type="text"

placeholder="Category name"

value={name}

onChange={(e)=>setName(e.target.value)}

className="
flex-1
border
border-slate-300
rounded-lg
px-4
py-2
focus:outline-none
focus:ring-2
focus:ring-blue-500
"

/>



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
editingCategory
?
<Save size={18}/>
:
<Plus size={18}/>
}


{
editingCategory
?
"Update"
:
"Add"
}


</button>



{
editingCategory &&

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
hover:bg-slate-300
"

>

<X size={18}/>

Cancel

</button>

}


</div>



</form>

);


}