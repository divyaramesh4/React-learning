export default function Button(){
    const handleClick = (e) => e.target.text = 'OUCH!!';

return (
  <button onDoubleClick={(e) => console.log(handleClick(e))}>
    Click Me 😀
  </button>
);
}