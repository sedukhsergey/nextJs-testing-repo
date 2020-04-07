import Link from 'next/link'
import { useRouter } from "next/router";

const Framework = props => {
  const {
    query: {
      frameworkId,
    }
  } = useRouter();
  const capabilitiessArray = [
    {title: 'Index one', id: 1},
    {title: 'Index two', id: 2},
    {title: 'Index three', id: 3},
  ];
  return (
    <>
      <h1>Capabilities List</h1>
      {/*<button onClick={props.url.back}>*/}
      {/*  Back*/}
      {/*</button>*/}
      <ul>
        {capabilitiessArray.map(item => {
          return (
            <li key={item.id}>
              <Link
                href={`/frameworks/frameworkId/[frameworkId]/capabilityId/[capabilityId]`}
                as={`/frameworks/frameworkId/${frameworkId}/capabilityId/${item.id}`}
              >
                <a title={item.title}>{item.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Framework;
