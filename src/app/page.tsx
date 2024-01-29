import Footer from "@/ui/components/Footer";
import Header from "@/ui/components/Header";
import Informative from "@/ui/components/Informative";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

export default function Home() {
  return (
    <div >
      <Header />
      <Informative />
      <Footer/>
    </div>
  );
}
