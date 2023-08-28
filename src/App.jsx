import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import AuthLayout from './ui/AuthLayout';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
