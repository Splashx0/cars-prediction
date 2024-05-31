export const getAnswersOnly = (carData,QuestionAndAnswersList) => {
    QuestionAndAnswersList?.forEach((item) => {
      switch (item.question) {
        case 'Marque':
          carData.marque = item.answer;
          break;
        case 'Modele':
          carData.modele = item.answer;
          break;
        case 'Energie':
          carData.energie = item.answer;
          break;
        case 'Boite Vitesse':
          carData.boite = item.answer;
          break;
        case 'Annee de mise en circulation':
          carData.annee = Number(item.answer);
          break;
        case 'Nombre de Km parcouru':
          carData.kilometrage = Number(item.answer);
          break;
        case 'Puissance fiscale':
          carData.puissance_fiscale = Number(item.answer);
          break;
        default:
          break;
      }
    });
  }
