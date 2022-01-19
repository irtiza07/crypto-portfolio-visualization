import React from "react";
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
import { useState, useEffect } from "react";
import TransactionItem from "./TransactionItem";

export default function TransactionsTable({ transactions }) {
  console.log("rendering table..");
  console.log(transactions.length);
  console.log(transactions[0]);

  return (
    <Table size="sm" variant="striped" colorScheme="blackAlpha">
      <TableCaption>All crypto buy and sell records</TableCaption>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Symbol</Th>
          <Th>Amount</Th>
          <Th>Number of Coins</Th>
          <Th>Date</Th>
        </Tr>
      </Thead>
      <Tbody>
        {transactions.map((tran) => {
          return <TransactionItem transaction={tran}></TransactionItem>;
        })}
      </Tbody>
    </Table>
  );
}
