import React from "react";
import { ChakraProvider, Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

const ResponsiveBox = motion(Box);

const App = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <ChakraProvider>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} p={6}>
        <ResponsiveBox
          bg="red.300"
          p={4}
          borderRadius="md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Text fontSize="xl" textAlign="center">
            Block 1
          </Text>
        </ResponsiveBox>

        <ResponsiveBox
          bg="blue.300"
          p={4}
          borderRadius="md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Text fontSize="xl" textAlign="center">
            {isTabletOrMobile ? "Mobile View" : "Desktop View"}
          </Text>
        </ResponsiveBox>

        <ResponsiveBox
          bg="green.300"
          p={4}
          borderRadius="md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Text fontSize="xl" textAlign="center">
            Block 3
          </Text>
        </ResponsiveBox>
      </SimpleGrid>
    </ChakraProvider>
  );
};

export default App;