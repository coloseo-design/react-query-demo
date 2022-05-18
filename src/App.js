
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter, Routes,Route } from "react-router-dom";

import Home from './pages/home';
import User from './pages/user';

const client = new QueryClient();

function App({ children }) {
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <ReactQueryDevtools initialIsOpen={false} />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users" element={<User />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
