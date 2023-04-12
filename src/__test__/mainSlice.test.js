import addClassReducer, {
  initialState, fetchClasses,
} from '../features/AddClasses/addClassesSlice';

describe('fetchClasses cases', () => {
  it('should handle initial state', () => {
    expect(addClassReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });
  it('should handle fetchClasses.pending', () => {
    const action = { type: fetchClasses.pending.type };
    const state = { ...initialState, isLoading: false, status: 'idle' };
    const expectedState = { ...initialState, isLoading: true, status: 'loading' };
    expect(addClassReducer(state, action)).toEqual(expectedState);
  });

  it('should handle fetchClasses.fulfilled', () => {
    const classList = [
      {
        id: '1',
        name: 'Math',
        description: 'Learn Math',
        photo: 'math.png',
        price: 100,
        mentorName: 'John Doe',
        duration: 60,
      },
      {
        id: '2',
        name: 'Science',
        description: 'Learn Science',
        photo: 'science.png',
        price: 200,
        mentorName: 'Jane Smith',
        duration: 90,
      },
    ];
    const action = { type: fetchClasses.fulfilled.type, payload: classList };
    const state = {
      ...initialState, isLoading: true, status: 'loading', classes: [], content: [],
    };
    const expectedState = {
      ...initialState,
      isLoading: false,
      status: 'succeeded',
      classes: classList,
      content: classList,
    };
    expect(addClassReducer(state, action)).toEqual(expectedState);
  });

  it('should handle fetchClasses.rejected', () => {
    const action = { type: fetchClasses.rejected.type, error: { message: 'Error' } };
    const state = { ...initialState, isLoading: true, status: 'loading' };
    const expectedState = {
      ...initialState, isLoading: false, status: 'failed', error: 'Error',
    };
    expect(addClassReducer(state, action)).toEqual(expectedState);
  });
});
