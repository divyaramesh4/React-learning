const Greet = () => {
  const name = "Divya";
  const now = new Date();

  return (
    <>
      <h1>Good Morning {name}</h1>
      <p>{now.toString()}</p>
    </>
  );
};
export default Greet;