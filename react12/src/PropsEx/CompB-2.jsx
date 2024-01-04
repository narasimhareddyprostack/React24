let CompB = (props)=>{



    return <div>
        <h3>Component B</h3>
       {/*  <pre>{x}</pre> */}
        <pre>{JSON.stringify(props)}</pre>
        <h3>Name:{props.name}</h3>
        <h3>Salary:{props.salary}</h3>

    </div>
}
export default CompB