import { useQuery } from '@tanstack/react-query';
import { fetchAllClassrooms } from '../services/service';

export const ClassroomPage = () => {
  const { data: classrooms, status } = useQuery({
    queryKey: ['classrooms'],
    queryFn: fetchAllClassrooms,
  });

  if (status === 'pending') return <p>Cargando...</p>;
  if (status === 'error') return <p>Error</p>;

  return (
    <div className='flex flex-col items-center gap-2'>
      <h1 className=' text-xl text-center select-none'>Reserva de aulas</h1>
      <table className='w-fit text-xs even:bg-slate-400'>
        <thead className='bg-teal-700 text-white'>
          <tr>
            <th className='py-2 px-3'>Nombre</th>
            <th className='py-2 px-3'>Descripcion</th>
            <th className='py-2 px-3'>Capacidad</th>
            <th className='py-2 px-3'>Activo</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {classrooms.map((classroom, index) => (
            <tr key={index} className='bg-stone-50 [&:nth-child(even)]:bg-stone-300'>
              <td>{classroom.name}</td>
              <td>{classroom.description}</td>
              <td>{classroom.capacity}</td>
              <td>{classroom.active ? 'Si' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
