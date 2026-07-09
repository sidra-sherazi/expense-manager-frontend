import api from "./axios";

export interface ExpenseFilters {
  page?: number;
  limit?: number;
  search?: string;
  category_id?: number;
  min_amount?: number;
  max_amount?: number;
  start_date?: string;
  end_date?: string;
  sort_by?: string;
  order?: string;
}

export const getExpenses = async (
  filters: ExpenseFilters = {}
) => {
  const response = await api.get(
    "/expenses",
    {
      params: filters,
    }
  );

  return response.data;
};

export const createExpense = async (
  data: any
) => {
  const response = await api.post(
    "/expenses",
    data
  );

  return response.data;
};

export const updateExpense = async (
  id: number,
  data: any
) => {
  const response = await api.put(
    `/expenses/${id}`,
    data
  );

  return response.data;
};

export const deleteExpense = async (
  id: number
) => {
  const response = await api.delete(
    `/expenses/${id}`
  );

  return response.data;
};

export const getExpense = async (
  id: number
) => {
  const response = await api.get(
    `/expenses/${id}`
  );

  return response.data;
};