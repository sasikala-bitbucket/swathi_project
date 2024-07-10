import { useMemo } from "react";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { themeSettings } from "./theme";
import Layout from "./scenes/Layout";
import Dashboard from "./scenes/Dashboard";
import Products from "./scenes/Products";
import Customers from "./scenes/Customers";
import Transactions from "./scenes/Transactions";
import Geography from "./scenes/Geography";
import Overview from "./scenes/Overview";
import Daily from "./scenes/Daily";
import Monthly from "./scenes/Monthly";
import Breakdown from "./scenes/Breakdown";
import Admin from "./scenes/Admin";
import Performance from "./scenes/Performance";
import ZohoAppRoleDetails from "./scenes/ZohoAppRoleDetails";
import Employees from "./scenes/EmpDetails";
import MetaAppRoleDetails from "./scenes/MetaAppRoleDetails";
import ZomatoAppRoleDetails from "./scenes/ZomatoAppRoleDetails";
import SwiggyAppRoleDetails from "./scenes/SwiggyAppRoleDetails";
import EntitlementData from "./scenes/EntitlementData";
import LifeCycleManagement from "./scenes/LifecycleManagement";
import AccessReview from "./scenes/AccessReview";
import AccessCertification from "./scenes/AccessCertification";
import UserProvisioning from "./scenes/UserProvisioningData";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/zohobigin" element={<ZohoAppRoleDetails/>} />
      <Route path="/swiggy" element={<SwiggyAppRoleDetails/>} />
      <Route path="/sharepoint" element={<ZomatoAppRoleDetails/>} />
      <Route path="/meta" element={<MetaAppRoleDetails/>} />
      <Route path="/empdetails" element={<Employees/>} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/geography" element={<Geography />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/daily" element={<Daily />} />
      <Route path="/monthly" element={<Monthly />} />
      <Route path="/breakdown" element={<Breakdown />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/performance" element={<Performance />} />
      <Route path="/userprovisioning" element={<UserProvisioning />} />
      <Route path="/lifecyclemanagement" element={<LifeCycleManagement />} />
      <Route path="/entitlementmanagement" element={<EntitlementData />} />
      <Route path="/accessreview" element={<AccessReview />} />
      <Route path="/accesscertification" element={<AccessCertification />} />
    </Route>
  )
);

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
