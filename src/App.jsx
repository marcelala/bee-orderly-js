import index from "./styles/sass/index.scss";

import { ListContextProvider } from "./context/ListContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListScreen from "./screens/ListScreen";
import { useList } from "./context/ListContext";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  const { list } = useList();

  return (
    <div className="App">
      <ListContextProvider>
        <Header />
        {list.length !== 0 ? <ListScreen /> : <WelcomeScreen />}
        <Footer />
      </ListContextProvider>
    </div>
  );
}
