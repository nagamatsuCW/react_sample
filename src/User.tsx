import * as React from 'react'
import { RouteComponentProps } from "@reach/router"

interface Props {
  id: string
}

const User = (props:Props & RouteComponentProps ) => {
  const { id } = props;
  return(
    <div>
      Userrrrr: {id}
    </div>
  )
}

export default User