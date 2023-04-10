import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchClasses } from './mainSlice';

const Section = styled.section`

input[type="text"],
input[type="number"]  {
  color: var(--secondary);
  background-color: transparent;
  border: 1px solid var(--secondary);
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  font-size: var(--fs-l);
  line-height: 1;
  text-decoration: none;
  margin: 0.5rem 0;
  width: 100%;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--secondary-tint);
    outline: none;
  }
}

input[type="text"]:first-of-type {
  margin-top: 1rem;
}

input[type="submit"]{
    color: var(--white);
    background-color: var(--tertiary);
    border: 1px solid var(--tertiary);
    padding: 0.75rem 1rem;
    font-size: var(--fs-l);
    font-family: var(--font-mono-family);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    margin-top: 0.5rem;

    &:hover,
    &:focus,
    &:active {
      background-color: var(--secondary-tint);
      border: 1px solid var(--secondary-tint);
      outline: none;
    } 
} 

.item-heading {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

table {
  margin-top: 1rem;
  width: 100%;
  text-align: left;

  thead {
    color: var(--secondary);
  }

  tr:nth-of-type(even) {
      background-color: var(--secondary-tint);
}

}

`;
const AddClasses = () => {
//  Get greetings from Redux store:
//   const classItems = useSelector((state) => state.addClassesReducer);
  const accessToken = useSelector((state) => state.session.accessToken);
  const classItems = useSelector((state) => state.addClassesReducer.classes);
  const classesStatus = useSelector((state) => state.addClassesReducer.status);
  const error = useSelector((state) => state.addClassesReducer.error);

  // Prepare Redux dispatch method:
  const dispatch = useDispatch();

  useEffect(() => {
    if (classesStatus === 'idle') {
      dispatch(fetchClasses(accessToken));
    }
  }, [classesStatus, dispatch]);

  const newClassTable = (classItem) => (
    <tr key={classItem.id}>
      <td>{classItem.name}</td>
      <td>{classItem.description}</td>
      <td>{classItem.price}</td>
    </tr>
  );

  let content;

  if (classesStatus === 'succeeded') {
    content = classItems.length > 0 ? (
      <>
        <h3 className="item-heading">List of my current classes</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {classItems.map((classItem) => newClassTable(classItem))}
          </tbody>
        </table>
      </>
    ) : ('');
  } else if (classesStatus === 'failed') {
    content = (
      <>
        <h1>classes not found</h1>
        <p>{error}</p>
      </>
    );
  }

  return (
    <Section>
      <div>
        {content}
      </div>

    </Section>
  );
};

export default AddClasses;
