import * as React from 'react'

interface Props {
  clickHandler: () => void,
  title?: string
}

const ClickTest:React.FC<Props> = ({ title, clickHandler }) => (
  <div>
    <button id="button" onClick={clickHandler}>
      {title}
    </button>
  </div>
)

export default ClickTest