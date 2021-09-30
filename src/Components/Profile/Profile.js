import { useDispatch, useSelector } from "react-redux";
import { changeCheckbox } from "../../actions/profileActions";

function Profile() {
  const check = useSelector(state => state.profileReducer);
  const dispatch = useDispatch();
  const changeHandler = () => {
    dispatch(changeCheckbox());
  }
  return (
    <>
      <p>Profile Page</p>
      <input
      type="checkbox"
      value={check}
      onChange = {changeHandler}
      />
    </>
  );
}

export default Profile;