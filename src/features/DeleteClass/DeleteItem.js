import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  List, ListItem, ListItemText, ListItemSecondaryAction, IconButton,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { fetchClasses, deleteClass } from '../AddClasses/addClassesSlice';

const DeleteItem = () => {
  const classes = useSelector((state) => state.addClassesReducer.classes);
  const accessToken = useSelector((state) => state.session.accessToken);
  const classesStatus = useSelector((state) => state.addClassesReducer.status);

  const dispatch = useDispatch();

  useEffect(() => {
    if (classesStatus === 'idle') {
      dispatch(fetchClasses(accessToken));
    }
  }, [classesStatus, dispatch, accessToken]);

  const handleDelete = useCallback(async (id) => {
    try {
      console.log(id);
      await dispatch(deleteClass({ accessToken, id }));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, accessToken]);

  return (
    <div>
      <List>
        {classes.map((course) => (
          <ListItem key={course.id}>
            <ListItemText primary={course.name} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(course.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DeleteItem;
