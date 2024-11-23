import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Button
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface PaymentSuccessProps {
  customerName: string;
  transactionAmount: number;  
  transactionCurrency: string;
  transactionReason: string;
  transactionRef: string;
}

const PaymentSuccessEmail = ({
  customerName,
  transactionAmount,
  transactionCurrency,
  transactionReason,
  transactionRef,
}: PaymentSuccessProps) => {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Body className="bg-gray-100 font-sans">
          <Container className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <Heading className="text-primary text-2xl font-bold mb-4">
              Paiement Réussi
            </Heading>
            <Text className="text-gray-700">Bonjour {customerName},</Text>
            <Text className="text-gray-700">
              Votre paiement de{" "}
              <span className="font-semibold">
                {transactionAmount} {transactionCurrency}
              </span>{" "}
              pour "<em>{transactionReason}</em>" a été effectué avec succès.
            </Text>
            <Text className="text-gray-700">
              Référence de transaction :{" "}
              <span className="font-semibold">{transactionRef}</span>
            </Text>
            <Button
              href="https://go.eventozor.com/o/a/Gr8FirsKiEqdScJYpZQ0pFOjFkwVd05NxU5q8fRNF4EYNHXTnUithFeil0KQO6Q0"
              className="bg-blue-600 rounded-md text-white font-bold border border-gray-100 hover:bg-blue-700 py-3 px-8"
            >
              Enregistrez-vous immédiatement 🚀
            </Button>
            <Text className="mt-4 text-gray-600">
              Merci d'avoir utilisé notre service.
            </Text>
            <Text className="mt-4 text-gray-600">
              Cordialement,
              <br />
              E-workspace
            </Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default PaymentSuccessEmail;
