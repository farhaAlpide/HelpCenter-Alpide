import axios from 'axios';
import { useQuery } from 'react-query';
export const fetchmodulesList = async (payload)=> {
  try {
    const response = await axios.get(`https://service.alpidedev.com/alpide-cms/api/v1/module/getAllModuleWithSubModules`);
    console.log("arnab aiiir", response.data)
    return response.data?.data;
  } catch (error) {
    throw error;
  }
};
const useModuleList= () => {
  return useQuery([], () => fetchmodulesList());
};

export default useModuleList;