import {
  Container,
  Center,
  Text,
  Heading,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import TransactionsTable from "./components/TransactionsTable";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <ChakraProvider>
      <Center bg="black" color="white" padding={24}>
        <VStack>
          <Heading>Crypto Portfolio</Heading>
          <Text>This is the current state of your portfolio</Text>
          <TransactionsTable transactions={transactions}></TransactionsTable>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}

export default App;
