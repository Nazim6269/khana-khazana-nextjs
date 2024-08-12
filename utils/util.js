export const removeMongoId = (array) => {
  const mappedArray = array.reduce((acc, cur) => {
    const id = cur._id.toString();
    delete cur._id;
    const newObj = { id, ...cur };
    acc.push(newObj);
    return acc;
  }, []);

  return mappedArray;
};
