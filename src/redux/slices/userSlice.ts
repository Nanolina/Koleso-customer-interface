import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IUserState } from '../../modules/auth';
import { signupCases } from '../cases/user';
import { userInitialState } from '../initialStates';

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IUserState>) => {
    signupCases(builder);
  },
});

export default userSlice.reducer;
