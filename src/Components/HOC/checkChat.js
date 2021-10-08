import { useSelector } from "react-redux";

const CheckChat = ({ chatId, children }) => {
  const chatsList = useSelector(state => state.chats);
  
  return (
    <>
      { chatsList.find((chat) => chat.id === +chatId) ? children : <p>Choose chat</p> }
    </>
  );
}

export default CheckChat;