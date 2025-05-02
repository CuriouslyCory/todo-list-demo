import { TodoList } from "../components/TodoList";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Todo List</h1>
        <TodoList />
      </main>
    </div>
  );
}
