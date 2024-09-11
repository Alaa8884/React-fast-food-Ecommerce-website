/* eslint-disable react/prop-types */
function Helmet(props) {
  document.title = "Fast Food E-commerce " + props.title +" page";
  return <div className="w-100">{props.children}</div>;
}

export default Helmet
