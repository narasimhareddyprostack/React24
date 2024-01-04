import CompB from './CompB'
function CompA(){
    let eid=101
    let ename ="Rahul"
    let esal = 4500.00
    let msg ="Good Mornning"
    return <div>
            <h2>Component A</h2>
            <h3>Employee Id:{eid}</h3>
            <h3>Employee Name:{ename}</h3>
            <h3>Employee Salary:{esal}</h3>
            <hr />
            <CompB   props1={"GM"} props2={100} />
    </div>
}
export default CompA