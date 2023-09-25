import { createSlice } from "@reduxjs/toolkit";

interface Message {
  id: number;
  createdAt: number;
  text: string;
  ai: boolean;
}

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    id: 1,
    createdAt: Date.now(),
    text: "**Hello!** *How can I help you today?*",
    ai: true,
  },
  reducers: {
    addMessage: (state, action) => {
      const newMessage: Message = {
        id: state.id + 1,
        createdAt: Date.now(),
        text: action.payload,
        ai: false,
      };
      state.id = newMessage.id;
      state.createdAt = newMessage.createdAt;
      state.text = newMessage.text;
      state.ai = newMessage.ai;
    },
    clearMessage: (state) => {
      state.id = 1;
      state.createdAt = Date.now();
      state.text = "**Hello!** *How can I help you today?*";
      state.ai = true;
    },
  },
});

export const { addMessage, clearMessage } = messageSlice.actions;
export default messageSlice.reducer;
