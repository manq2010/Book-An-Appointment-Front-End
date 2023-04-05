import axios from './axios';

const LOGIN_URL = '/oauth/token';
const SIGNUP_URL = '/users';
const LOGOUT_URL = '/oauth/revoke';
const CURRENT_USER_URL = '/users/me';

const CLIENT_ID = 'y6XykCBBwNYKC5pAzuPHiCf2EBHFvWDxB8PmvixG80c';
const CLIENT_SECRET = 'J2eEpuQ7bL9czfC3IYjFT8C5pReqtskj3x8EbHTtLDI';

export async function createUserWithEmailAndPassword(
  email,
  password,
  username,
) {
  const data = {
    username,
    email,
    password,
    client_id: CLIENT_ID,
  };

  return axios
    .post(SIGNUP_URL, data)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

export async function loginWithEmailAndPassword(
  email,
  password,
) {
  const data = {
    grant_type: 'password',
    email,
    password,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  };

  return axios
    .post(LOGIN_URL, data)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

export async function logoutUserWithToken(token) {
  const data = {
    token,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  };

  return axios
    .post(LOGOUT_URL, data)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

export async function requestAccessTokenWithRefreshToken(refreshToken) {
  const data = {
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  };

  return axios
    .post(LOGIN_URL, data)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

export async function getCurrentUser(accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return axios
    .get(CURRENT_USER_URL, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}
