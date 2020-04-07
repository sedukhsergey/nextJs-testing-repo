import Link from 'next/link'

const Frameworks = () => {
  const frameworksArray = [
    {title: 'Framework one', id: 1},
    {title: 'Framework two', id: 2},
    {title: 'Framework three', id: 3},
  ];
  return (
    <>
      <h1>Frameworks List</h1>
      <ul>
        {frameworksArray.map(item => {
          return (
            <li key={item.id}>
              <Link
                href={`/frameworks/frameworkId/[frameworkId]`}
                as={`/frameworks/frameworkId/${item.id}`}
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

export default Frameworks;
