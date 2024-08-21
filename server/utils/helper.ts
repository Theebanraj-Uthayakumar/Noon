export const validatePostData = (data: any) => {
  const requiredFields = [
    "profileImage",
    "username",
    "postImage",
    "postTitle",
    "price",
    "isFavourite",
    "content",
    "likes",
    "hashtags",
    "totalNumberOfCommends",
  ];

  for (const field of requiredFields) {
    if (data[field] === undefined || data[field] === null) {
      return `Missing required field: ${field}`;
    }
  }
  return null;
};
