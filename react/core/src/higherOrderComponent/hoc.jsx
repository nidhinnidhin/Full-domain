function withGreetings(wrappedComponent){
    return function EnhancedComponent(props){
        return(
            <div>
                <h2>Hello from the HOC</h2>
                <wrappedComponent {...props}/>
            </div>
        )
    }
}

export default withGreetings; 