import prisma from "../../prisma/prisma.js";


export const getQuestions =async(req,res)=>{
   
    try {
        const  questions = await prisma.question.findMany()
        res.status(200).send(questions)

    } catch (error) {
      res.status(500).send('Server error: ' + error.message);
    }

}

export const getAdvancedQuestions =async(req,res)=>{
   
  try {
    const advancedQuestions = await prisma.question.findMany({
      where: {
        type:{has:"ADVANCED"}
      }
    });
      res.status(200).send(advancedQuestions)

  } catch (error) {
    res.status(500).send('Server error: ' + error.message);
  }

}

export const getBasicQuestions =async(req,res)=>{
   
  try {
    const basicQuestions = await prisma.question.findMany({
      where: {
        type:{has:"BASIC"}
      }
    });
      res.status(200).send(basicQuestions)

  } catch (error) {
    res.status(500).send('Server error: ' + error.message);
  }

}