import * as React from 'react'
import {
  useNavigate,
  useParams
} from 'react-router-dom';
const User = () => {
  const { id } = useParams();
  return(
    <div>
      Userrrrr: {id}
    </div>
  )
}

export default User