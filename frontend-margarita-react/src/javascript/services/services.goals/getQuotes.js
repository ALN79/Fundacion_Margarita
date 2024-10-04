export const getQuotes = async () => {
    try {
        const response = await fetch("http://localhost:3000/quotes-info");

        if (!response.ok) {
            console.error("Error al cargar las frases");
            return []; 
        }
        
        const RandomQuotes = await response.json();
        return RandomQuotes;
    } catch (error) {
        console.error("Error al recibir las frases", error);
        return []; 
    }
}