import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
//import carimg from '../assets/aboutuscar.jpg'
import { motion } from "framer-motion"

function About() {
  return (
    <div>

      <Navbar />
      <div className=' flex flex-col justify-center  '>

        <motion.div
          variants={{
            start: { opacity: 0, y: 0 },
            end: { opacity: 1, y: 75 }
          }}
          initial="start"
          whileInView="end"
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ zIndex: -1 }}
          className=' z-0 flex flex-col  items-center mx-auto max-w-[1140px] mb-[200px] mt-3 '>
          <h1 className=' text-[#F7C213] text-5xl md:text-6xl font-bold uppercase'>About us!</h1>
          <p className=' pt-[60px] text-wrap text-center px-6 text-xl md:text-2xl'>A l'ère du numérique, nous vous invitons à découvrir notre application révolutionnaire 'Carsale' pour estimer la valeur de votre voiture. 'Carsale' est une plateforme intuitive et performante qui vous permet d'obtenir une estimation précise de la valeur de votre voiture en seulement quelques étapes.
            La valorisation de votre voiture n'a jamais été aussi simple et précise.</p>
          <p className=' pt-[20px] text-wrap text-center px-6 text-xl md:text-2xl'> 'Carsale' vous assistera dans la détermination d'un prix raisonnable. Si vous êtes intéressé à vendre votre voiture, 'Carsale' vous accompagnera dans vos choix.
            Nous vous invitons à découvrir 'Carsale' par vous-même en consultant notre site web. Permettez-nous de vous faire découvrir comment vous pouvez obtenir une estimation fiable de votre bien précieux ou bien encore évaluer vos options d’achat.</p>
          <p className=' pt-[20px] text-wrap text-center px-6 text-xl md:text-2xl'>Prenez en main votre avenir automobile dès maintenant en utilisant 'Carsale' et constatez comment cette application peut vous aider à apprécier la valeur de votre bien.</p>
        </motion.div>
        <Footer />
      </div>


    </div>
  )
}

export default About