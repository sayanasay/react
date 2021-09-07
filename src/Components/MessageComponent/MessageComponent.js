import './style.css'

const MessageComponent = ({ text }) => {
  return  (
    <div className="text">
      {text}
    </div>
  )
};

export default MessageComponent;