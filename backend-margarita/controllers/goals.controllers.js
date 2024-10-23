import { ConnectionDataBase } from "../src/database.js";

export const getInfoQuoteCtrl = async (req,res) => {
    try {
    //Conexión Base de Datos
    const connection = await ConnectionDataBase()
    //Selecciona todas las frases
    const [quotes] = await connection.query("SELECT * FROM frases_causas")

    connection.end()
    
    //Selecciona una frase random
    let randomQuoteIndex = Math.floor(Math.random() * quotes.length)

    const RandomQuote =
        {   
            id: quotes[randomQuoteIndex].id_frase,
            autor: quotes[randomQuoteIndex].autor_frase,
            frase: quotes[randomQuoteIndex].frase,
        };

    //La envia al frontend
    res.json([RandomQuote])

    } catch (error) {
        console.log("Error al recibir las frases", error)
        res.status(500).json({ message: "Error al obtener las frases" });
    }
    
}

export const uploadGoalsCtrl = async (req, res) => {
    //Agarra la información de la causa
    try {
        const { titleGoal, descriptionGoal, numberContactGoal, emailContactGoal, typeGoal, amountGoal } = req.body;
        
        console.log(req.body);

        const connection = await ConnectionDataBase();

        //Verifica la autorización del usuario
        const user = req.user;

        if (!user) {
            return res.status(401).json({ message: "No autorizado" });
        }

        //Define el tipo de causa
        const [idGoal] = await connection.query("SELECT id_tipo_causa FROM tipos_causa WHERE tipo_causa = ?", [typeGoal]);

        if (idGoal.length === 0) {
            return res.status(404).json({ message: "Tipo de causa no encontrado" });
        }

        const idTypeGoal = idGoal[0].id_tipo_causa;

        // Si la meta no es "Dinero", amountGoal debe ser 0
        const finalAmountGoal = typeGoal === 'Dinero' ? amountGoal : 0;

        await connection.query(
            "INSERT INTO causas (id_tipo_causa, id_usuario, titulo_causa, descripcion, monto_recaudar, monto_recaudado, contact_tel_causa, contact_corr_causa, estado_causa) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", 
            [idTypeGoal, user.id, titleGoal, descriptionGoal, finalAmountGoal, 0, numberContactGoal, emailContactGoal, 0]
        );

        connection.end();

        res.status(200).json({ message: "Causa subida correctamente" });

    } catch (error) {
        console.log("Error al subir las causas", error);
        res.status(500).json({ message: "Error al subir las causas" });
    }
};

export const renderGoalsCtrl = async (req,res) => {
    try {
        const connection = await ConnectionDataBase()

        const [infoGoals] = connection.query("SELECT titulo_causa, descripcion FROM causas")

        const infoGoal = infoGoals[0]

        connection.end()
    } catch (error) {
        console.error("Error al recibir la información de las causas")
    }

    const goal = {
        
    }
}