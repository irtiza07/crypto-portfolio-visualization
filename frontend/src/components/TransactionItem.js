import React from "react";
import { useState, useEffect } from "react";

import {
  Container,
  Center,
  Text,
  Heading,
  VStack,
  HStack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

export default function TransactionItem({ transaction }) {
  return (
    <Tr>
      <Td>{transaction["name"]}</Td>
      <Td>{transaction["symbol"]}</Td>
      <Td isNumeric>{transaction["amount"]}</Td>
      <Td isNumeric>{transaction["no_of_coins"]}</Td>
      <Td>{transaction["time_transacted"]}</Td>
    </Tr>
  );
}
