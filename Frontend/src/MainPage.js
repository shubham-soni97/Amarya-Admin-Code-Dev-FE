import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";

import WorkSheet from "./Pages/WorksheetPage";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import AdminWorkSheet from "./AdminPages/AdminWorkSheet";
import DashboardPage from "./Pages/DashboardPage";
import AssetsPage from "./Pages/AssetsPage";
import LeaveManagementPage from "./Pages/LeaveMangementPage";
import PoliciesPage from "./Pages/PoliciesPage";
import SettingsPage from "./Pages/SettingsPage";
import TrainingsPage from "./Pages/TrainingsPage";
import AnnouncementPage from "./Pages/AnnouncementsPage";
import ActivitiesPage from "./Pages/ActivitiesPage";
import UserProfilePage from "./Pages/UserProfilePage";
import AdminDashboard from "./AdminPages/AdminDashboard";
import AdminAnnouncement from "./Pages/AdminAnnouncement";
import LoginPage from "./Pages/LoginPage";
import AssetsAdminPage from "./Pages/AssetsAdminPage";
import WorksheetPage from "./Pages/WorksheetPage";
import TrainingsPageAdmin from "./Pages/TrainingsPageAdmin";
import ActivityPage from "./Pages/ActivityPage";
import { useAuth } from "./Components/AuthContext";
import PrivateRoute from "./Pages/PrivateComponent";

const drawerWidth = 240;

const MainPage = (props) => {
  const [mobileOpen, setMobileOpen] = React.useState(true);
  const { user } = useAuth(); // Using useAuth hook to access user data
  const role = user?.role;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  if (!user) {
    return <LoginPage />;
  }

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "white",
          color: "#121843",
          boxShadow: "none",
          paddingRight: "0 !important",
        }}
      >
        <NavBar handleDrawerToggle={handleDrawerToggle} />
      </AppBar>
      <SideBar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          paddingTop: "8vh",
          scrollMarginRight: "",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <PrivateRoute
                element={role === "user" ? DashboardPage : AdminDashboard}
              />
            }
          />
          <Route
            path="/assets"
            element={
              <PrivateRoute
                element={role === "user" ? AssetsPage : AssetsAdminPage}
              />
            }
          />
          <Route
            path="/leaves"
            element={<PrivateRoute element={LeaveManagementPage} />}
          />
          <Route
            path="/trainings"
            element={
              <PrivateRoute
                element={role === "user" ? TrainingsPage : TrainingsPageAdmin}
              />
            }
          />
          <Route
            path="/policies"
            element={<PrivateRoute element={PoliciesPage} />}
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute element={role === "admin" ? SettingsPage : null} />
            }
          />
          <Route
            path="/profile"
            element={<PrivateRoute element={UserProfilePage} />}
          />
          <Route
            path="/announcements"
            element={
              <PrivateRoute
                element={
                  role === "admin" ? AdminAnnouncement : AnnouncementPage
                }
              />
            }
          />
          <Route
            path="/activities"
            element={<PrivateRoute element={ActivitiesPage} />}
          />
          <Route
            path="/worksheet"
            element={
              <PrivateRoute
                element={role === "user" ? WorksheetPage : AdminWorkSheet}
              />
            }
          />
          <Route
            path="/activities/:activityId"
            element={<PrivateRoute element={ActivityPage} />}
          />
        </Routes>
      </Box>
    </Box>
  );
};

export default MainPage;
