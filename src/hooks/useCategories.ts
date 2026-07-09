import { useEffect, useState } from "react";
import { categoryService } from "../services/categoryService";


export default function useCategories() {

  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);


  const fetchCategories = async () => {

    try {

      const data = await categoryService.getAll();

      setCategories(data);

    } catch(error){

      console.log(error);

    } finally {

      setLoading(false);

    }

  };


  useEffect(()=>{

    fetchCategories();

  },[]);



  const addCategory = async(data:{name:string})=>{

    await categoryService.create(data);

    fetchCategories();

  };



  const editCategory = async(
    id:number,
    data:{name:string}
  )=>{

    await categoryService.update(id,data);

    fetchCategories();

  };



  const removeCategory = async(id:number)=>{

    await categoryService.remove(id);

    fetchCategories();

  };


  return {
    categories,
    loading,
    addCategory,
    editCategory,
    removeCategory
  };

}