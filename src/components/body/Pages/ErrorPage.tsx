import React from 'react'

const ErrorPage = ({errors}:{errors:string;}) => {
  return (
    <div className="w-100">
      <h3 className='text-center my-5 n-blue'>{(errors)?errors:'Something Went Wrong...!'}</h3>
    </div>
  )
}

export default ErrorPage