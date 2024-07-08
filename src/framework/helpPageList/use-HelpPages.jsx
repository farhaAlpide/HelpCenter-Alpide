


import axios from 'axios';
import { useQuery } from 'react-query';
export const fetchmodulesById = async (payload)=> {
  try {
    const response = await axios.get(`https://service.alpidedev.com/alpide-cms/api/v1/module/getByModuleId?moduleId=${'668b7a48e8e40a51dc7f8eb0'}`);
    console.log("arnab aiiir", response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};
const useModuleId= () => {
  return useQuery(['moduleId','668b7a48e8e40a51dc7f8eb0'], () => fetchmodulesById());
};

export default useModuleId;