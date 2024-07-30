// import React from "react";
// import { Link } from "react-router-dom";

// import "./AdNav.css";

// const AdNav = () => {
//   let data = [
//     { path: "/", title: "Sell Online" },
//     { path: "/how-it-works", title: "How it works" },
//     { path: "/pricing", title: "Pricing & Commission" },
//     { path: "/shipping", title: "Shipping & Returns" },
//     { path: "/grow-your-business", title: "Grow Business" },
//     { path: "/dont-have-gst", title: "Don't have GST?" },
//   ];

//   return (
//     <>
//       <div class="hd">
//         <a href="http://localhost:5173/">
//           <img
//             width="87"
//             src="https://supplier.meesho.com/images/footer-logo.svg"
//           />
//         </a>

//         <Link to={"https://supplier.meesho.com/how-it-works"}>
//           How it works
//         </Link>
//         <Link to={"/https://supplier.meesho.com/pricing"}>
//           Pricing & Commission
//         </Link>
//         <Link to={"https://supplier.meesho.com/shipping"}>
//           Shipping & Returns
//         </Link>
//         <Link to={"https://supplier.meesho.com/grow-your-business"}>
//           Grow Business
//         </Link>
//         <Link to={"https://supplier.meesho.com/dont-have-gst"}>
//           Don't have GST?
//         </Link>

//         <input class="styled" type="button" value="Login" />
//         <input class="styled-2" type="button" value="Start Selling" />
//       </div>
//     </>
//   );
// };

// export default AdNav;
import React from "react";
import { Link } from "react-router-dom";

const AdNav = () => {
  let data = [
    { path: "/", title: "Sell Online" },
    { path: "/how-it-works", title: "How it works" },
    { path: "/pricing", title: "Pricing & Commission" },
    { path: "/shipping", title: "Shipping & Returns" },
    { path: "/grow-your-business", title: "Grow Business" },
    { path: "/dont-have-gst", title: "Don't have GST?" },
  ];

  const styles = {
    hd: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      borderBottom: '1px solid #ddd',
      backgroundColor: 'white',
      height: '20px',
    },
    styled: {
      lineHeight: '2.5',
      padding: '0 20px',
      fontSize: '1rem',
      textAlign: 'center',
      color: 'deeppink',
      borderRadius: '10px',
      backgroundColor: 'white',
      border: '1px solid deeppink',
      cursor: 'pointer',
    },
    styledHover: {
      backgroundColor: 'deeppink',
      color: 'white',
    },
    styled2: {
      lineHeight: '2.5',
      padding: '0 20px',
      fontSize: '1rem',
      textAlign: 'center',
      color: 'white',
      borderRadius: '10px',
      backgroundColor: 'deeppink',
      border: '1px solid deeppink',
      cursor: 'pointer',
    },
    styled2Hover: {
      color: 'deeppink',
      backgroundColor: 'white',
    },
  };

  return (
    <div style={styles.hd}>
      <a href="http://localhost:5173/">
        <img
          width="87"
          src="https://supplier.meesho.com/images/footer-logo.svg"
          alt="Logo"
        />
      </a>

      {data.map((item) => (
        <Link key={item.path} to={item.path}>
          {item.title}
        </Link>
      ))}

      <input
        type="button"
        value="Login"
        style={styles.styled}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.styledHover.backgroundColor, e.target.style.color = styles.styledHover.color)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.styled.backgroundColor, e.target.style.color = styles.styled.color)}
      />
      <input
        type="button"
        value="Start Selling"
        style={styles.styled2}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.styled2Hover.backgroundColor, e.target.style.color = styles.styled2Hover.color)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.styled2.backgroundColor, e.target.style.color = styles.styled2.color)}
      />
    </div>
  );
};

export default AdNav;
