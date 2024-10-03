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

export const uploadGoalsCtrl = async (req, res) => {
    try {
        const {titleGoal,descriptionGoal,numberContactGoal,emailContactGoal, typeGoal, amountGoal} = req.body;
        
        const connection = await ConnectionDataBase()

        const [idGoal] = await connection.query("SELECT id_tipo_causa FROM tipo_causas WHERE tipo_causa = ?", [typeGoal])

        await connection.query("INSERT INTO causas (id_tipo_causa, titulo_causa, descripcion, monto_recaudar, monto_recaudado,contact_tel_causa,contact_corr_causa, estado_causa) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [IdtypeGoal,  titleGoal, descriptionGoal, amountGoal, 0, numberContactGoal, emailContactGoal, 0])

        connection.end()

        res.status(200).json({message: "Causa subida correctamente"})

    } catch (error) {
        console.log("Error al subir las causas", error);
        res.status(500).json({ message: "Error al subir las causas" });
    }
}
