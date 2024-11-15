import { Helmet } from "react-helmet";
import List from "../components/List";
import { Route, Routes } from "react-router-dom";

export function TodoList() {
  return (
    <>
      <Helmet>
        <title> TODO LIST </title>
      </Helmet>

      <div>
        <Routes>
          <Route path="/" element={<List />} />
        </Routes>
      </div>
    </>
  );
}
