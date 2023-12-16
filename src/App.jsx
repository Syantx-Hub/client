import { useAuthContext } from "./hooks/UseAuthContext";
function App() {
  const { message } = useAuthContext();
  return (
    <>
      <div>
        <h1 className="text-red-500">Hello world</h1>
        <p>{message}</p>
      </div>
    </>
  );
}

export default App;
