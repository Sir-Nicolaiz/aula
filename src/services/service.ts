import axios from 'axios';
import { AulaResponseDTO, ClassroomRequestType } from '../types';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/',
});

export const saveClassroom = async (payload: ClassroomRequestType): Promise<boolean> => {
  const { data } = await axiosInstance.post<boolean>('/', payload);

  return data;
};

export const fetchAllClassrooms = async () => {
  const { data } = await axiosInstance.get<AulaResponseDTO[]>('/');

  return data;
};
