"use client";

import * as React from 'react';
import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';
const tasks = [
  { task_id: "T1", task_desc: "Speak 2 mins on the topic - A day as HOD of IT dept (try to keep it funny)" },
  { task_id: "T2", task_desc: "Mimic your favorite professor" },
  { task_id: "T3", task_desc: "Mimic your friend" },
  { task_id: "T4", task_desc: "Share best memory" },
  { task_id: "T5", task_desc: "Share a secret of your friend" },
  { task_id: "T6", task_desc: "Sing a song" },
  { task_id: "T7", task_desc: "Dance (Hook Step) - Chikni Chameli, Sheela ki jeewani, munni badnam huii, bum diggy diggy bum" },
  { task_id: "T8", task_desc: "Confession" },
  { task_id: "T9", task_desc: "Share a funny memory" },
  { task_id: "T10", task_desc: "Sing a Hindi song in foreign accent" },
  { task_id: "T11", task_desc: "Ramp walk with your friend or professor" },
  { task_id: "T12", task_desc: "Requires 4 people- All people will wear headphones blasting loud music, while the 3 other people stand in a line and say a humorous or random dialogue loudly. The person with the headphones must try to hear what is the first person trying to speak and after guessing the line person will pass that line to another person and last person in the line would be considered as the final line" },
];


function GradientCircularProgress() {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
    </React.Fragment>
  );
}

export default function Home() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [usedNumbers, setUsedNumbers] = useState(new Set());

  const [selectedTask, setSelectedTask] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateRandomNumber = () => {
    if (usedNumbers.size === 68) {
      alert("No numbers left!");
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

    setIsLoading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * tasks.length);
      const randomTask = tasks[randomIndex];
      setSelectedTask(randomTask);
      setIsLoading(false);
    }, 1500);
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
                {randomNumber && (
                  <Typography variant="h1">{randomNumber}</Typography>
                )}
              </Box>
            </Box>

            <Box className="box2 text-center">
              <Typography variant="h4" component="h2">
                Task
              </Typography>
              <Box className="flex justify-center items-center w-64 h-64 m-4 border-4 border-black rounded-lg">
                {
                  isLoading ? (
                    <GradientCircularProgress/>
                  ) : (
                    selectedTask && <Typography variant="h1">{selectedTask.task_id}</Typography>
                  )
                }
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

          

          <Box className=' h-32 w-10/12 m-10 border-red-950'>
            {
              isLoading ? (
                <><Skeleton /><Skeleton animation="wave" /><Skeleton animation={false} /></>
              ):(
                selectedTask && <Typography variant="h4" >{selectedTask.task_desc}</Typography>
              )
            }
          </Box>


        </Box>
      </Box>
    </Box>
  );
}
