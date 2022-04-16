import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/pixel-art-neutral';

export const randProfilePicture = () => {
  return createAvatar(style);
};

export const customProfilePicture = ({ customSeed }) => {
  return createAvatar(style, {
    seed: customSeed,
  });
};
export default randProfilePicture;
