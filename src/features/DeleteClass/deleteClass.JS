const CREATE_CLASS = 'classStore/clasess/CREATE_CLASSES';
const GET_CLASS = 'classStore/classes/GET_CLASSES';
const DELETE_CLASS = 'carStore/classes/DELETE_CLASS';
const BASE_URL = 'http://localhost:3001/api/v1';

const initialState = [];

export const getClass = (payload) => ({
  type: GET_CLASS,
  payload,
});

export const createClass = (payload) => ({
  type: CREATE_CLASS,
  payload,
});

export const addClassToAPI = (classItem) => async (adding) => {
  const response = await fetch(`${BASE_URL}/classes/`, {
    method: 'POST',
    body: JSON.stringify(classItem),
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
  });

  if (response.ok) {
    adding(createClass(classItem));
  }
};

export const getCLassFromAPI = () => async (storing) => {
  const result = await fetch(`${BASE_URL}/classes/`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
  });

  const classesData = await result.json();

  const classes = classesData.map((data) => ({
    id: data.id,
    className: data.name,
    classDescription: data.description,
    classImg: data.photo,
    classPrice: data.price,
    classMentorName: data.mentor_name,
    classDuration: data.duration,
  }));
  storing(getClass(classes));
};

export const removeClass = (payload) => ({
  type: DELETE_CLASS,
  payload,
});

export const removeClassFromAPI = (id) => async (dispatch) => (
  fetch(`${BASE_URL}/classes/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then(dispatch(removeClass(id)))

);

// reducer

const classesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLASS:
      return [...action.payload];
    case CREATE_CLASS:
      return [...action.payload];
    case DELETE_CLASS:
      return state.filter((classItem) => classItem.id !== action.payload);
    default:
      return state;
  }
};

export default classesReducer;
