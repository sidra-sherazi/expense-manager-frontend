import { useState } from "react";


interface Props {

onFilter:(filters:any)=>void;

}



export default function ExpenseFilters({

onFilter

}:Props){



const [filters,setFilters]=useState({

search:"",
start_date:"",
end_date:"",
sort_by:"created_at",
order:"desc"

});





const handleChange=(e:any)=>{


setFilters({

...filters,

[e.target.name]:e.target.value

});


};




const submitFilter=(e:any)=>{


e.preventDefault();


onFilter(filters);


};





const clearFilters=()=>{


const empty={

search:"",
start_date:"",
end_date:"",
sort_by:"created_at",
order:"desc"

};


setFilters(empty);


onFilter(empty);


};




return (

<form

onSubmit={submitFilter}

className="
bg-white
rounded-2xl
shadow-sm
p-5
mb-6
grid
grid-cols-1
md:grid-cols-3
gap-4
"


>



<input

name="search"

placeholder="Search title or description"

value={filters.search}

onChange={handleChange}

className="
border
rounded-lg
px-4
py-2
"

/>





<input

type="date"

name="start_date"

value={filters.start_date}

onChange={handleChange}

className="
border
rounded-lg
px-4
py-2
"

/>





<input

type="date"

name="end_date"

value={filters.end_date}

onChange={handleChange}

className="
border
rounded-lg
px-4
py-2
"

/>





<select

name="sort_by"

value={filters.sort_by}

onChange={handleChange}

className="
border
rounded-lg
px-4
py-2
"

>

<option value="created_at">

Date

</option>


<option value="amount">

Amount

</option>


<option value="title">

Title

</option>


</select>





<select

name="order"

value={filters.order}

onChange={handleChange}

className="
border
rounded-lg
px-4
py-2
"

>

<option value="desc">

Descending

</option>


<option value="asc">

Ascending

</option>


</select>





<div className="flex gap-3">


<button

className="
bg-blue-600
text-white
px-5
rounded-lg
"

>

Search

</button>




<button

type="button"

onClick={clearFilters}

className="
bg-slate-200
px-5
rounded-lg
"

>

Clear

</button>



</div>



</form>

);


}