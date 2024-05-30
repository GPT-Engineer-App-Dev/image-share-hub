import { useState } from "react";
import { Box, Container, Flex, Grid, GridItem, IconButton, Image, Link, Text, VStack, Input, Button, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { FaHome, FaUser, FaUpload } from "react-icons/fa";

const Index = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [caption, setCaption] = useState("");
  const [photos, setPhotos] = useState([
    { src: "https://via.placeholder.com/200", caption: "Photo 1" },
    { src: "https://via.placeholder.com/200", caption: "Photo 2" },
    { src: "https://via.placeholder.com/200", caption: "Photo 3" },
    { src: "https://via.placeholder.com/200", caption: "Photo 4" },
  ]);

  const handlePhotoChange = (event) => {
    setSelectedPhoto(URL.createObjectURL(event.target.files[0]));
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleUpload = () => {
    if (selectedPhoto && caption) {
      const newPhoto = { src: selectedPhoto, caption };
      setPhotos([newPhoto, ...photos]);
      setSelectedPhoto(null);
      setCaption("");
    }
  };

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
            {photos.map((photo, index) => (
              <GridItem key={index}>
                <Image src={photo.src} alt={`Photo ${index + 1}`} borderRadius="md" />
                <Text mt={2}>{photo.caption}</Text>
              </GridItem>
            ))}
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
              {photos.map((photo, index) => (
                <GridItem key={index}>
                  <Image src={photo.src} alt={`User Photo ${index + 1}`} borderRadius="md" />
                  <Text mt={2}>{photo.caption}</Text>
                </GridItem>
              ))}
            </Grid>
          </VStack>
        </Box>

        {/* Upload Section */}
        <Box id="upload">
          <Text fontSize="3xl" mb={4}>Upload</Text>
          <Box borderWidth="1px" borderRadius="lg" p={4}>
            <FormControl>
              <FormLabel>Upload your photo:</FormLabel>
              <Input type="file" accept="image/*" onChange={handlePhotoChange} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Caption:</FormLabel>
              <Textarea value={caption} onChange={handleCaptionChange} placeholder="Add a caption for your photo" />
            </FormControl>
            <Button mt={4} colorScheme="blue" onClick={handleUpload}>Upload</Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;