import { APP_BUILD_MANIFEST } from 'next/dist/shared/lib/constants'
import Head from 'next/head'
import '../styles/globals.css'
import Script from 'next/script'
// import navigator from 'next/na'


// const registerServiceWorker = async () => {
  // if ("serviceWorker" in navigator) {
  //   try {
  //     const registration = await navigator.serviceWorker.register("/sw.js", {
  //       scope: "/",
  //     });
  //     // navigator.serviceWorker.register("/sw.js")
  //     // .then(() => console.log("Registered"))
  //     // .catch(()=> console.log("Not Registered"))
      
  //     if (registration.installing) {
  //       console.log("Service worker installing");
  //     } else if (registration.waiting) {
  //       console.log("Service worker installed");
  //     } else if (registration.active) {
  //       console.log("Service worker active");
  //     }
  //   } catch (error) {
  //     console.error(`Registration failed with ${error}`);
  //   }
  // }
// };

// …

function MyApp({ Component, pageProps }) {  
  
// registerServiceWorker();

return <>
  {/* <Head>
<Script src='/service.js'/>
  </Head> */}
  <Component {...pageProps} />
</>
}

export default MyApp
