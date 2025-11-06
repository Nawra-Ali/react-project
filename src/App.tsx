import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {  useIsAuthenticated } from '@azure/msal-react';
import LoginPage from './Pages/LoginPage';
import OrdersSummaryPage from './Pages/OrdersSummaryPage';
import LineItemsPage from './Pages/LineItemsPage';
import UpdateShipmentPage from './Pages/UpdateShipmentPage';
import './App.css'
import ProtectedRoute from './helpers/ProtectedRoute';

function App() {
  const isAuthenticated = useIsAuthenticated();
  console.log(isAuthenticated);

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/orders" /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/orders"
          element={

            <ProtectedRoute>
            <OrdersSummaryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lineItems"
          element={
            <ProtectedRoute>
              <LineItemsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/updateShipment"
          element={
            <ProtectedRoute>
              <UpdateShipmentPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
