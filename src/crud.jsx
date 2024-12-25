import { useState } from "react"; // Importing the `useState` hook from React to manage state in the component.
 
function Crud() {
  const [data, setData] = useState([]); // State to store the list of tasks. It starts as an empty array.
  const [isediting, setIsediting] = useState(false); // State to track if we're editing a task. Starts as `false`.
  const [edittask, setEdittask] = useState(""); // State to store the task currently being edited. Starts as an empty string.
 
  // Function to delete a task from the list
  function deleteitem(task) {
    setData(data.filter((data) => data !== task)); // Filters out the task that we want to delete from the `data` array.
  }
 
  const [task, setTask] = useState(""); // State to store the task text input. Starts as an empty string.
 
  // Function to handle the input value changes
  function addData(e) {
    setTask(e.target.value); // Updates the `task` state with the current value typed in the input field.
  }
 
  // Function to add or update a task
  function taskadd() {
    if (task.trim() === "") {
      // If the task is empty or just spaces, show an alert.
      alert("Task cannot be empty!");
      return; // If task is empty, do not proceed further.
    }
 
    if (isediting) {
      // If we are in editing mode, update the existing task.
      setData(data.map((item) => (item === edittask ? task : item))); // Replace the `edittask` with the new task in the `data` array.
      setIsediting(false); // Set editing mode to `false` after the task is updated.
      setEdittask(""); // Clear the `edittask` state since we're done editing.
    } else {
      // If we're not in editing mode, add a new task to the list.
      setData([...data, task]); // Add the new task to the `data` array.
    }
 
    setTask(""); // Clear the input field after adding or updating the task.
  }
 
  // Function to handle editing a task
  function editdata(value) {
    setTask(value); // Pre-fill the input field with the task value that is being edited.
    setIsediting(true); // Set editing mode to `true` so we know we are editing.
    setEdittask(value); // Set the `edittask` state to store the task being edited.
  }
 
  return (
    <>
      <div>
        <h1>TODO APP</h1>
        <input
          type="text" // Input field for the user to type a task.
          placeholder="Enter Your Task" // Placeholder text to show in the input field when it's empty.
          value={task} // Bind the value of the input field to the `task` state.
          onChange={addData} // Call `addData` whenever the user types in the input field.
        />
        <button onClick={taskadd}>{isediting ? "Update" : "Submit"}</button>{" "}
        {/* Button to either add or update a task. */}
      </div>
 
      <div className="mainData">
        <div className="data">
          {data.map((value, index) => (
            // Iterate over the `data` array and create a task element for each task.
            <h2 key={index}>
              {" "}
              {/* Use `key` to ensure each task is uniquely identified. */}
              {value} {/* Display the task value */}
              <button onClick={() => editdata(value)} className="edit">Edit </button>{" "}
              {/* Button to trigger editing a task. */}
              <button onClick={() => deleteitem(value)}>Delete</button>{" "}
              {/* Button to delete a task. */}
            </h2>
          ))}
        </div>
      </div>
    </>
  );
}
 
export default Crud; // Export the Crud component to be used elsewhere in the app.