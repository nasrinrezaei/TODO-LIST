import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { TodoList } from "@/features/todo-list";

function App() {
  return (
    <div>
      <Suspense fallback={<div className="app-suspense">loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export const publicRoutes = () => [
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <TodoList /> }],
  },
];
