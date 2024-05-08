import prisma from "../../prisma/prisma.js";


export const getMarques =async(req,res)=>{
   
    try {
        const  marques = await prisma.marque.findMany();
        res.status(200).send(marques)

    } catch (error) {
      res.status(500).send('Server error: ' + error.message);
    }

}

export const getAllModeles =async(req,res)=>{

    try {
        const  modeles = await prisma.modele.findMany()
        res.status(200).send(modeles)

    } catch (error) {
        res.status(500).send('Server error: ' + error.message);
    }
}
export const getModelesByMarque =async(req,res)=>{
    try {
        const { marqueChoosed} = req.params
        console.log(marqueChoosed)

        const marque = await prisma.marque.findFirst({
            where:{
                marque:marqueChoosed
            }
        })
        console.log(marque)

        const  modeles = await prisma.modele.findMany({
            where:{
                marqueId:marque.id
            }
        })
        res.status(200).send(modeles)

    } catch (error) {
        res.status(500).send('Server error: ' + error.message);
    }


}