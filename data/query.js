import { recipeModel } from '@/models/recipe-model';
import { userModel } from '@/models/user-model';
import { removeIdFromObj, removeMongoId } from '@/utils/util';
import mongoose from 'mongoose';

const getAllData = async () => {
  const data = await recipeModel?.find().lean();
  return removeMongoId(data);
};

const getItemById = async (cardId) => {
  const singleItem = await recipeModel?.findById(cardId).lean();

  return removeIdFromObj(singleItem);
};

const createUser = async (user) => {
  await userModel.create(user);
};

const findUserByCredentials = async (credentials) => {
  const found = await userModel?.findOne(credentials).lean();

  if (found) {
    return removeIdFromObj(found);
  }
  return null;
};

const updateFavorite = async (itemId, userId) => {
  try {
    const itemObjectId = new mongoose.Types.ObjectId(itemId);
    const user = await userModel.findById(userId);

    if (!user) {
      console.log('user not  found');
      return;
    }

    if (!user.favorites) {
      await userModel.updateOne(
        { _id: userId },
        { $set: { favorites: [itemId] } },
      );
      console.log('Favorites array created and item added');
      return;
    }

    const isFavorite = user.favorites?.includes(itemId);
    if (isFavorite) {
      await userModel.updateOne(
        { _id: userId },
        { $pull: { favorites: itemId } },
      );
      console.log('Item removed from favorites');
    } else {
      await userModel.updateOne(
        { _id: userId },
        { $addToSet: { favorites: itemId } },
      );
      console.log('Item added to favorites');
    }
  } catch (error) {
    console.log(error.message);
  }
};

export {
  createUser,
  findUserByCredentials,
  getAllData,
  getItemById,
  updateFavorite,
};
