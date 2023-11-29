const { getToken } = require("@/utils");
const { Navigate } = require("react-router-dom");

export function AuthRoute({ children }) {
  const token = getToken();

  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to={'/50/login'} replace />;
  }
};

