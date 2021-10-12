import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchUser } from "../../actions/userAction";

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorFlg, setErrorFlg] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const { user, error } = useSelector(state => state.user);

  useEffect(() => {
    if (error) {
      setEmail('')
      setPassword('')
      setErrorFlg((prev) => !prev);
    }
  }, [error]);

  useEffect(() => {
    if (user) {
      history.push('/main');
      setErrorFlg(false);
    }
  }, [user]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUser({ email, password }));
  };

return (
  <>
    <form onSubmit={handlerSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button type="submit">Login</button>
    </form>
    { errorFlg && <div>ERROR: The email address or password you entered is not valid</div> }
    </>
);
}

export default AuthPage;