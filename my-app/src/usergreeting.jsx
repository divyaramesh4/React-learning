export default function UserGreeting(props){
    return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.UserName}!</h2> :<h2 className="login-prompt">Please log in to continue</h2>)
}