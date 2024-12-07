import axios from 'axios';
const API_URL='https://fullstack.exercise.applifting.cz';
const API_KEY='401269a2-1710-4cac-b288-5e29f6c9891a'


export async function login(
  username: string,
  password: string,
) {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      {
        username,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': API_KEY,
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    throw new Error(
      'Login failed: ' + error.response?.data?.message || 'Unknown error'
    );
  }
}