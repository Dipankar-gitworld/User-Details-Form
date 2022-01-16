import TableItem from "./TableItem";

function Table({tdata,setDel,del}){
    
    return (
        <div>
            <TableItem tdata={tdata} setDel={setDel} del={del}/>

        </div>
    );
}

export default Table;