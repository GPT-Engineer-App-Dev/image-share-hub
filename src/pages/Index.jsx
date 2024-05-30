import { Box, Container, Flex, Grid, GridItem, IconButton, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaUser, FaUpload } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">PhotoShare</Text>
        <Flex>
          <Link href="#home" mx={2}>
            <IconButton aria-label="Home" icon={<FaHome />} size="lg" variant="ghost" color="white" />
          </Link>
          <Link href="#profile" mx={2}>
            <IconButton aria-label="Profile" icon={<FaUser />} size="lg" variant="ghost" color="white" />
          </Link>
          <Link href="#upload" mx={2}>
            <IconButton aria-label="Upload" icon={<FaUpload />} size="lg" variant="ghost" color="white" />
          </Link>
        </Flex>
      </Flex>

      {/* Main Content */}
      <Box p={4}>
        {/* Feed Section */}
        <Box id="home" mb={8}>
          <Text fontSize="3xl" mb={4}>Feed</Text>
          <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
            {/* Example Photos */}
            <GridItem>
              <Image src="https://via.placeholder.com/200" alt="Photo 1" borderRadius="md" />
            </GridItem>
            <GridItem>
              <Image src="https://via.placeholder.com/200" alt="Photo 2" borderRadius="md" />
            </GridItem>
            <GridItem>
              <Image src="https://via.placeholder.com/200" alt="Photo 3" borderRadius="md" />
            </GridItem>
            <GridItem>
              <Image src="https://via.placeholder.com/200" alt="Photo 4" borderRadius="md" />
            </GridItem>
          </Grid>
        </Box>

        {/* Profile Section */}
        <Box id="profile" mb={8}>
          <Text fontSize="3xl" mb={4}>Profile</Text>
          <VStack spacing={4} align="start">
            <Text fontSize="2xl">Username</Text>
            <Text fontSize="lg">Bio: This is a short bio about the user.</Text>
            <Text fontSize="xl" mt={4}>Photos</Text>
            <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
              {/* Example User Photos */}
              <GridItem>
                <Image src="https://via.placeholder.com/200" alt="User Photo 1" borderRadius="md" />
              </GridItem>
              <GridItem>
                <Image src="https://via.placeholder.com/200" alt="User Photo 2" borderRadius="md" />
              </GridItem>
            </Grid>
          </VStack>
        </Box>

        {/* Upload Section */}
        <Box id="upload">
          <Text fontSize="3xl" mb={4}>Upload</Text>
          <Box borderWidth="1px" borderRadius="lg" p={4}>
            <Text mb={2}>Upload your photo:</Text>
            <input type="file" accept="image/*" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;