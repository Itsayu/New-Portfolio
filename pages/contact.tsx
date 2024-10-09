// // src/pages/contact.tsx
// import React from "react";
// import ChatContact from "../src/components/ContactUs";

// export default function Contact() {
//   return (
//     <div style={{ padding: "20px", textAlign: "center", paddingBlock: "12rem" }}>
//       <h1>Contact Us</h1>
//       <ChatContact />
//     </div>
//   );
// }


// // src/pages/contact.tsx
// import React, { useEffect, useState } from "react";
// import ChatContact from "../src/components/ContactUs";

// export default function Contact() {
//   const [paddingTop, setPaddingTop] = useState("7rem"); // Default for mobile

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 992) {
//         setPaddingTop("10rem"); // For large screens
//       } else {
//         setPaddingTop("7rem"); // Default for mobile
//       }
//     };

//     handleResize(); // Set initial padding based on current window size
//     window.addEventListener("resize", handleResize); // Update padding on resize

//     return () => {
//       window.removeEventListener("resize", handleResize); // Cleanup listener
//     };
//   }, []);

//   return (
//     <div style={{ padding: "20px", textAlign: "center", paddingTop }}>
//       <h1>Contact Us</h1>
//       <ChatContact />
//     </div>
//   );
// }




// src/pages/contact.tsx
import React, { useEffect, useState } from "react";
import ChatContact from "../src/components/ContactUs";

export default function Contact() {
  const [paddingTop, setPaddingTop] = useState("7rem"); // Default for mobile

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setPaddingTop("10rem"); // For large screens
      } else {
        setPaddingTop("7rem"); // Default for mobile
      }
    };

    handleResize(); // Set initial padding based on current window size
    window.addEventListener("resize", handleResize); // Update padding on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
    };
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center", paddingBottom: "7rem", paddingTop }}>
      <ChatContact />
    </div>
  );
}
