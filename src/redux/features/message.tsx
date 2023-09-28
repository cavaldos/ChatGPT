import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    chat: [
      {
        id: 1,
        createdAt: Date.now(),
        text: "**Hello!** *How can I help you today?*",
        ai: true,
      },
    
    ],
  },
  reducers: {
    addMessage: (state, action) => {
      const newMsg = {
        id: Math.floor(Math.random() * 10000),
        createdAt: action.payload.createdAt,
        text: action.payload.text,
        ai: action.payload.ai,
      };
      state.chat.push(newMsg);
    },
  },
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
