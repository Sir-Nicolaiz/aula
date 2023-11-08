import { useForm } from 'react-hook-form';
import { saveClassroom } from '../../services/service';

export type FormValuesType = {
  name: string;
  description: string;
  capacity: number;
  active: boolean;
};

export const Form = () => {
  const { register, handleSubmit } = useForm<FormValuesType>();

  return (
    <form
      onSubmit={handleSubmit((data) => saveClassroom(data))}
      className='shadow-black shadow-lg w-full bg-gray-100 flex flex-col justify-center items-start select-none'
    >
      <h1 className='w-full p-3 text-xl bg-teal-700 text-white'>Agregar aula</h1>
      <div className='px-5 py-2 w-full flex flex-col gap-5'>
        <fieldset className='flex flex-col gap-1'>
          <label htmlFor='' className='text-sm font-medium'>
            Nombre Aula
          </label>
          <input
            autoComplete='off'
            {...register('name')}
            type='text'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-50 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </fieldset>
        <fieldset className='flex flex-col gap-1'>
          <label htmlFor='' className='text-sm font-medium'>
            Descripci&oacute;n
          </label>
          <input
            autoComplete='off'
            {...register('description')}
            type='text'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-50 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </fieldset>
        <fieldset className='flex flex-col gap-1'>
          <label htmlFor='' className='text-sm font-medium'>
            Capacidad
          </label>
          <input
            autoComplete='off'
            {...register('capacity', { valueAsNumber: true })}
            type='number'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-50 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </fieldset>

        <fieldset className='flex gap-1'>
          <input type='checkbox' {...register('active')} />
          <label htmlFor='' className='text-sm font-medium'>
            habilitado
          </label>
        </fieldset>
      </div>

      <button
        type='submit'
        className='bg-teal-700 hover:bg-teal-600 w-32 self-center py-2 mb-5 text-white text-sm'
      >
        A&ntilde;adir
      </button>
    </form>
  );
};
