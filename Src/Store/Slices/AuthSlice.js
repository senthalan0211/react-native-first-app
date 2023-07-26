import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
};

export const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const {setIsLogin} = AuthSlice.actions;

export default AuthSlice.reducer;
