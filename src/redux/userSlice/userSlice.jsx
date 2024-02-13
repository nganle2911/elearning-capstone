import { createSlice } from '@reduxjs/toolkit'

let dataJson = JSON.parse(localStorage.getItem("USER_LOGIN"));

const initialState = {
  user: dataJson,
  profile: null
}

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setUserSignOut: (state, action) => {
      state.user = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    }
  }
});

export const { setUser, setUserSignOut, setProfile } = userSlice.actions

export default userSlice.reducer