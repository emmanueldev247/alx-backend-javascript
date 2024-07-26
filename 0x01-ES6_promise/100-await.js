import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const result = {
    photo: null,
    user: null,
  };

  try {
    const photo = await uploadPhoto();
    result.photo = photo;
  } catch (err) {
    return result;
  }

  try {
    const user = await createUser();
    result.user = user;
  } catch (err) {
    return result;
  }

  return result;
}
