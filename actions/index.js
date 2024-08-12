'use server';

import {
  createUser,
  findUserByCredentials,
  getItemById,
  updateFavorite,
} from '@/data/query';
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
  try {
    let user = {};
    user.email = formData.get('email');
    user.password = formData.get('password');

    const foundUser = await findUserByCredentials(user);
    return foundUser;
  } catch (error) {
    throw error;
  }
};

const addToFavoriteAction = async (itemId, auth) => {
  // await getItemById(itemId);
  // await findUserByCredentials({
  //   email: auth?.email,
  //   password: auth?.password,
  // });
  await updateFavorite(itemId, auth?.id);
};
export { addToFavoriteAction, loginAction, registerAction };
