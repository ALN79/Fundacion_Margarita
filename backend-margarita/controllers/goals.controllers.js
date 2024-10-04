import { ConnectionDataBase } from "../src/database.js";

export const getInfoQuoteCtrl = async (req,res) => {
    try {
    //Conexión Base de Datos
    const connection = await ConnectionDataBase()
    //Selecciona todas las frases
    const [quotes] = await connection.query("SELECT * FROM frases_causas")

    connection.end()
    
    let randomQuoteIndex = Math.floor(Math.random() * quotes.length)

    const RandomQuote =
        {   
            id: quotes[randomQuoteIndex].id_frase,
            autor: quotes[randomQuoteIndex].autor_frase,
            frase: quotes[randomQuoteIndex].frase,
        };

    res.json([RandomQuote])

    } catch (error) {
        console.log("Error al recibir las frases", error)
        res.status(500).json({ message: "Error al obtener las frases" });
    }
    
}