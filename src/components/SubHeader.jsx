import "./font.css";

const SubHeader = (props) => {
  const styleH = {
    color: props.color,
    fontSize: "24px",
    fontFamily: "Montserrat",
    fontWeight: "Bold",
  };

  const styleP = {
    color: props.color,
    fontSize: "18px",
    fontFamily: "Roboto",
    
  };
  return (
    <>
      <h3 style={styleH}>{props.title}</h3>
      <p style={styleP}>{props.desk}</p>
    </>
  );
};

export default SubHeader;
