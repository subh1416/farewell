"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Home() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [usedNumbers, setUsedNumbers] = useState([]);

  const generateRandomNumber = () => {
    let newRandomNumber;
    do {
      newRandomNumber = Math.floor(Math.random() * 100) + 1;
    } while (usedNumbers.includes(newRandomNumber));

    setRandomNumber(newRandomNumber);
    setUsedNumbers([...usedNumbers, newRandomNumber]);
  };


  return (
    <Box>
      <Box className="flex justify-center items-center h-screen">
        <Box className="flex flex-col items-center">
          <Box className="flex space-x-44">
            <Box className="box1 text-center">
              <Typography variant="h4" component="h2">
                Roll no
              </Typography>
              <Box className="flex justify-center items-center w-64 h-64 m-4 border-4 border-black rounded-lg">
              {randomNumber && <Typography variant="h1">{randomNumber}</Typography>}
              </Box>
            </Box>

            <Box className="box2 text-center">
              <Typography variant="h4" component="h2">
                Task
              </Typography>
              <Box className="flex justify-center items-center w-64 h-64 m-4 border-4 border-black rounded-lg"></Box>
            </Box>
          </Box>

          <Button variant="contained" size="large"  onClick={generateRandomNumber}>
            Start
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
