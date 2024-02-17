import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counterStore/counter.slice";
import usersSlice from "./usersStore/users.slice";

// We'll use redux-logger just as an example of adding another middleware
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: import.meta.env.NODE_ENV !== "production",
});

// required if typescript
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// Export a hook that can be reused to resolve types
// export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
