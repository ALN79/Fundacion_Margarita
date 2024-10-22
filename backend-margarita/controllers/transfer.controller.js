import { ConnectionDataBase } from "../src/database.js";

class BitcoinWallet {
  constructor() {
    this.balance = 0; // Saldo inicial
    this.transactions = []; // Registro de transacciones
  }

  // Método para agregar fondos al monedero
  addFunds(amount) {
    this.balance += amount;
    console.log(
      `Fondos agregados: ${amount} satoshis. Saldo actual: ${this.balance} satoshis.`
    );
  }

  // Método para realizar una transferencia
  transfer(toAddress, amount) {
    if (amount > this.balance) {
      throw new Error("Fondos insuficientes para realizar la transferencia.");
    }

    this.balance -= amount;
    const transaction = {
      to: toAddress,
      amount: amount,
      timestamp: new Date(),
    };
    this.transactions.push(transaction);
    return transaction;
  }

  // Método para mostrar el historial de transacciones
  showTransactions() {
    return this.transactions;
  }
}

// Instancia de la billetera
const wallet = new BitcoinWallet();

// Controlador para simular transferencias
export const simulateTransfer = async (req, res) => {
  const { id_usuario, toAddress, amount } = req.body;
  const connection = await ConnectionDataBase();

  try {
    // Convertir el monto a número
    const amountToTransfer = parseFloat(amount);

    // Verificar si el usuario tiene suficiente saldo
    const [userCrypto] = await connection.query(
      "SELECT balance FROM cryptos WHERE id_usuario = ?",
      [id_usuario]
    );

    // Asegurarse de que userCrypto tiene datos y que balance no sea undefined
    if (!userCrypto.length || typeof userCrypto[0].balance === "undefined") {
      return res
        .status(400)
        .json({ error: "Cuenta de usuario no encontrada o sin balance." });
    }

    if (userCrypto[0].balance < amountToTransfer) {
      return res.status(400).json({ error: "Saldo insuficiente." });
    }

    // Obtener el id_usuario correspondiente a toAddress
    const [recipient] = await connection.query(
      "SELECT id_usuario FROM cryptos WHERE address = ?",
      [toAddress]
    );

    if (!recipient.length) {
      return res
        .status(400)
        .json({ error: "La dirección de destino no es válida." });
    }

    // Simular la creación de una TXID
    const txid = "TX" + Math.random().toString(36).substring(2, 15);

    // Restar el monto transferido del balance del usuario que envía
    await connection.query(
      "UPDATE cryptos SET balance = balance - ? WHERE id_usuario = ?",
      [amountToTransfer, id_usuario]
    );

    // Sumar el monto transferido al balance del usuario que recibe
    await connection.query(
      "UPDATE cryptos SET balance = balance + ? WHERE id_usuario = ?",
      [amountToTransfer, recipient[0].id_usuario]
    );

    // Registrar la transacción en la tabla de transacciones
    await connection.query(
      'INSERT INTO transactions (id_usuario, amount, type) VALUES (?, ?, "transfer")',
      [id_usuario, amountToTransfer]
    );

    // Devolver la respuesta de éxito
    return res.status(200).json({
      message: "Transferencia realizada exitosamente",
      txid: txid,
      remainingBalance: userCrypto[0].balance - amountToTransfer,
    });
  } catch (error) {
    console.error("Error al simular la transferencia:", error);
    return res
      .status(500)
      .json({ error: "Error al realizar la transferencia." });
  }
};

// Controlador para agregar fondos
export const buyFunds = async (req, res) => {
  const { id_usuario, amount } = req.body;
  const connection = await ConnectionDataBase();

  if (!id_usuario) {
    return res
      .status(400)
      .json({ error: "El campo 'id_usuario' es obligatorio" });
  }

  try {
    // Insertar la transacción para agregar fondos
    await connection.query(
      'INSERT INTO transactions (id_usuario, amount, type) VALUES (?, ?, "add")',
      [id_usuario, amount]
    );

    // Actualizar el balance del usuario en la tabla de cryptos
    await connection.query(
      "UPDATE cryptos SET balance = balance + ? WHERE id_usuario = ?",
      [amount, id_usuario]
    );

    return res.status(200).json({ message: "Fondos agregados exitosamente" });
  } catch (error) {
    console.error("Error al agregar fondos:", error);
    return res.status(500).json({ error: "Error al agregar fondos." });
  }
};

// Controlador para crear la direccion
export const createAddress = async (req, res) => {
  const { id_usuario } = req.body;
  const connection = await ConnectionDataBase();

  // Verificar si se recibió id_usuario
  if (!id_usuario) {
    return res.status(400).json({ error: "El ID de usuario es requerido" });
  }

  try {
    // Generar una nueva dirección (simulada por ahora)
    const newAddress = "MS" + Math.random().toString(36).substring(2, 15);

    // Insertar la nueva dirección en la tabla cryptos
    await connection.query(
      "INSERT INTO cryptos (id_usuario, address, balance) VALUES (?, ?, 0.00000000)",
      [id_usuario, newAddress]
    );

    res.status(201).json({ address: newAddress });
  } catch (error) {
    console.error("Error al crear dirección:", error);
    res.status(500).json({ error: "Error al crear la dirección." });
  }
};

// Controlador para mostrar las transacciones
export const getTransactions = async (req, res) => {
  const { id_usuario } = req.params;
  const connection = await ConnectionDataBase();

  try {
    // selecciona las transacciones del usuario
    const [transactions] = await connection.query(
      "SELECT * FROM transactions WHERE id_usuario = ?",
      [id_usuario]
    );

    res.status(200).json(transactions);
  } catch (error) {
    console.error("Error al obtener las transacciones:", error);
    res.status(500).json({ error: "Error al obtener transacciones." });
  }
};
