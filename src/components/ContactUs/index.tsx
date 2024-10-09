// import React, { useState, useEffect } from "react";
// import Link from "next/link"; // Import Link from Next.js
// import css from "../../styles/scss/structure/contact.module.scss";
// import emailjs from "emailjs-com";

// interface ChatMessage {
//   sender: "bot" | "user";
//   text: string | JSX.Element; // Allow for JSX in messages
// }

// export default function ChatContact() {
//   const [messages, setMessages] = useState<ChatMessage[]>([]);
//   const [userInput, setUserInput] = useState<string>("");
//   const [userName, setUserName] = useState<string>("");
//   const [userCountry, setUserCountry] = useState<string>(""); // Added country state
//   const [userMobile, setUserMobile] = useState<string>("");
//   const [userEmail, setUserEmail] = useState<string>("");
//   const [userMessage, setUserMessage] = useState<string>("");
//   const [step, setStep] = useState<number>(0);
//   const [isWaitingForConfirmation, setIsWaitingForConfirmation] =
//     useState<boolean>(true);
//   const [errorMessage, setErrorMessage] = useState<string>("");

//   useEffect(() => {
//     const greeting = getGreeting();
//     setMessages([{ sender: "bot", text: `Hello, a very ${greeting}` }]);

//     const timer = setTimeout(() => {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { sender: "bot", text: "Shall we proceed?" },
//       ]);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, []);

//   const getGreeting = () => {
//     const hour = new Date().getHours();
//     if (hour < 12) return "good morning";
//     if (hour < 18) return "good afternoon";
//     return "good evening";
//   };

//   const handleYesClick = () => {
//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { sender: "user", text: "Yes" },
//     ]);
//     proceedToNextStep();
//   };

//   const handleNoClick = () => {
//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { sender: "user", text: "No" },
//       {
//         sender: "bot",
//         text: "Okay, let me know when you are ready to proceed.",
//       },
//     ]);
//     setIsWaitingForConfirmation(false);
//   };

//   const proceedToNextStep = () => {
//     setIsWaitingForConfirmation(false);
//     setStep(1);
//     setTimeout(() => {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { sender: "bot", text: "Please enter your name:" },
//       ]);
//     }, 1000);
//   };

//   const handleUserInput = () => {
//     const userInputs = [
//       userName,
//       userCountry, // Include country input
//       userMobile,
//       userEmail,
//       userMessage,
//     ];

//     if (!userInputs[step - 1]?.trim()) {
//       setErrorMessage("This field cannot be empty.");
//       return;
//     }

//     if (step === 2 && !/^[a-zA-Z\s]+$/.test(userCountry)) {
//       setErrorMessage("Please enter a valid country name.");
//       return;
//     }

//     if (step === 3 && !/^\d{10}$/.test(userMobile)) {
//       setErrorMessage("Please enter a correct phone number.");
//       return;
//     }

//     if (step === 4 && !/\S+@\S+\.\S+/.test(userEmail)) {
//       setErrorMessage("Please enter a valid email address.");
//       return;
//     }

//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { sender: "user", text: userInputs[step - 1] },
//     ]);

//     setErrorMessage(""); // Clear error message
//     setUserInput(""); // Clear input field

//     const responses = [
//       `Hello, ${userName.split(" ")[0]}!`,
//       "Please enter your country:",
//       "Please enter your mobile number:",
//       "Please enter your email:",
//       "Any message you want to leave for us?",
//       "Thank you! We will contact you soon.",
//     ];

//     setTimeout(() => {
//       if (step < responses.length) {
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { sender: "bot", text: responses[step] },
//         ]);
//       }

//       if (step === responses.length - 1) {
//         sendEmail();
//         displaySocialMediaLinks();
//       }

//       setStep(step + 1);
//     }, 1000);
//   };

//   const displaySocialMediaLinks = () => {
//     setTimeout(() => {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         {
//           sender: "bot",
//           text: (
//             <div>
//               You can also reach out to me on social media:
//               <div>
//                 <Link href="https://www.linkedin.com/in/itsayu" target="_blank" rel="noopener noreferrer">LinkedIn</Link> |{" "}
//                 <Link href="https://twitter.com/its_AKT_" target="_blank" rel="noopener noreferrer">X (Twitter)</Link> |{" "}
//                 <Link href="https://www.instagram.com/its_a.k.t" target="_blank" rel="noopener noreferrer">Instagram</Link> |{" "}
//                 <Link href="https://www.github.com/itsayu" target="_blank" rel="noopener noreferrer">GitHub</Link>
//               </div>
//             </div>
//           ),
//         },
//       ]);
//     }, 2000);
//   };

