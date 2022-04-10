import axios from "axios";
import { useEffect, useState } from "react"
import { FaTrash } from 'react-icons/fa';

export default function Todo(props) {
    const [url] = useState("https://3001-ljavierrodrigue-fetching-2wel6kbgqeh.ws-us39.gitpod.io");
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");


    useEffect(() => {
        getTodos()
    }, [])

    const handleChange = e => {
        if (e.key !== 'Enter') {
            setTask(e.target.value);
        } else {
            // guardo la tarea
            createTask(task);
        }
    }


    const getTodos = () => {
        axios.get(`${url}/todos`)
            .then(result => {
                setTodos(result.data);
            });
    }

    const createTask = async task => {
        const result = await axios.post(`${url}/todos`, { task })
        if (result.status == 201) {
            getTodos();
        }
    }

    const deleteTask = async task => {
        const result = await axios.delete(`${url}/todos/${task.id}`)
        if (result.status == 200) {
            getTodos();
        }
    }

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-8 offset-md-2 py-2">
                        <input type="text" className="form-control" placeholder="Insert task" defaultValue={task} onKeyUp={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-md-2 py-4 overflow-scroll" >
                        <ul className="list-group" style={{ height: '300px' }}>
                            {
                                todos.length > 0 &&
                                todos.map((task) => (
                                    <li className="list-group-item list-group-item-action d-flex justify-content-between" key={task.id}>
                                        {task.task}
                                        <FaTrash onClick={() => deleteTask(task)} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}