// import { useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([
//     { id: 1, text: "mango" },
//     { id: 2, text: "apple" },
//     { id: 3, text: "berry" },
//   ]);
//   const [value, setValue] = useState("");

//   const addTodo = () => {
//     if (value.trim() !== "") {
//       const newTodo = { id: todos.length + 1, text: value };
//       setTodos([...todos, newTodo]);
//       setValue("");
//     }
//   };

//   const editTodo = (id, newText) => {
//     const updatedTodos = todos.map((todo) => {
//       if (todo.id === id) {
//         return { ...todo, text: newText };
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   const deleteTodo = (id) => {
//     const updatedTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div style={{ alignItems: "center" }}>
//       <h1 style={{ backgroundColor: "pink", textAlign: "center" }}>
//         To-Do App
//       </h1>
//       <ul style={{ listStyle: "numbers", color: "brown" }}>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <input
//               type="text"
//               value={todo.text}
//               onChange={(e) => editTodo(todo.id, e.target.value)}
//             />
//             <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <button
//         style={{ backgroundColor: "brown", color: "white" }}
//         onClick={addTodo}
//       >
//         Add Todo
//       </button>
//     </div>
//   );
// }

// export default App;