//   const sendEmail = () => {
//     const templateParams = {
//       user_name: userName,
//       user_country: userCountry,
//       user_mobile: userMobile,
//       user_email: userEmail,
//       user_message: userMessage,
//     };

//     emailjs
//       .send(
//         "your_service_id",
//         "your_template_id",
//         templateParams,
//         "your_user_id"
//       )
//       .then((response) => {
//         console.log("Email sent successfully!", response.status, response.text);
//       })
//       .catch((error) => {
//         console.error("Failed to send email:", error);
//       });
//   };

//   return (
//     <>
//       <p className={css.subtitle}>We'd love to hear from you!</p>
//       <h1 className={css.title}>Contact Us</h1>
//       <div className={css.chatContainer}>
//         <div className={css.chatBox}>
//           {messages.map((message, index) => (
//             <div
//               key={index}
//               className={
//                 message.sender === "bot" ? css.botMessage : css.userMessage
//               }
//             >
//               {message.text}
//             </div>
//           ))}
//           {errorMessage && <div className={css.errorMessage}>{errorMessage}</div>}
//         </div>

//         {isWaitingForConfirmation ? (
//           <div className={css.buttonContainer}>
//             <button onClick={handleYesClick} className={css.confirmButton}>
//               Yes
//             </button>
//             <button onClick={handleNoClick} className={css.confirmButton}>
//               No
//             </button>
//           </div>
//         ) : (
//           step < 6 && ( // Updated to accommodate country step
//             <div className={css.inputContainer}>
//               <input
//                 type="text"
//                 placeholder={
//                   step === 1
//                     ? "Enter your name..."
//                     : step === 2
//                     ? "Enter your country..." // Asking for country
//                     : step === 3
//                     ? "Enter your mobile number..."
//                     : step === 4
//                     ? "Enter your email..."
//                     : "Any message..."
//                 }
//                 value={
//                   step === 1
//                     ? userName
//                     : step === 2
//                     ? userCountry // Handle country input
//                     : step === 3
//                     ? userMobile
//                     : step === 4
//                     ? userEmail
//                     : userMessage
//                 }
//                 onChange={(e) => {
//                   if (step === 1) setUserName(e.target.value);
//                   else if (step === 2) setUserCountry(e.target.value); // Update state for country
//                   else if (step === 3) setUserMobile(e.target.value);
//                   else if (step === 4) setUserEmail(e.target.value);
//                   else setUserMessage(e.target.value);
//                 }}
//                 className={css.chatInput}
//                 onKeyPress={(e) => e.key === "Enter" && handleUserInput()}
//                 autoFocus={step !== 0} // Focus input when displayed
//               />
//               <button onClick={handleUserInput} className={css.sendButton}>
//                 ✔️
//               </button>
//             </div>
//           )
//         )}
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import Link from Next.js
import css from "../../styles/scss/structure/contact.module.scss";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Correct import
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"; // Correct import for send icon
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"; // Import brand icons

interface ChatMessage {
  sender: "bot" | "user";
  text: string | JSX.Element; // Allow for JSX in messages
}

