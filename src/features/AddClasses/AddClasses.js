import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchClasses, addClass } from './addClassesSlice';

const AddClasses = () => {
//  Get greetings from Redux store:
//   const classItems = useSelector((state) => state.addClassesReducer);
  const classItems = useSelector((state) => state.addClassesReducer.classes);
  const classesStatus = useSelector((state) => state.addClassesReducer.status);
  const error = useSelector((state) => state.addClassesReducer.error);

  // Prepare Redux dispatch method:
  const dispatch = useDispatch();

  useEffect(() => {
    if (classesStatus === 'idle') {
      dispatch(fetchClasses());
    }
  }, [classesStatus, dispatch]);

  const newClassTable = (classItem) => (
    <tr key={classItem.id}>
      <td>{classItem.name}</td>
      <td>{classItem.description}</td>
      <td>{classItem.price}</td>
      <td><button type="button">Edit</button></td>
    </tr>
  );

  let content;

  if (classesStatus === 'succeeded') {
    // content = classItems.map((classItem) => newClassList(classItem));
    content = (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {classItems.map((classItem) => newClassTable(classItem))}
        </tbody>
      </table>
    );
  } else if (classesStatus === 'failed') {
    content = (
      <>
        <h1>classes not found</h1>
        <p>{error}</p>
      </>
    );
  }

  const valueInitialState = {
    name: '',
    description: '',
    photo: '',
    price: null,
    mentorName: null,
    duration: null,
  };

  // Create form states:
  const [values, setValues] = useState(valueInitialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // Add form onSubmit handler:
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const {
      name, description, photo, price, mentorName, duration,
    } = values;
    if (name && description) {
      const classArray = {
        name,
        description,
        photo,
        price,
        mentorName,
        duration,
        id: Date.now(),
      };
      await dispatch(addClass(classArray));
      await dispatch(fetchClasses());
      setValues('');
    }
  },
  [values, dispatch]);

  return (
    <section>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={values.name || ''}
            id="classItemId"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={values.description || ''}
            id="classItemId"
            required
            placeholder="description"
            onChange={handleChange}
          />
          <input
            type="text"
            name="photo"
            value={values.photo || ''}
            id="classItemId"
            required
            placeholder="photoUrl"
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            value={values.price || null}
            id="classItemId"
            required
            placeholder="price"
            onChange={handleChange}
          />
          <input type="submit" value="Add Class" />
        </form>
      </div>
      <div>
        {content}
      </div>

    </section>
  );
};

export default AddClasses;
