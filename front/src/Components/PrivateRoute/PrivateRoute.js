const { useSelector } = require("react-redux");
const { Route, Redirect } = require("react-router");

const PrivateRoute = ({ ...rest }) => {
  const { user } = useSelector((state) => state.user);
  return user ? <Route {...rest} /> : <Redirect to="/" />;
};

export default PrivateRoute;