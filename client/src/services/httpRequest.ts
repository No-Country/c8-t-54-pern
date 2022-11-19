import axios from 'axios';

const URL: string = import.meta.env.VITE_API_URL

export const postRequest = async (userData: {}, endpoint: string) => {
  try {

    const { data } = await axios.post(
      URL + endpoint,
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);

      throw new Error(error.message);
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}
