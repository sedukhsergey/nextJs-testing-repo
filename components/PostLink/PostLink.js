import Link from 'next/link';

const PostLink = ({
  title
}) => {
  return (
    <li>
      <Link href={`/post?title=${title}`}>
        <a title={title}>{title}</a>
      </Link>
    </li>
)
};

export default PostLink;
