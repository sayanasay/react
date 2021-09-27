import { useDispatch } from "react-redux";
import { changeCheckbox } from "../../actions/profileActions";

function Profile() {
  const dispatch = useDispatch();
  const changeHandler = () => {
    dispatch(changeCheckbox());
  }
  return (
    <>
      <p>Profile Page</p>
      <input
      type="checkbox"
      onChange = {changeHandler}
      />
    </>
  );
}

export default Profile;