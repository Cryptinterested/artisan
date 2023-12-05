import { v4 as uuidv4 } from 'uuid';

import { env } from "@/env.mjs";


// Secret key to sign the token (replace this with your own secret key)
const secretKey = env.SECRET_KEY_TOKEN_GENERATOR;

//Would most likely need to be secured with privat ekey

// Function to generate an access token
const generateAccessToken = (userId: string) => {
  return `art_sk_${uuidv4()}`;
};

export default generateAccessToken;
