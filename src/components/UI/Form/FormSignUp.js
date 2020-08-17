import React from 'react';
import Input from './Input';

export default ({
  mode,
  username,
  pwd,
  confirmPwd,
  email,
  handler,
  submitHandler,
  wrongInfo,
  loading,
}) => {
  return (
    <form className='px-8 mt-8' onSubmit={submitHandler}>
      <Input
        target={username}
        handleKey='username'
        handler={handler}
        type='text'
        placeholder='Username...'
      />

      <Input
        target={pwd}
        handleKey='pwd'
        handler={handler}
        type='password'
        placeholder='Password...'
      />

      <Input
        target={confirmPwd}
        handleKey='confirmPwd'
        handler={handler}
        type='password'
        placeholder='Confirm password...'
      />

      <Input
        target={email}
        handleKey='email'
        handler={handler}
        type='email'
        placeholder='Email...'
      />

      {wrongInfo.status && !loading ? (
        <span className='block mt-1 text-xs text-left text-red-800'>
          {wrongInfo.description}
        </span>
      ) : null}

      <button
        type='submit'
        className='w-full py-3 mt-8 text-sm text-white bg-blue-600 rounded-md hover:opacity-75 transition-all duration-300'
        style={{
          background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
        }}
        disabled={
          username.error || pwd.error || confirmPwd.error || email.error
        }
      >
        Sign {mode ? 'In' : 'Up'}
      </button>
    </form>
  );
};
