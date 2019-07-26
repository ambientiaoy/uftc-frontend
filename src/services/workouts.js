import axios from 'axios';
import { apiUrls } from '../config/config';

const baseUrl = apiUrls.workouts;

const getWorkoutsByUser = id => {
  return axios.get(baseUrl + `/${id}`);
};

const add = workout => {
  return axios.post(baseUrl, workout);
};

const update = workout => {
  return axios.put(baseUrl + '/' + workout.workoutid, workout);
};

export default { getWorkoutsByUser, add, update };
