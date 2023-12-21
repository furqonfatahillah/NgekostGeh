import "./font.css";

const Header = (props) => {
  const styleP = {
    fontSize: "20px",
    fontFamily: "Roboto",
    color: "#50555d",
    fontWeight: "500",
  };

  const styleH = {
    fontFamily: "Montserrat",
    fontSize: "30px",
    fontWeight: "800",
    color: "black",
  };

  const container = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginTop: "35px",
    flexDirection: "column",
  };
  return (
    <>
      <div style={container}>
        <h1 style={styleH}>{props.title}</h1>
        <p style={styleP}>{props.desk}</p>
      </div>
    </>
  );
};

export default Header;
