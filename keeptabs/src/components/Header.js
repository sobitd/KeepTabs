import Button from "./Buttons";

const Header = (props) => {
  const onClick = (e) => {
    alert("I got pressed");
  };
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button onClick={onClick} color = 'green' text='hello'/>

    </header>
  );
};

export default Header;
