import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from './styles/GlobalStyles';
import SpinnerFullPage from './ui/SpinnerFullPage';
import ProtectedRoute from './ui/ProtectedRoute';

const AppLayout = lazy(() => import('./ui/AppLayout'));
const AuthLayout = lazy(() => import('./ui/AuthLayout'));
const Explore = lazy(() => import('./pages/Explore'));
const Offers = lazy(() => import('./pages/Offers'));
const Profile = lazy(() => import('./pages/Profile'));
const Category = lazy(() => import('./pages/Category'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <GlobalStyles />
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/explore" replace />} />
              <Route path="explore" element={<Explore />} />
              <Route path="offers" element={<Offers />} />
              <Route path="profile" element={<Profile />} />
              <Route path="categories/:type" element={<Category />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>

      <ToastContainer position="top-center" />
    </QueryClientProvider>
  );
}

export default App;
