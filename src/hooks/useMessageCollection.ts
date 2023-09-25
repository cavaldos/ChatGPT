import { useState } from 'react'

const useMessageCollection = () => {
  const initialMsg = {
    id: 1,
    createdAt: Date.now(),
    text: '**Hello!** *How can I help you today?*',
    ai: true
  }
  const [messages, setMessages] = useState([initialMsg]);
  const addMessage = (message: any) => {
    setMessages((prev) => [...prev, message]);
  }

  const clearMessages = () => setMessages([initialMsg])

  return [messages, addMessage, clearMessages];
}

export default useMessageCollection