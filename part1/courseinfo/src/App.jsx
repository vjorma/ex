const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1> {props.courseName} </h1>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>{props.partName} {props.numPartExercies}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseName={course} /> 
      <Content partName={part1} numPartExercies = {exercises1} />
      <Content partName={part2} numPartExercies = {exercises2} />
      <Content partName={part3} numPartExercies = {exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App