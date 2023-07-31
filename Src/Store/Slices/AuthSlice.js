import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  userData: null,
};

export const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const {setIsLogin, setUserData} = AuthSlice.actions;

export default AuthSlice.reducer;
