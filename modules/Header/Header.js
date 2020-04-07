import { useState } from 'react';
import Link from 'next/link';

const linkStyle = {
  marginLeft: 15,
  color: '#0a74f3',
  marginBottom: 10,
};

const linkContainer = {
  background: '#eee',
  display: 'flex',
  flexDirection: 'column',
  padding: 20,
};


const Header = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div style={linkContainer}>
      <button onClick={() => setCounter(count => count + 1)}>Increment{counter}</button>
      <Link href="/">
        <a title="Home Page" style={linkStyle}>Home Page</a>
      </Link>
        <Link href="/about">
          <a title="About Page" style={linkStyle}>Aboout Page</a>
        </Link>
        <Link href="/blog">
          <a title="Blog" style={linkStyle}>Blog Page</a>
        </Link>
        <Link href="/post">
          <a title="Post" style={linkStyle}>Post</a>
        </Link>
        <Link href="/frameworks">
          <a title="frameworks" style={linkStyle}>Frameworks List</a>
        </Link>
    </div>
  )
}


export default Header;
