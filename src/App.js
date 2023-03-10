import { useFetchUserQuery } from "./store";
import Sidebar from "./pages/Sidebar";
import Skeleton from "./components/Skeleton";
import Dashboard from "./pages/Dashboard";

function App() {
  const user = [
    {
      id: 1,
    },
  ];
  const { data, error, isFetching, isLoading } = useFetchUserQuery(user);

  let content;
  if (isLoading) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else {
    content = (
      <>
        <Sidebar userInfo={data} />
        <Dashboard userInfo={data} />
      </>
    );
  }

  return content;
}

export default App;
