function CompB(props){

    return <div>
        <h2>Component B</h2>
        <pre>{JSON.stringify(props)}</pre> 
        <h3>User Id:{ props.id}</h3>
        <h3>User Name:{props.name}</h3>
        <h3>Loc:{props.loc[1]}</h3>
    </div>
}

export default CompB