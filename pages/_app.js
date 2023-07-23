import '../styles/global.css';
import {Encode_Sans} from "next/font"

const encode_sans = Encode_Sans({
  subsets: ["latin"],
  weight: ["100", "400", "500"]
})

export default function App({ Component, pageProps }) {
  return  (
    <main className={encode_sans.className}>
      <Component {...pageProps} />;
    </main>
  )
}