import { createSlice } from "@reduxjs/toolkit";

interface Message {
  id: number;
  createdAt: number;
  text: string;
  ai: boolean;
}

export const messageSlice = createSlice({
  name: "message",
  initialState: [
    {
      id: 1,
      createdAt: Date.now(),
      text: "**Hello!** *How can I help you today?*",
      ai: true,
    },
    {
      id: 2,
      createdAt: Date.now(),
      text: "Hello! How can I help you today?",
      ai: false,
    },
  ],
  reducers: {
    addMessage: (state, action) => {
      state.push(action.payload);
    },
    updateMessage: (state, action) => {
      const { id, text, ai } = action.payload;
      const message = state.find((message) => message.id === id);
      if (message) {
        message.text = text;
        message.ai = ai;
      }
    },
  },
});
export const { addMessage, updateMessage } = messageSlice.actions;

export default messageSlice.reducer;
