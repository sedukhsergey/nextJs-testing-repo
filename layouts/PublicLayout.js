import Header from '../modules/Header';

const container = {
  maxWidth: 1080,
  margin: '0 auto',
}

const PublicLayout = ({
  children
}) => {
  return (
    <div style={container}>
      <Header />
      {children}
    </div>
  );
}


export default PublicLayout;
