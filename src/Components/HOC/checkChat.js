import { useSelector } from "react-redux";

const CheckChat = ({ chatId, children }) => {
  const chatsList = useSelector(state => state.chats);

  if (chatId === undefined) {
    return (
      <p>Choose chat</p>
    )
  }
  else if (chatsList.find((chat) => chat.id === +chatId)){
    return (
      <>
        {children}
      </>
    );
  }
  else return (
    <p>No chats found</p>
  );
}

export default CheckChat;