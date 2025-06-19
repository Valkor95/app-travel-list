import Form from "./components/organisms/Form/Form";
import Logo from "./components/organisms/Logo/Logo";
import PackingList from "./components/organisms/PackingList/PackingList";
import Stats from "./components/organisms/Stats/Stats";

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};

export default App;
