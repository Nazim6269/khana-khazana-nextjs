import { recipeModel } from '@/models/recipe-model';
import { removeMongoId } from '@/utils/util';

const getAllData = async () => {
  const data = await recipeModel.find().lean();
  return removeMongoId(data);
};

export { getAllData };
