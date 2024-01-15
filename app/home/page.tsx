'use client';

import { AspectRatio, Box, Button, Flex } from "@radix-ui/themes";
import React from "react";

const Home = () => {
  return (
    <Flex ml="9" mr="9">
      
    <AspectRatio ratio={4 / 3} className="w-full md:w-1/2">
      <img
        src="/food.png"
        alt="Delicious salad with orange juice"
        className="object-cover w-full h-full"
      />
    </AspectRatio>
    <Box>
      <h1 className="text-5xl font-bold mb-6">Veye</h1>
      <h2 className="text-3xl font-semibold mb-4">Welcome to Veye</h2>
      <p className="text-lg mb-8">
        Take a proactive role in your healthcare with Veye, an innovative
        online chronic disease management platform. Beyond weight loss, we
        focus on providing long-term solutions for improved health.
      </p>
      <Button>
        Start the Process
      </Button>
      <div className="text-center my-4">or</div>
      <Button>
        Sign In
      </Button>
      <p className="text-center text-lg">
        Don’t have an account?{" "}
        <a href="#">
          Sign Up
        </a>{" "}
        for a free account.
      </p>
    </Box>
  </Flex>
  );
};
export default Home;
