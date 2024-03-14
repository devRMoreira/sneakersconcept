import NavBar from "@/frontend/components/navbar";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const toastSucesso = (string) => toast.success(string)
export const toastErro = (string) => toast.error(string)


export default function App({ Component, pageProps }) {

  const router = useRouter()
  const { asPath, route, pathname } = router

  if (asPath === "/") {
    return <div>

      <Component {...pageProps} />

    </div>

  } else {

    return <div className="mb-12 relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/backg2.jpg')" }}>
  
      <ToastContainer autoClose={2500} />
      <Component {...pageProps} />
      <NavBar />

    </div>
  }
}
