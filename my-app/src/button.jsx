export default function Button(){
const styles = {
  backgroundColor: "black",
  color:"white",
  padding: "10px",
  margin: "30px",
  borderRadius: "15px",
  border:"solid",
  cursor: "pointer",
}
    return(
    <>
    <button style = {styles}>
        BUTTON
    </button>
    <button>
        click Me!
    </button>
    </>
    );
}