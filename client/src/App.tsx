import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import AppRouter from "./router/AppRouter";

const client = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={client}>
    <AppRouter/>
    </QueryClientProvider>
  );
}

export default App;
