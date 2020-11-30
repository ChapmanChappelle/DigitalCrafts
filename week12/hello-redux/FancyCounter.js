
import { connect } from 'react-redux'

function FancyCounter(props) {
    return (
        <div>
            <h1>Fancy Counter</h1>
            <h2>{props.ctr}</h2>
            <h1>{props.username}</h1>
        </div>
    )
}

// Map global state from redux to local properties 
const mapStateToProps = (state) => {
    return {
        ctr: state.counter, 
        username: state.username 
    }
}

export default connect(mapStateToProps)(FancyCounter)


// If the component is only updating the state and not displaying any value from the state then you can pass null for mapStateToProps
//export default connect(null, mapDispatchToProps)(AddCounter)