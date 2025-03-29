import axios, { isAxiosError } from 'axios';
import { MAIN_URL } from '../lib/constants';
import { toast } from 'react-toastify';

const instance = axios.create({
  baseURL: MAIN_URL,
});

const getAllPoke = async (offset: number, limit: number) => {
  try {
    const { data } = await instance.get(`${MAIN_URL}/pokemon?offset=${offset}&limit=${limit}`);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      toast.error(error.response?.data.message);
    } else {
      toast.warning('Something went wrong. Try again later');
      console.log(error);
    }
  }
};

const getPokeDetails = async (name: string) => {
  try {
    const { data } = await instance.get(`${MAIN_URL}/pokemon/${name}`);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      toast.error(error.response?.data.message);
    } else {
      toast.warning('Something went wrong. Try again later');
      console.log(error);
    }
  }
};

export default {
  getAllPoke,
  getPokeDetails,
};
