import * as React from 'react'
import {
  useParams
} from 'react-router-dom';

interface ParamTypes {
  id: string
}

const User:React.FC = (props) => {
  const { id } = useParams<ParamTypes>();
  return(
    <div>
      Userrsssrrr: {id}
    </div>
  )
}

export default User