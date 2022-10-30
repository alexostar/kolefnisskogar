import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_MYNOTES } from '@/lib/mynotes/Queries';
import {
  CREATE_MYNOTE,
  UPDATE_MYNOTE,
  DELETE_MYNOTE,
} from '@/lib/mynotes/Mutations';

export default function MynoteCrudForm({ mynote, user }) {
  console.log('User in MynoteCrudForm', user);
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      name: mynote ? mynote.name : '',
      details: mynote ? mynote.details : '',
    },
  });

  const { refetch } = useQuery(GET_ALL_MYNOTES, {
    variables: {
      author: user.databaseId,
    },
  });

  const [createMynote, { data: createData, error: createError }] =
    useMutation(CREATE_MYNOTE);
  const wasMynoteCreated = Boolean(
    createData?.createMynote?.mynote?.databaseId
  );

  const [updateMynote, { data: updateData, error: updateError }] =
    useMutation(UPDATE_MYNOTE);
  const wasMynoteUpdated = Boolean(
    updateData?.updateMynote?.mynote?.databaseId
  );

  const [deleteMynote, { data: deleteData }] = useMutation(DELETE_MYNOTE);
  const wasMynoteDeleted = Boolean(deleteData?.deleteMynote?.deletedId);

  function executeCreate(data) {
    console.log('Data:', data);
    createMynote({
      variables: {
        name: data.name,
        details: data.details,
      },
      onCompleted: refetch,
    });
    console.log('createError: ', createError);
  }
  console.log('createData: ', createData);
  console.log('wasMynoteCreated: ', wasMynoteCreated);
  if (wasMynoteCreated) {
    return (
      <div>
        <p className='py-12'>
          Takk fyrir að þú hafðir samband! Ég mun svara fljótlega.
        </p>
      </div>
    );
  }

  function executeUpdate(data) {
    console.log(data);
    updateMynote({
      variables: {
        name: data.name,
        details: data.details,

        id: mynote.id,
      },
      onCompleted: refetch,
    });
  }
  if (wasMynoteUpdated) {
    return (
      <div>
        <p>Note successfully updated!</p>
        <Link href={`/mynotes/`}>
          <a className='text-indigo-600'>Back to my notes</a>
        </Link>
      </div>
    );
  }

  const executeDelete = () => {
    console.log('Mynote to delete', mynote);
    deleteMynote({
      variables: {
        id: mynote.id,
      },

      onCompleted: refetch,
    });
  };
  if (wasMynoteDeleted) {
    return (
      <div>
        <p>Note successfully deleted!</p>
        <Link href={`/mynotes/`}>
          <a className='text-indigo-600'>Back to my notes</a>
        </Link>
      </div>
    );
  }

  if (createError) {
    return (
      <div>
        <p>{createError.message}</p>
        <Link href={`/mynotes`}>
          <a className='text-indigo-600'>Back to my notes</a>
        </Link>
      </div>
    );
  }

  if (updateError) {
    return (
      <div>
        <p>{updateError.message}</p>
        <Link href={`/mynotes`}>
          <a className='text-indigo-600'>Back to my notes</a>
        </Link>
      </div>
    );
  }

  console.log('createData: ', createData);

  return (
    <div className='flex flex-col justify-start items-center mt-6 mb-6'>
      <div className='bg-white shadow-md border border-gray-200 rounded-lg w-96 p-4 sm:p-6 lg:p-8 sm:my-6'>
        <h1 className='text-xl mb-6'>HAFÐU SAMBAND</h1>
        <form
          className='space-y-6'
          onSubmit={handleSubmit(mynote ? executeUpdate : executeCreate)}>
          <div className='mb-4'>
            <label
              className='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'
              htmlFor='name'>
              Fyrirsögn
            </label>
            <textarea
              className='mb-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5'
              id='name'
              type='text'
              {...register('name', { required: true })}
            />
          </div>

          <div className='mb-4'>
            <label
              className='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'
              htmlFor='details'>
              Skilaboð
            </label>
            <textarea
              className='mb-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5'
              id='details'
              rows='10'
              {...register('details', { required: true })}
            />
          </div>

          <div>
            {mynote && (
              <div className='flex w-full justify-evenly'>
                <button
                  className='mt-2 text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center'
                  type='submit'>
                  Senda
                </button>
                <Link href='/mynotes'>
                  <a className='mt-2 text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center'>
                    Hætta við
                  </a>
                </Link>
                <button
                  className='mt-2 text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center'
                  type='button'
                  onClick={executeDelete}>
                  Eyða
                </button>
              </div>
            )}
            {!mynote && (
              <div className='flex w-full justify-evenly'>
                <button
                  className='mt-2 text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center'
                  type='submit'>
                  Senda
                </button>
                <Link href='/'>
                  <a className='mt-2 text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center'>
                    Hætta við
                  </a>
                </Link>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
