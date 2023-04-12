import addClassReducer, { initialState, addClass, deleteClass } from '../features/AddClasses/addClassesSlice';

describe('addClassSlice', () => {
  describe('reducer', () => {
    it('should handle initial state', () => {
      expect(addClassReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    it('should handle addClass.pending', () => {
      const action = { type: addClass.pending.type };
      const state = { ...initialState, status: 'idle' };
      const expectedState = { ...initialState, status: 'adding' };
      expect(addClassReducer(state, action)).toEqual(expectedState);
    });

    it('should handle addClass.fulfilled', () => {
      const classItem = {
        id: '1',
        name: 'Math',
        description: 'Learn Math',
        photo: 'math.png',
        price: 100,
        mentorName: 'John Doe',
        duration: 60,
      };
      const action = { type: addClass.fulfilled.type, payload: classItem };
      const state = { ...initialState, classes: [], status: 'adding' };
      const expectedState = {
        ...initialState,
        classes: [[], classItem],
        status: 'added',
      };
      expect(addClassReducer(state, action)).toEqual(expectedState);
    });

    it('should handle addClass.rejected', () => {
      const action = { type: addClass.rejected.type, error: { message: '' } };
      const state = { ...initialState, status: 'failed' };
      const expectedState = { ...initialState, status: 'failed', error: '' };
      expect(addClassReducer(state, action)).toEqual(expectedState);
    });
  });
});

describe('deleteClass cases', () => {
  it('should handle deleteClass.pending', () => {
    const action = { type: deleteClass.pending.type };
    const state = { ...initialState, status: 'idle' };
    const expectedState = { ...initialState, status: 'removing' };
    expect(addClassReducer(state, action)).toEqual(expectedState);
  });

  it('should handle deleteClass.fulfilled', () => {
    const classItem = {
      id: '1',
      name: 'Math',
      description: 'Learn Math',
      photo: 'math.png',
      price: 100,
      mentorName: 'John Doe',
      duration: 60,
    };
    const action = { type: deleteClass.fulfilled.type, payload: classItem.id };
    const state = { ...initialState, classes: [classItem], status: 'removing' };
    const expectedState = { ...initialState, classes: [], status: 'removed' };
    expect(addClassReducer(state, action)).toEqual(expectedState);
  });

  it('should handle deleteClass.rejected', () => {
    const action = { type: deleteClass.rejected.type, error: { message: '' } };
    const state = { ...initialState, status: 'failed' };
    const expectedState = { ...initialState, status: 'failed', error: '' };
    expect(addClassReducer(state, action)).toEqual(expectedState);
  });
});
