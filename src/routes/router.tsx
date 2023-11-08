import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { CreateClassroomPage } from "../pages/CreateClassroomPage";
import { Layout } from "../components/Layout";
import { ClassroomPage } from "../pages/ClassroomPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<CreateClassroomPage />} />
      <Route path="classroom" element={<ClassroomPage />} />
    </Route>
  )
);