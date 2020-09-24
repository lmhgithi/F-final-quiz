import * as types from '../constants';

const addTraineeRequest = () => {
  return {
    type: types.ADD_TRAINEE_REQUEST,
  };
};

const addTraineeSuccess = () => {
  return {
    type: types.ADD_TRAINEE_SUCCESS,
    payload: data,
  };
};

export const addTrainee = (data) => (dispatch) => {
    console.log('addTrainee', data)
  dispatch(addTraineeRequest());
  return fetch('http://localhost:8080/trainees', {
    method: 'POST',
    body: JSON.stringify({
      name: data.name,
      office: data.office,
      email: data.email,
      github: data.github,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => dispatch(addTraineeSuccess(data)));
};
