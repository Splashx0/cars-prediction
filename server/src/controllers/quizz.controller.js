import prisma from "../../prisma/prisma.js";


export const createQuizz =async(req,res)=>{

    const {id} = req.body;
    try {
        const  quizz = await prisma.quizz.create({
            data:{
                clientId:id,
            }
        });
        res.status(200).send(quizz)

    } catch (error) {
      res.status(500).send('Server error: ' + error.message);
    }

}


export const updateQuizz =async(req,res)=>{
    

    try {
        const {id,type} = req.body;

        const questionsToAdd = await prisma.question.findMany({

            where: {
                type:{has:type}
            }
        });

        const updatedQuizz = await prisma.quizz.update({
            where: {
                id 
            },
            data: {
                type,
                questions: {
                    connect: questionsToAdd.map(question => ({ id: question.id }))
                }
            }
        });
        res.status(200).send(updatedQuizz)

    } catch (error) {
      res.status(500).send('Server error: ' + error.message);
    }

}

export const getQuizzs =async(req,res)=>{

    const {id} = req.body;
    try {
        const  quizzs = await prisma.quizz.findMany({
            where:{
                clientId:id,
            },
            include:{questions:{
            select:{question:true,reponses:{
                where:{clientId:id}
            }}
            }}
        });
        res.status(200).send(quizzs)

    } catch (error) {
      res.status(500).send('Server error: ' + error.message);
    }

}

export const saveResponse =async(req,res)=>{

    const {id,question,response} = req.body;
    try {

        const questionAnswered = await prisma.question.findFirst({
            where:{
                    question
            }
        })

        const  responseToSave = await prisma.response.create({
           data:{
            response,
            questionId:questionAnswered.id,
            clientId:id
           } 
        });

        res.status(200).send(responseToSave)

    } catch (error) {
      res.status(500).send('Server error: ' + error.message);
    }

}

export const setEstimation =async(req,res)=>{
    

    try {
        let {id,estimation} = req.body;
        estimation=Number(estimation)

        const updatedQuizz = await prisma.quizz.update({
            where: {
                id 
            },
            data: {
                estimation
            }
        });
        res.status(200).send(updatedQuizz)

    } catch (error) {
      res.status(500).send('Server error: ' + error.message);
    }

}