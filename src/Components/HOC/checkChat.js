const CheckChat = ({ chatId, chatsList, children }) => {
  if (chatsList.find((chat) => chat.id === chatId)){
    return (
      <>
        {children}
      </>
    );
  }
  if (chatId === undefined) {
    return (
      <p>Choose chat</p>
    )
  }
  else return (
    <p>No chats found</p>
  );
}

export default CheckChat;