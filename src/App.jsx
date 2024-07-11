import React,{useState} from 'react';
import './App.css';
import Products from './Products.jsx';

function App() {
  const [search,setSearch] = useState('')
  const [data,setData] = useState([])
  const YOUR_APP_ID = "cc3c009b";
  const YOUR_APP_KEY = "0065993dc17b956316ab991e408f6605";
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response =>response.json()
    ).then(
      data => setData(data.hits)
    )
  }
  return (
    <div className="App">
     <center>
     <h1>Food Recipe</h1>
     <form action="" onSubmit={submitHandler}>
      <input type="text"  value={search} onChange={(e)=>setSearch(e.target.value)}/> <br />
      <input type="submit" value={"search"}  className='btn btn-primary' />
     </form>
     {data.length > 0 && <Products data={data} />}
     </center>
    </div>
  );
}

export default App;
