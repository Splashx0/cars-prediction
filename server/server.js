import express from 'express';
import prisma from './prisma/prisma.js';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'))
app.get('/m', async (req, res) => {
    const marque = await prisma.marque.create({
        data:{
            marque:'CHEVROLET',
        
        }
    })

    res.send(JSON.stringify(marque))

})

app.get('/boite', async (req, res) => {
  const boite = await prisma.boite.create({
      data:{
          boite:'automatique',
      
      }
  })

  res.send(JSON.stringify(boite))

})

app.get('/modele', async (req, res) => {
    const valuesToInsert = [
        "SÉRIE 3 NOUVEAU",
        "SÉRIE 4 COUPÉ ANCIEN",
        "SÉRIE 4 COUPÉ NOUVEAU",
        "SERIE 4 GRAN COUPE ANCIEN",
        "SÉRIE 5 NOUVEAU",
        "SÉRIE 7 NOUVEAU",
        "SÉRIE 6",
        "SÉRIE 6 CABRIOLET",
        "SÉRIE 6 GRAN COUPÉ",
        "SÉRIE 7 ANCIEN",
        "X1 NOUVEAU",
        "X1 ANCIEN",
        "X2 NOUVEAU",
        "X2",
        "X3 ANCIEN",
        "X4 ANCIEN",
        "X5 ANCIEN",
        "X6 ANCEN",
        "X3 HYBRIDE",
        "X5 HYBRIDE",
        "I4 PACK M",
        "M3",
        "SÉRIE 1 ANCIEN",
        "SÉRIE 1 NOUVEAU",
        "SÉRIE 2 ACTIVE TOURER",
        "SÉRIE 2 GRAN COUPÉ",
        "SÉRIE 3 ANCIEN",
        "SÉRIE 4 GRAN COUPÉ NOUVEAU",
        "SÉRIE 5 ANCIEN"
    ]
    ;
  
    try {
      // Insert each value into the database
      for (const value of valuesToInsert) {
        await prisma.modele.create({
          data: {
            modele: value,
            marqueId:8
          }
        });
      }
  
      res.send('Values inserted successfully');
    } catch (error) {
      console.error('Error inserting values:', error);
      res.status(500).send('Error inserting values');
    }
  });

app.listen(3001, () => {
    console.log("server running on port 3001")
})