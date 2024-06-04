import { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'

import { deleteUser } from './actions'

export default function DeleteAccountSection() {
  const [open, setOpen] = useState(false)

  const [isAllowedToDelete, setIsAllowedToDelete] = useState(false)
  const [confirmation, setConfirmation] = useState('')
  const [state, deleteUserAction, isPending] = useFormState(deleteUser, null)

  useEffect(() => {
    if (isPending === false && open === true) {
      setOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPending])

  return (
    <div className='hover:shodow-lg flex flex-col rounded-2xl bg-white p-8 shadow-md'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-16 w-16 rounded-2xl border border-blue-100 bg-blue-50 p-3 text-blue-400'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
          </svg>
          <div className='ml-3 flex flex-col'>
            <div className='font-medium leading-none'>
              Delete Your Account ?
            </div>
            <p className='mt-1 text-sm leading-none text-gray-600'>
              By deleting your account you will lose your all data
            </p>
          </div>
        </div>
        <button
          className='flex-no-shrink ml-4 rounded-full border-2 border-red-500 bg-red-500 px-5 py-2 text-sm font-medium tracking-wider text-white shadow-sm hover:shadow-lg'
          onClick={() => setOpen(true)}>
          Delete
        </button>
      </div>

      {/* Delete Account Dialog */}
      {open && (
        <div
          className='relative z-10'
          aria-labelledby='modal-title'
          role='dialog'
          aria-modal={false}>
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

          <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start'>
                    <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
                      <svg
                        className='h-6 w-6 text-red-600'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        aria-hidden='true'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                        />
                      </svg>
                    </div>
                    <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                      <h3
                        className='text-base font-semibold leading-6 text-gray-900'
                        id='modal-title'>
                        Delete account
                      </h3>
                      <div className='mt-2'>
                        <p className='text-sm text-gray-500'>
                          Permanently remove your Personal Account and all of
                          its contents from the platform. This action is not
                          reversible, so please continue with caution.
                        </p>
                      </div>
                      <div className='pt-4'>
                        <label
                          htmlFor='confirmDelete'
                          className='block text-sm font-medium'>
                          Type{' '}
                          <span className='rounded-md border bg-zinc-50 p-0.5 italic '>
                            delete
                          </span>{' '}
                          to confirm.
                        </label>
                        <input
                          type='text'
                          id='confirmDelete'
                          name='confirmDelete'
                          placeholder='We are sad to see you go!'
                          value={confirmation}
                          onChange={e => {
                            setConfirmation(e.target.value)
                            if (e.target.value === 'delete') {
                              setIsAllowedToDelete(true)
                            } else {
                              setIsAllowedToDelete(false)
                            }
                          }}
                          className='mt-1 w-full rounded-md border p-2 transition-colors duration-300 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                  <form action={deleteUserAction}>
                    <button
                      type='button'
                      disabled={!isAllowedToDelete}
                      className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 disabled:cursor-not-allowed disabled:bg-opacity-50 sm:ml-3 sm:w-auto'>
                      {isPending ? 'Deleting...' : 'Delete Account'}
                    </button>
                  </form>
                  <button
                    type='button'
                    onClick={() => setOpen(false)}
                    className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
