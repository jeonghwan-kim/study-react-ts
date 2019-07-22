import * as React from 'react'

interface Props {
  style?: React.CSSProperties
}

const Skelton: React.FC<Props> = ({style}) => {
  const bar = (width: string) => 
    <div style={{
      width: width,
      height: '13px',
      background: '#dddd',
      marginBottom: '8px',
      borderRadius: '2px',
    }}></div>


  return (
    <div style={style}>
      {bar('90%')}
      {bar('50%')}
      {bar('80%')}
    </div>
  )
}

export default Skelton