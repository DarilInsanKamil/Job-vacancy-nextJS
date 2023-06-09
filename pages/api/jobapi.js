export async function getServerSideProps() {
    const APIURL = process.env.MAIN_API_URL
    const res = await fetch(APIURL)
    const newResponse = await res.json();
    const data = newResponse.data
    // The next line will only be logged on the server and never on the browser console even if we make 
    // client-side navigation.
    // This confirms that `getServerSideProps` is guaranteed to run on the server and never on the client (or browser).
    return {
      props: {
        data
      }
    }
  }