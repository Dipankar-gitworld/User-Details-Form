import "./TableItem.css";
const axios = require("axios");

function TableItem({tdata,setDel,del}){
    
    return (
        <div className="itemdiv">
            <table>
                <thead>
                    <tr>
                        <th >NAME</th>
                        <th >AGE</th>
                        <th >ADDRESS</th>
                        <th >DEPARTMENT</th>
                        <th >SALARY</th>
                        <th >MARAITAL STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {tdata.map((el)=>{
                        return (
                            <tr key={el.id}>
                              <td >{el.name}</td>
                              <td>{el.age}</td>
                              <td>{el.address}</td>
                              <td>{el.department}</td>
                              <td>{el.salary}</td>
                              <td>{el.maraitalStartus}</td>
                              <td><button onClick={()=>{
                                  axios.delete(`http://localhost:3004/employee-details/${el.id}`)

                                  .catch(err=> console.log(err));
                                  if(del===false){
                                      setDel(true);
                                  }else{
                                      setDel(false);
                                  }
                                  
                              }}>delete</button></td>
                            </tr>
                        );
                        
                    })}
                </tbody>

                
            </table>


        </div>
    );
}

export default TableItem;