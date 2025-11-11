import Header from './Header'
import Footer from './Footer'
import Food  from './Food';
import Card from './card';
import Button from './button';
import Student from './student';
import UserGreeting from './usergreeting';
import List from './List';
export default function App() {
  return (
    <>
    <Header/>
    <Footer/>
    <Food/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Button/>
    <br/>
    <Student name = 'SpongeBob' age = {30} isStudent  = {false}></Student>
    <UserGreeting isLoggedIn={false} UserName = "Divya"/>
    <List/>
    </>
  );
}
