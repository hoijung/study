import { List } from '@mui/material';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import SearchPostArticle from './SearchPostArticle';

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
  return (
    <div>
      <SearchPostArticle searchWord='ttt'/>
    </div>
  )
}

export default Lists;