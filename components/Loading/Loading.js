
const loadingStyles = {
  position: 'absolute',
  top: '48%',
  left: '50%',
  background: '#ddd',
  padding: '10px',
  borderRadius: '6px',
  color: 'white',
  fontSize: '20px',
  letterSpacing: '4px',
  boxShadow: '2px 3px 7px 2px #ccc',
}

const Loading = () => {
  return (
    <div style={loadingStyles}>Loading...</div>
  )
}

export default Loading;
