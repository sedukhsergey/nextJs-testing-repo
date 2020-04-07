import Link from 'next/link'
import { useRouter } from "next/router";

const Capability = props => {
  const {
    query: {
      frameworkId,
      capabilityId,
    }
  } = useRouter();
  return (
    <>
      <h1>Capability {capabilityId}</h1>
      {/*<button onClick={props.url.back}>*/}
      {/*  Back to framework*/}
      {/*</button>*/}
    </>
  )
}

export default Capability;
