//project files
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListScreen from "./screens/ListScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { useList } from "./context/ContextHook";

export default function App() {
  const { list } = useList();
  return (
    <div className="App">
      <Header />
      {list.length === 0 ? <WelcomeScreen /> : <ListScreen />}
      <Footer />
    </div>
  );
}
