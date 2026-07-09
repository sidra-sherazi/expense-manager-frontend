import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../api/categories";


export const categoryService = {

  getAll(){
    return getCategories();
  },


  create(data:{
    name:string;
  }){
    return createCategory(data);
  },


  update(
    id:number,
    data:{
      name:string;
    }
  ){
    return updateCategory(id,data);
  },


  remove(id:number){
    return deleteCategory(id);
  }

};