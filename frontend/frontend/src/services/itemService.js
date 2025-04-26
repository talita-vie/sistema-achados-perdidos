import api from "./axiosInstance";

export const buscarItem = async () =>{
  try{
    const response = await api.get('api/listarTodos')
    return response.data;
  } catch(error) {
    console.error("Erro ao buscar intens")
    throw error;
  }
}

export const criarItem = async (dados) => {
  const token = localStorage.getItem("token")

  if (!token) {
    console.error("Token não encontrado");
    return;
  }

  try {
    const response = await api.post(
      "/items", 
      dados,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}` 
        }
      }    
    );
    return response.data;
  }catch (error){
    console.error("Error ao criar item")
    throw error
  }
}

export const atualizarItem = async (dados, id) => {
  try {
    const response = await api.put(`/atualizarItem/${id}`, dados)
    return response.data;
  }catch (error){
    console.error("Error ao criar item")
    throw error
  }
}

export const deletarItem = async (id) => {
  try {
    const response = await api.delete(`/deletarItem/${id}`)
    return response.data;
  }catch (error){
    console.error("Error ao deletar item")
    throw error
  }
}

