import AddUsers from "./components/AddUsers";
import Counter from "./components/Counter";
// import Counter from "./components/Counter";
import DisplayUsers from "./components/DisplayUsers";

export default function Home() {
  return (
    <main className="">
      <AddUsers />
      <DisplayUsers />
      <Counter />
    </main>
  );
}
