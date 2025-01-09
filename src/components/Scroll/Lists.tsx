import { List } from '@mui/material';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useRef } from 'react';
import SearchPostArticle from './SearchPostArticle';
import getSeverIp from 'utils/getSeverIp';

// Create a client
const queryClient = new QueryClient()

function Lists() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  )
}

function Todos() {
   // const serverIp = process.env.REACT_APP_Server_IP;
   const serverIp = getSeverIp();
  // Access the client
  const queryClient = useQueryClient()

  // 데이터 조회 함수
  const fetchData = async () => {
    try {
      const response = await fetch(serverIp + '/projectList'); // 실제 API URL로 변경
      return await response.json()
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Queries
  const query = useQuery({ queryKey: ['todos'], queryFn: fetchData })

  const ref = useRef(null);



  return (
    <div>
      <SearchPostArticle searchWord='ttt'/>
      {/* {query.isLoading}
      <ul>{query.data?.map((todo:any) => <li key={todo.id}>{todo.title}</li>)}</ul>      */}
    </div>
  )
}

export default Lists;