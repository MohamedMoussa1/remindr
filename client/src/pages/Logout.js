import * as React from 'react';
import { removeCurrentUserToken } from '../utils/auth';
import { useNavigate } from "react-router-dom";

export default function SignInSide() {
  const navigate = useNavigate();

  React.useEffect(() => {
    removeCurrentUserToken();
    navigate('/');
  }, [navigate])

  return (<div></div>);
}