import Link from 'next/link';
import PublicLayout from "../../layouts/PublicLayout";
// import fetch from 'isomorphic-unfetch'
import fetch from 'node-fetch'

const Page = props => {
  return (
    <>
      <h1>Batman TV Shows</h1>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/post/postId/[showId]" as={`/post/postId/${show.id}`} >
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </>
  )
};


export async function getStaticProps({params}) {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  return {
    props: {
      shows: data.map(entry => entry.show)
    },
  }
}

// export async function getServerSideProps(context) {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();
//   return {
//     props: {
//       shows: data.map(entry => entry.show),
//     }
//   }
// }

// !!!!DEPRECATED
// Page.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();
//   return {
//     shows: data.map(entry => entry.show),
//   }
// }

export default Page;
