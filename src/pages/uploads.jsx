import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const booksData = [
  {
    category: "Leisure Books",
    title: "John Green - The Fault in Our Stars",
    imageSrc: "https://i.imgur.com/BdQSU1v.jpg", // Direct image link
  },
  {
    category: "Textbooks",
    title: "Mathematics in A-Level Textbook",
    imageSrc:
      "https://m.media-amazon.com/images/I/81nH2roiJqL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    category: "Self Care Books",
    title: "Nassim Nicholas Taleb - Fooled by Randomness",
    imageSrc: "https://i.imgur.com/GbhGIhc.png",
  },
  // Add more books as needed
];

const Uploads = () => {
  // Create a Set to keep track of unique titles
  const uniqueTitles = new Set();

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={8}>
      {booksData.map((book, index) => {
        // Check if the title is already in the Set
        if (uniqueTitles.has(book.title)) {
          return null; // Skip rendering if the title is repeated
        }

        // Add the title to the Set if it's not there
        uniqueTitles.add(book.title);

        return (
          <Box
            key={index}
            p="40px"
            bg="#03101c"
            rounded="8px"
            border="1px"
            borderColor="#6aa7f8"
            textAlign="center" // Center the text
          >
            <Heading size="md" mb={2} color="white">
              {book.category}
            </Heading>
            <Image
              src={book.imageSrc}
              alt={book.title}
              maxH="200px"
              mx="auto"
              mb="2"
            />
            <Text color="white">{book.title}</Text>
          </Box>
        );
      })}
    </Grid>
  );
};

export default Uploads;
