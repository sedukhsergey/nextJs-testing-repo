import App from 'next/app'
import PublicLayout from "../layouts/PublicLayout";
function MyApp({ Component, pageProps }) {
  return (
    <PublicLayout>
      <Component {...pageProps} />
    </PublicLayout>
  )
}

export default MyApp
