import PostLink from "../components/PostLink";
import PublicLayout from "../layouts/PublicLayout";

const Blog = () => {
  return (
    <>
      <h1>My Blog</h1>
      <ul>
        <PostLink title=" Next.js one link"/>
        <PostLink title="Next.js another link"/>
        <PostLink title="Next.js some another link"/>
      </ul>
    </>
  )
}

export default Blog;
