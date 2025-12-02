import Temperature from "../components/temperature"
import UserStatus from "../components/UserStatus"
import Greeting from "../components/Greeting"
const ValidPassword = () => <h1>Valid Password </h1> 
const InValidPassword = () => <h1> In Valid Password </h1> 
const Password =({isValid}) => {
  return isValid ? <ValidPassword /> : <InValidPassword />
}
function App() {

  return (
    <>
      <Password isValid = {false} />
      <Temperature/>
      <UserStatus loggedIn = {true} isAdmin={true}/>
      <Greeting timeofDay="morning" />
    </>
  )
}

export default App
