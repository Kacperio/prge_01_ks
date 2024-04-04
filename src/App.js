import "./App.css";

const user_list = [
  { name: "Oliver" },
  { name: "Stanisław" },
  { name: "Piotr" },
];

console.log(user_list);

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      {user_list.map((user) => {
        return <div>{user.name}</div>;
      })}
    </div>
  );
}

export default App;
