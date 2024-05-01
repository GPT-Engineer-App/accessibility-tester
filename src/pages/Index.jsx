import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Text, VStack, useToast, Heading, Textarea } from "@chakra-ui/react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Index = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const toast = useToast();

  const handleCheckAccessibility = async () => {
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a URL to check.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    // Simulate an accessibility check
    setTimeout(() => {
      const mockResult = {
        success: true,
        report: "The page has good semantic HTML structure, but lacks ARIA attributes in some components.",
      };
      setResult(mockResult);
      setLoading(false);
    }, 2000);
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Web Accessibility Checker
        </Heading>
        <FormControl isRequired>
          <FormLabel htmlFor="url">Enter URL to check</FormLabel>
          <Input id="url" type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com" />
        </FormControl>
        <Button leftIcon={loading ? <FaTimesCircle /> : <FaCheckCircle />} colorScheme="teal" variant="solid" isLoading={loading} onClick={handleCheckAccessibility}>
          Check Accessibility
        </Button>
        {result && (
          <Box p={4} borderWidth="1px" borderRadius="lg">
            <Text fontSize="lg" fontWeight="bold">
              {result.success ? "Success:" : "Failed:"}
            </Text>
            <Textarea readOnly value={result.report} />
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
