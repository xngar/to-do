import { getAllTodos } from "@/api/api";
import AddTask from "@/components/AddTask";
import Listado from "@/components/Listado";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);

  return (
    <main className="max-w-3xl mx-auto">
      <div>
        <h1 className="text-center p-4">Listado de tareas</h1>
      </div>
      <AddTask />
      <Listado tasks={tasks} />
    </main>
  );
}
