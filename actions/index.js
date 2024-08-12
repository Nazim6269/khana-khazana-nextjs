'use server';

import { createUser, findUserByCredentials } from '@/data/query';
import { redirect } from 'next/navigation';

const registerAction = async (formData) => {
  const user = Object.fromEntries(formData);
  const found = await findUserByCredentials({
    email: user.email,
    password: user.password,
  });

  if (!found) {
    await createUser(user);
  }
  redirect('/login');
};

const loginAction = async (formData) => {
  let user = {};
  user.email = formData.get('email');
  user.password = formData.get('password');

  const foundUser = await findUserByCredentials(user);

  if (foundUser) {
    redirect('/');
  }
};
export { loginAction, registerAction };
