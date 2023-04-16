import Task from '../Task/Task';
import styled from 'styled-components';


//Passing props directly
function Lane({laneId, title, error, loading, tasks , onDragStart, onDragOver, onDrop}) {

  const LaneWrapper = styled.div`
  
  text-align: left;
  padding: 0;
  background: lightGray;
  border-radius: 20px;
  min-height: 50vh;
  width: 20vw;
  

  @media (max-width: 768px) {
    
      text-align: left;
      padding: 0;
      background: lightGray;
      border-radius: 20px;
      min-height: 50vh;
      width: 94vw;
      margin: 10px;
      
      
    
  }
  
  `;


  const Title = styled.h3`
  
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid darkGray;

  `;
  

  return (
    <LaneWrapper onDragOver={onDragOver} onDrop={(e)=> onDrop(e , laneId)}>
      <Title>{title}</Title>

      {loading || error ? ( <span> {error || 'loading...'}</span>)
      : (
        tasks.map((task)=>(
          <Task 
            key={task.id}
            id={task.id}
            title={task.title}
            body = {task.body}
            onDragStart= {onDragStart}
          />
        ))
      )
      }
    </LaneWrapper>
  );
}

export default Lane;
