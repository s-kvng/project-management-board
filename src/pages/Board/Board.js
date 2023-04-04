import Lane from '../../components/Lane/Lane';
import {useState, useEffect} from  'react';
import './Board.css';

const lanes = [
  { id: 1, title: 'To Do' },
  { id: 2, title: 'In Progress' },
  { id: 3, title: 'Review' },
  { id: 4, title: 'Done' },
];

function Board() {

  const [loading , setLoading] = useState(true);
  const [tasks , setTask] = useState([]);
  const [error , setError] = useState('');


  useEffect(()=>{

    async function fetchData(){

      try {

        const data = await fetch(`https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks`);

      const result = await data.json();

      console.log(result);
      if(result){
        setTask(result);
        setLoading(false);
      }
        
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='Board-wrapper'>
      {lanes.map((lane) => (
        <Lane key={lane.id} title={lane.title} 
            loading={loading}  error = {error} 
            tasks = {tasks.filter((task)=>
              task.lane === lane.id
            )}
        />
      ))}
    </div>
  );
}

export default Board;
