// import DashBoardSlice from "./components/DashBoardSlice";
import "./css/style.css";
// import Home from "./pages/Home";
// import { Toaster } from "react-hot-toast";
// import { QueryClientProvider } from "@tanstzack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import { useProviderApi } from "./services/hooks/useProviderApi";
import AppLayout from "./components/AppLayout";
// import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
// import Machines from "./pages/Resaurces";
// import Resaurces from "./pages/Materials";
import Factory from "./pages/Factory";
import Home from "./pages/Home";
import SecureRoute from "./components/SecureRoute";
import Line from "./pages/Line";
import Energy from "./pages/Energy";
import Materials from "./pages/Materials";
import Machines from "./pages/Machines";
// let queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 30 * 1000,
//     },
//   },
// });

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Home />} />
        <Route
          path="/"
          element={
            <SecureRoute>
              <AppLayout />
            </SecureRoute>
          }>
          {/* <Route path="/" element={<AppLayout />}> */}
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="factory/:id" element={<Factory />} />
          <Route path="factory/:id/:line" element={<Line />} />
          <Route path="resources">
            <Route index element={<Navigate to="materials" replace />} />
            <Route path="materials" element={<Materials />} />
            <Route path="energy" element={<Energy />} />
          </Route>
          <Route path="machines" element={<Machines />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
