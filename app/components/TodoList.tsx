"use client";

import { useState } from "react";
import { Todo } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Trash } from "lucide-react";

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (!newTodo.trim()) return;

    const todo: Todo = {
      id: crypto.randomUUID(),
      text: newTodo.trim(),
      completed: false,
      createdAt: new Date(),
    };

    setTodos([...todos, todo]);
    setNewTodo("");
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <div className="flex gap-2">
        <Input
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            e.key === "Enter" && addTodo()
          }
          placeholder="Add a new todo..."
          className="flex-1"
        />
        <Button onClick={addTodo}>Add</Button>
      </div>

      <ul className="space-y-2 w full" role="list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="px-4 flex items-center gap-3 border rounded-lg py-2"
          >
            <Checkbox
              checked={todo.completed}
              onCheckedChange={() => toggleTodo(todo.id)}
            />
            <span
              className={cn(
                "flex-1",
                todo.completed && "line-through text-muted-foreground"
              )}
            >
              {todo.text}
            </span>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => deleteTodo(todo.id)}
            >
              <Trash />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
