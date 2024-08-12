import Details from '@/components/recipe/Details';
import { getItemById } from '@/data/query';
import React from 'react';

const RecipeDetailsPage = async ({ params: { id } }) => {
  const item = await getItemById(id);

  return <Details item={item} />;
};

export default RecipeDetailsPage;
