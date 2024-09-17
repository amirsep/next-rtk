const { createSlice, nanoid, createAsyncThunk } = require("@reduxjs/toolkit");

// Load users from local storage, or return an empty array if not found
const loadUsersFromLocalStorage = () => {
  const storedUsers = localStorage.getItem("users");
  return storedUsers ? JSON.parse(storedUsers) : [];
};

// Save users to local storage
const saveUsersToLocalStorage = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  return res?.json();
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: loadUsersFromLocalStorage(), // Initialize users from local storage
    isLoading: false,
    data: [],
    isError: false,
  },
  reducers: {
    // Add a new user and save to local storage
    addUser: (state, action) => {
      const newUser = {
        id: nanoid(), // Generate a unique ID
        name: action.payload, // Get the name from the action payload
      };
      state.users.push(newUser); // Add the new user to the state
      saveUsersToLocalStorage(state.users); // Update local storage
    },

    // Remove a user by ID and update local storage
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
      saveUsersToLocalStorage(state.users); // Update local storage
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

// Export the actions and reducer
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
