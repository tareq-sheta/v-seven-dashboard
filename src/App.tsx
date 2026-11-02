import "./sass/style.scss";
import {
  createBrowserRouter,
  Navigate,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppLayout from "./components/AppLayout/AppLayout";

// Runs before AppLayout ever mounts
const authLoader = () => {
  try {
    const user = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (!user?.email) return redirect("/login");
    return user;
  } catch {
    return redirect("/login");
  }
};

const formatSlug = (slug = "") =>
  slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

const router = createBrowserRouter([
  {
    path: "/login",
    lazy: async () => ({
      Component: (await import("./pages/Login/Login")).default,
    }),
  },
  {
    path: "/",
    element: <AppLayout />,
    loader: authLoader,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      {
        path: "dashboard",
        lazy: async () => ({
          Component: (await import("./pages/Overview/Overview")).default,
        }),
        handle: { title: () => "Dashboard / Production", showTypeFilter: true },
      },
      {
        path: "factory/:id",
        lazy: async () => ({
          Component: (await import("./pages/Factory/Factory")).default,
        }),
        handle: {
          title: (params: Record<string, string>) => formatSlug(params.id),
        },
      },
      {
        path: "factory/:id/:line",
        lazy: async () => ({
          Component: (await import("./pages/Line/Line")).default,
        }),
        handle: {
          title: (params: Record<string, string>) =>
            `${formatSlug(params.id)} / ${formatSlug(params.line)}`,
        },
      },
      {
        path: "resources",
        children: [
          { index: true, element: <Navigate to="materials" replace /> },
          {
            path: "materials",
            lazy: async () => ({
              Component: (await import("./pages/Resources/Materials/Materials"))
                .default,
            }),
            handle: { title: () => "Resources / Materials" },
          },
          {
            path: "energy",
            lazy: async () => ({
              Component: (await import("./pages/Resources/Energy/Energy"))
                .default,
            }),
            handle: { title: () => "Resources / Energy" },
          },
        ],
      },
      {
        path: "machines",
        lazy: async () => ({
          Component: (await import("./pages/Machines/Machines")).default,
        }),
        handle: { title: () => "Dashboard / Machines" },
      },

      {
        path: "reports",
        lazy: async () => ({
          Component: (await import("./pages/Reports/Reports")).default,
        }),
        handle: { title: () => "Dashboard / Reports" },
      },
      {
        path: "settings",
        lazy: async () => ({
          Component: (await import("./pages/Settings/Settings")).default,
        }),
        handle: { title: () => "Dashboard / Settings" },
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: { fontSize: "18px", padding: "20px", maxWidth: "600px" },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}
