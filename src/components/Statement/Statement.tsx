// import React from "react";
// import {
//   Flex,
//   chakra,
//   useColorModeValue,
//   VStack,
//   Text,
// } from "@chakra-ui/react";
// import { useHotkeys } from "react-hotkeys-hook";

// interface StatementProps {
//   input: string;
//   return: string;
//   visibleIndex: number;
//   thisIndex: number;
//   setVisibleIndex: (x: number | ((x: number) => number)) => void;
// }

// const Statement = ({
//   input,
//   return: result,
//   visibleIndex,
//   thisIndex,
//   setVisibleIndex,
// }: StatementProps): JSX.Element => {
//   const [displayedIndex, setDisplayedIndex] = React.useState(0);
//   const [showResult, setShowResult] = React.useState(false);
//   useHotkeys("enter", () => {
//     if (thisIndex === visibleIndex) {
//       setDisplayedIndex(input.length);
//       setShowResult(true);
//       setTimeout(() => {
//         setVisibleIndex((x) => x + 1);
//       }, 400);
//     }
//   });
//   const visible: boolean = thisIndex <= visibleIndex;
//   React.useEffect(() => {
//     if (!visible) {
//       return;
//     }
//     if (showResult) {
//       return;
//     }
//     if (visibleIndex !== 0) {
//       if (displayedIndex >= input.length) {
//         setTimeout(() => {
//           setShowResult(true);
//         }, 200);

//         setTimeout(() => {
//           setVisibleIndex(visibleIndex + 1);
//         }, 500);
//       }
//     }
//     if (visibleIndex === 0 && displayedIndex === 0) {
//       setTimeout(() => {
//         setDisplayedIndex((i) => i + 1);
//       }, 3000);
//       return;
//     }
//     setTimeout(() => {
//       setDisplayedIndex(displayedIndex + 1);
//     }, 25 + Math.random() * 75);
//   }, [
//     displayedIndex,
//     input.length,
//     showResult,
//     visibleIndex,
//     setVisibleIndex,
//     thisIndex,
//     visible,
//   ]);
//   const initialState =
//     !showResult && displayedIndex >= input.length && thisIndex === 0;

//   const shownInput = input.substring(0, displayedIndex);
//   return (
//     <>
//       <VStack
//         spacing={1}
//         alignItems="flex-start"
//         visibility={visible ? "visible" : "hidden"}
//       >
//         <Flex fontFamily="Ubuntu Mono" fontSize="lg">
//           <chakra.span
//             mr={2}
//             color={useColorModeValue("purple.500", "purple.300")}
//             fontWeight="bold"
//           >
//             &gt;
//           </chakra.span>{" "}
//           {shownInput}
//           {/* <chakra.span color="black">{shownInput}</chakra.span> */}
//         </Flex>
//         <Text
//           fontFamily="Ubuntu Mono"
//           fontSize="lg"
//           color={useColorModeValue("gray.500", "gray.400")}
//           visibility={showResult || initialState ? "visible" : "hidden"}
//           alignSelf="flex-start"
//           dangerouslySetInnerHTML={{
//             __html: initialState
//               ? "Press enter to see what I am about"
//               : result,
//           }}
//         />
//       </VStack>
//     </>
//   );
// };

// export default Statement;







import React, { useEffect } from 'react';
import styles from '../../styles/AboutTerminal.module.css';

interface StatementProps {
  input: string;
  return: string;
  thisIndex: number;
  visibleIndex: number;
  setVisibleIndex: (index: number) => void;
}

const Statement: React.FC<StatementProps> = ({
  input,
  return: returnValue,
  thisIndex,
  visibleIndex,
  setVisibleIndex,
}) => {
  useEffect(() => {
    if (thisIndex === visibleIndex) {
      const timeout = setTimeout(() => {
        setVisibleIndex(thisIndex + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [thisIndex, visibleIndex, setVisibleIndex]);

  if (thisIndex > visibleIndex) return null;

  return (
    <div className={styles.statement}>
      <div>
        <span className={styles.prompt}>&gt; </span>
        {input}
      </div>
      <div 
        className={styles.returnValue}
        dangerouslySetInnerHTML={{ __html: returnValue }}
      />
    </div>
  );
};

export default Statement;