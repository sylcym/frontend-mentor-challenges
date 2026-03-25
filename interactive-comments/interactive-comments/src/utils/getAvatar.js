export const getAvatar = (path) => {
  return `/src/assets${path.replace(".", "")}`;
};
