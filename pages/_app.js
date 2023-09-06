import "remixicon/fonts/remixicon.css";
import Context from '@/context/Context';
import '@/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
      <Context>
          <Component {...pageProps} />
          <ToastContainer />
      </Context>
  );
}
