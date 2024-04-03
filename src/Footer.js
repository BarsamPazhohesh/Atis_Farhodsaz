function Footer() {
  return (
    <div style={Style.main_style}>
      <div style={Style.div_style}></div>
      <div style={Style.div_style}></div>
      <div style={Style.div_style}></div>
    </div>
  );
}

export default Footer;

let Style = {
  div_style: {
    backgroundColor: "Gray",
    height: "40vh",
    width: "45vh",
    borderRadius: "20px",
    margin: "0px 10px 0px 10px",
  },
  main_style: {
    display: "flex",
    flexDirection: "row",
    // height: "30vh",
    padding: "10px",
    justifyContent: "space-around",
    borderTop: "3px solid black",
  },
};
