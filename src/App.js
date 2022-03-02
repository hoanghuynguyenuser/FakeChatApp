
import { useState } from 'react'
import Content from './Content'


// function App() {
//   const [job, setJob] = useState('')
//   const [jobs, setJobs] = useState(() => {
//     const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//     console.log('value')
//     return storageJobs ?? []
//   })
//   const handleSubmit = () => {
//     setJobs(prev => {
//       const newJobs =[...prev, job]
//       localStorage.setItem('jobs', JSON.stringify(newJobs))
//       return newJobs
//     })
//     setJob('')
//   }

//   return (
//     <div style={{padding: 32}}>
//       <input 
//       value={job}
//       onChange={e => setJob(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Add</button>

//       <ul>
//         {jobs.map((item, index) => 
//           <li key={index}>{item}</li>
//         )}
//       </ul>
//     </div>
//   )
// }

function App() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  )
}

export default App;
