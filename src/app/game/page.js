"use client";
import * as React from 'react';
import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Game() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [usedNumbers, setUsedNumbers] = useState(new Set());

  const [randomNumber2, setRandomNumber2] = useState(null);
  const [usedNumbers2, setUsedNumbers2] = useState(new Set());

  const [clickCount, setClickCount] = useState(0);

  const generateRandomNumber = () => {
    setClickCount(prevCount => prevCount + 1);
    if (clickCount === 0) {
      setRandomNumber(54);
      setRandomNumber2(2);
      return;
    }
    if (clickCount === 1) {
      setRandomNumber(1);
      setRandomNumber2(18);
      return;
    }
    if (clickCount === 2) {
      setRandomNumber(7);
      setRandomNumber2(25);
      return;
    }

    // add here for fixing number
    // eg:-
    // if (clickCount === 1) {
    //   setRandomNumber(34);
    //   setRandomNumber2(3);
    //   return;
    // }


    if (usedNumbers.size === 68) {
      alert("No Senior left!");
      return;
    }
    let newRandomNumber;
    do {
      newRandomNumber = Math.floor(Math.random() * 68) + 1;
    } while (usedNumbers.has(newRandomNumber));

    setRandomNumber(newRandomNumber);
    setUsedNumbers(
      (prevUsedNumbers) => new Set([...prevUsedNumbers, newRandomNumber])
    );

    let newRandomNumber2;
    do {
      newRandomNumber2 = Math.floor(Math.random() * 68) + 1;
    } while (usedNumbers2.has(newRandomNumber2) || newRandomNumber === newRandomNumber2); 
    setRandomNumber2(newRandomNumber2);
    setUsedNumbers2((prevUsedNumbers) => new Set([...prevUsedNumbers, newRandomNumber2]));
  };

  return (
    <Box>
      <Box className="flex justify-center items-center h-screen">
        <Box className="flex flex-col items-center">
          <Box className="flex space-x-44">
            <Box className="box1 text-center">
              <Typography variant="h4" component="h2">
                Roll no 1
              </Typography>
              <Box className="flex justify-center items-center w-64 h-64 m-4 border-4 border-black rounded-lg">
                {randomNumber && (
                  <Typography variant="h1">{randomNumber}</Typography>
                )}
              </Box>
            </Box>

            <Box className="box1 text-center">
              <Typography variant="h4" component="h2">
                Roll no 2
              </Typography>
              <Box className="flex justify-center items-center w-64 h-64 m-4 border-4 border-black rounded-lg">
                {randomNumber2 && (
                  <Typography variant="h1">{randomNumber2}</Typography>
                )}
              </Box>
            </Box>

          </Box>

          <Button
            variant="contained"
            size="large"
            onClick={generateRandomNumber}
          >
            Start
          </Button>

        </Box>
      </Box>
    </Box>
  );
}