export default function ChatContact() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userCountry, setUserCountry] = useState<string>(""); // Added country state
  const [userMobile, setUserMobile] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userMessage, setUserMessage] = useState<string>("");
  const [step, setStep] = useState<number>(0);
  const [isWaitingForConfirmation, setIsWaitingForConfirmation] =
    useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const greeting = getGreeting();
    setMessages([{ sender: "bot", text: `Hello, a very ${greeting}` }]);

    const timer = setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Shall we proceed?" },
      ]);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "good morning";
    if (hour < 18) return "good afternoon";
    return "good evening";
  };

  const handleYesClick = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: "Yes" },
    ]);
    proceedToNextStep();
  };

  const handleNoClick = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: "No" },
      {
        sender: "bot",
        text: "Okay, Visit again you are ready to proceed.",
      },
      {
        sender: "bot",
        text: "If you want to fill the from again, refresh the page and start again.",
      },
      {
        sender: "bot",
        text: "Thank you!",
      },
    ]);
    setIsWaitingForConfirmation(false);
  };

  const proceedToNextStep = () => {
    setIsWaitingForConfirmation(false);
    setStep(1);
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Please enter your name" },
      ]);
    }, 1000);
  };

  const handleUserInput = () => {
    const userInputs = [
      userName,
      userCountry, // Include country input
      userMobile,
      userEmail,
      userMessage,
    ];

    if (!userInputs[step - 1]?.trim()) {
      setErrorMessage("This field cannot be empty.");
      return;
    }

    if (step === 2 && !/^[a-zA-Z\s]+$/.test(userCountry)) {
      setErrorMessage("Please enter a valid country name.");
      return;
    }

    if (step === 3 && !/^\d{10}$/.test(userMobile)) {
      setErrorMessage("Please enter a correct phone number.");
      return;
    }

    if (step === 4 && !/\S+@\S+\.\S+/.test(userEmail)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Update messages with user input
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: userInputs[step - 1] },
    ]);

    setErrorMessage(""); // Clear error message
    setUserInput(""); // Clear input field

    const responses = [
      `Hello, ${userName.split(" ")[0]}!`, // Greeting message now displays correctly
      "Please enter your country",
      "Please enter your mobile number",
      "Please enter your email",
      "Any message you want to leave for us?",
      "Thank you! We will contact you soon.",
    ];

    // Display bot responses after input
    setTimeout(() => {
      if (step === 1) {
        // Display greeting after userName is set
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: `Hello, ${userName.split(" ")[0]}!` }, // Greeting logic here
        ]);
      }

      if (step < responses.length) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: responses[step] },
        ]);
      }

      if (step === responses.length - 1) {
        sendEmail();
        displaySocialMediaLinks();
      }

      setStep(step + 1);
    }, 1000);
  };

  const displaySocialMediaLinks = () => {
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "bot",
          text: (
            <div>
              You can also reach out to me on social media:
              <div>
                <Link
                  href="https://www.linkedin.com/in/itsayu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>{" "}
                <Link
                  href="https://twitter.com/its_AKT_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>{" "}
                <Link
                  href="https://www.instagram.com/its_a.k.t"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>{" "}
                <Link
                  href="https://www.github.com/itsayu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>
            </div>
          ),
        },
      ]);
    }, 2000);
  };

  const sendEmail = () => {
    const templateParams = {
      user_name: userName,
      user_country: userCountry,
      user_mobile: userMobile,
      user_email: userEmail,
      user_message: userMessage,
    };

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        templateParams,
        "your_user_id"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };

  return (
    <>
      <p className={css.subtitle}>We&apos;d love to hear from you!</p>
      <h1 className={css.title}>Contact Us</h1>
      <div className={css.chatContainer}>
        <div className={css.chatBox}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={
                message.sender === "bot" ? css.botMessage : css.userMessage
              }
            >
              {message.text}
            </div>
          ))}
          {errorMessage && (
            <div className={css.errorMessage}>{errorMessage}</div>
          )}
        </div>

        {isWaitingForConfirmation ? (
          <div className={css.buttonContainer}>
            <button onClick={handleYesClick} className={css.confirmButton}>
              Yes
            </button>
            <button onClick={handleNoClick} className={css.confirmButton}>
              No
            </button>
          </div>
        ) : (
          step < 6 && ( // Updated to accommodate country step
            <div className={css.inputContainer}>
              <input
                type="text"
                placeholder={
                  step === 1
                    ? "Enter your name..."
                    : step === 2
                    ? "Enter your country..."
                    : step === 3
                    ? "Enter your mobile number..."
                    : step === 4
                    ? "Enter your email..."
                    : "Any message..."
                }
                value={
                  step === 1
                    ? userName
                    : step === 2
                    ? userCountry
                    : step === 3
                    ? userMobile
                    : step === 4
                    ? userEmail
                    : userMessage
                }
                onChange={(e) => {
                  if (step === 1) setUserName(e.target.value);
                  else if (step === 2)
                    setUserCountry(e.target.value); // Update state for country
                  else if (step === 3) setUserMobile(e.target.value);
                  else if (step === 4) setUserEmail(e.target.value);
                  else setUserMessage(e.target.value);
                }}
                // className={css.input}
                className={css.chatInput}
                onKeyPress={(e) => e.key === "Enter" && handleUserInput()}
                autoFocus={step !== 0} // Focus input when displayed
              />
              <button onClick={handleUserInput} className={css.sendButton}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          )
        )}
      </div>
    </>
  );
}
