import fs from 'fs'
import path from 'path'
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router'
import Loading from '../../../components/Loading';

import PublicLayout from "../../../layouts/PublicLayout";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Show = props => {
  const router = useRouter();
  if(router.isFallback) {
    return <Loading />
  }
  return (
    <>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      {props.show.image ? <img src={props.show.image.medium} /> : null}
      {props.posts.map(post => {
        return (
          <p key={post.filename}>{post.content}</p>
        )
      })}
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  return {
    // if you know what list of params should be you can specify it
    paths: data.map(entry => {
      return {
        params: {
          showId: `${entry.show.id}`
        }
      }
    }),
    fallback: true
  };
}

export async function getStaticProps({params}) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return {
      filename,
      content: fileContent
    }
  });

  const { showId } = params;
  const res = await fetch(`https://api.tvmaze.com/shows/${showId}`);
  const show = await res.json();
  return { props: {show, posts} };
}


// DEPRECATED !!!!
// Show.getInitialProps = async function(context) {
//   const { showId } = context.query;
//   const res = await fetch(`https://api.tvmaze.com/shows/${showId}`);
//   const show = await res.json();
//
//
//   return { show };
// };


export default Show;
