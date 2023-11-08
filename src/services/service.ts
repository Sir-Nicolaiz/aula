import axios from "axios";
import { FormValuesType } from "../pages/components/Form";

type SaveClassroomResponseType = { some: string };

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
});

export const saveClassroom = async (payload: FormValuesType): Promise<SaveClassroomResponseType> => {
  const { data } = await axiosInstance.post<SaveClassroomResponseType>(
    "aula",
    payload
  );

  return data;
};

// csv = valores separado por comas, sirve para manejar gran cantidad de datos en formato tabla