import { recipeModel } from '@/models/recipe-model';
import { userModel } from '@/models/user-model';
import { removeIdFromObj, removeMongoId } from '@/utils/util';

const getAllData = async () => {
  const data = await recipeModel.find().lean();
  return removeMongoId(data);
};

const getItemById = async (cardId) => {
  const singleItem = await recipeModel.findById(cardId).lean();

  return removeIdFromObj(singleItem);
};

const createUser = async (user) => {
  await userModel.create(user);
};

const findUserByCredentials = async (credentials) => {
  const found = await userModel.findOne(credentials).lean();

  if (found) {
    return removeIdFromObj(found);
  }
  return null;
};

export { createUser, findUserByCredentials, getAllData, getItemById };
