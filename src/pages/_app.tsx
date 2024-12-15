import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/service/store";
import "../../public/scss/main.scss"
import { ToastProvider } from "@/components/ui/toast";
export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <ToastProvider>
    <Component {...pageProps} />;
    </ToastProvider>
  </Provider>
}
