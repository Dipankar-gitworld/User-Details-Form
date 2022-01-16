import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';



function App() {
  let [tdata, setTdata] =useState([]);
  let[f,setF] = useState([]);
  let [page, setPage] = useState(1);
  let [del, setDel] = useState(false);
  
  useEffect(()=>{
    fetch(`http://localhost:3004/employee-details?_page=${page}&_limit=5`)
    .then(res=> res.json())
    .then(data=>{
      setTdata(data);
      setF(data);
    })
    .catch(err=> console.log("error", err));
     
     console.log("aaaa");
    

  },[page,del]);

  

  const getData = (data)=>{
    if(tdata.length<5){
      setTdata([...tdata,data]);
      setF([...f,data]);

    }


  }


 const filter = ()=>{
   
  tdata.sort((a,b)=>{
    return a.salary-b.salary;
  });
  
   setTdata([...tdata]);
     
 }
 const filter1 = ()=>{
  tdata.sort((a,b)=>{
    return b.salary-a.salary;
  });
  
  setTdata([...tdata]);
     
 }

 const HandleSelect = (e)=>{
   setTdata(f);
   
  
     if(e.target.value==="IT"){
       setTdata(
         f.filter((el)=> {return el.department==="IT"})
       )

     }else if(e.target.value==="Finance"){
      setTdata(
        f.filter((el)=> {return el.department==="Finance"})
      )
   
     
   }


 }
  

  return (
    <div className='center'>
        <Form getData={getData}/>
        <Table tdata={tdata} setDel={setDel} del={del}/>
        <select name="department" id="" onChange={HandleSelect}>
          <option value="">filter by dept</option>
          <option value="IT">IT</option>
          <option value="Finance">Finance</option>
        </select>
        <button onClick={filter}>salary by ascending</button>
        <button onClick={filter1}>salary by descending</button>
        <div>
          <button disabled={page===1} onClick={()=>{setPage(page-1)}}>prev</button>
          <button onClick={()=>{setPage(page+1)}}>next</button>
        </div>
      
    </div>
  );
  


    

  
}

export default App;
