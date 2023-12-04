import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";
import ContactMeSection from "./ContactMeSection";

/**
 * This is a global component that uses context to display a global alert message.
 */
 
function Warning(state) {

  console.log(state);
  
  const { isOpen, type, message, onClose } = state;
  const cancelRef = useRef();
  const isSuccess = type === "success"

  const hello = state.type;
  console.log(hello);
  console.log(isOpen);
  console.log(message);


  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent py={4} backgroundColor={isSuccess ? '#81C784' : '#FF8A65'}>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {isSuccess ? 'All good!' : 'Oops!'}
          </AlertDialogHeader>
          <AlertDialogBody>{message}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Warning;