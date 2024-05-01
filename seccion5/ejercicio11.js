const data = `{
    "roomTypes": [
      {
        "id": 1,
        "name": "Individual",
        "description": "Habitación para una persona",
        "capacity": 1
      },
      {
        "id": 2,
        "name": "Doble",
        "description": "Habitación para dos personas",
        "capacity": 2
      },
      {
        "id": 3,
        "name": "Suite",
        "description": "Habitación lujosa con sala de estar",
        "capacity": 4
      },
      {
        "id": 4,
        "name": "Familiar",
        "description": "Habitación para 4 personas",
        "capacity": 4
      },
      {
        "id": 5,
        "name": "Presidencial",
        "description": "Habitación lujosa con sala de estar y comedor",
        "capacity": 6
      }
    ],
    "rooms": [
      {
        "number": 101,
        "roomTypeId": 1,
        "priceNight": 50,
        "availability": true
      },
      {
        "number": 102,
        "roomTypeId": 2,
        "priceNight": 80,
        "availability": true
      },
      {
        "number": 103,
        "roomTypeId": 2,
        "priceNight": 80,
        "availability": true
      },
      {
        "number": 104,
        "roomTypeId": 3,
        "priceNight": 150,
        "availability": true
      },
      {
        "number": 105,
        "roomTypeId": 3,
        "priceNight": 200,
        "availability": true
      },
      {
        "number": 106,
        "roomTypeId": 3,
        "priceNight": 200,
        "availability": true
      },
      {
        "number": 107,
        "roomTypeId": 4,
        "priceNight": 200,
        "availability": true
      },
      {
        "number": 108,
        "roomTypeId": 5,
        "priceNight": 300,
        "availability": true
      }
    ]
  }`;
  
  const jsonData = JSON.parse(data);
  
  function checkRoomAvailability(roomNumber) {
    return new Promise((resolve, reject) => {
      const room = jsonData.rooms.find(room => room.number === roomNumber);
      if (room && room.availability) {
        setTimeout(() => {
          resolve();
        }, 1000); 
      } else {
        reject(`La habitación ${roomNumber} no está disponible.`);
      }
    });
  }
  
  async function makeReservation() {
    let option = 'si';
    const reservations = [];
  
    while (option.toLowerCase() === 'si') {
      let inputTypeRoom = prompt(`Por favor seleccione el tipo de habitación que requiere:
      1. Individual 
      2. Doble
      3. Suite
      4. Familiar
      5. Presidencial`);
  
      let roomType = '';
      switch (inputTypeRoom) {
        case "1":
          roomType = "Individual";
          break;
        case "2":
          roomType = "Doble";
          break;
        case "3":
          roomType = "Suite";
          break;
        case "4":
          roomType = "Familiar";
          break;
        case "5":
          roomType = "Presidencial";
          break;
        default:
          console.log("Opción inválida");
          continue;
      }
  
      let roomNumber = parseInt(prompt("Por favor ingrese el número de habitación:"));
  
      try {
        await checkRoomAvailability(roomNumber);
        console.log(`Reserva de habitación ${roomNumber} (${roomType}) realizada con éxito.`);
        reservations.push({ roomNumber, roomType });
      } catch (error) {
        console.log(error);
      }
  
      option = prompt("Desea hacer otra reservación: si/no");
    }
  
    return reservations;
  }
  
  async function viewReservations() {
    console.log("Reservas actuales:");
    const reservations = await makeReservation();
    if (reservations.length === 0) {
      console.log("No hay reservas.");
    } else {
      reservations.forEach((reservation, index) => {
        console.log(`${index + 1}. Habitación ${reservation.roomNumber} (${reservation.roomType})`);
      });
    }
  }
  
  async function cancelReservation(reservations) {
    console.log("Cancelar reserva:");
    if (reservations.length === 0) {
      console.log("No hay reservas para cancelar.");
      return;
    }
  
    const roomNumberToCancel = parseInt(prompt("Ingrese el número de habitación a cancelar:"));
    const index = reservations.findIndex(reservation => reservation.roomNumber === roomNumberToCancel);
    if (index !== -1) {
      reservations.splice(index, 1);
      console.log(`La reserva de la habitación ${roomNumberToCancel} ha sido cancelada.`);
    } else {
      console.log(`No se encontró una reserva para la habitación ${roomNumberToCancel}.`);
    }
  }
  
  async function editReservation(reservations) {
    console.log("Editar reserva:");
    if (reservations.length === 0) {
      console.log("No hay reservas para editar.");
      return;
    }
  
    const roomNumberToEdit = parseInt(prompt("Ingrese el número de habitación a editar:"));
    const index = reservations.findIndex(reservation => reservation.roomNumber === roomNumberToEdit);
    if (index !== -1) {
      let inputTypeRoom = prompt(`Por favor seleccione el nuevo tipo de habitación que requiere para la habitación ${roomNumberToEdit}:
      1. Individual 
      2. Doble
      3. Suite
      4. Familiar
      5. Presidencial`);
      
      let roomType = '';
      switch (inputTypeRoom) {
        case "1":
          roomType = "Individual";
          break;
        case "2":
          roomType = "Doble";
          break;
        case "3":
          roomType = "Suite";
          break;
        case "4":
          roomType = "Familiar";
          break;
        case "5":
          roomType = "Presidencial";
          break;
        default:
          console.log("Opción inválida");
          return;
      }
  
      reservations[index].roomType = roomType;
      console.log(`La reserva de la habitación ${roomNumberToEdit} ha sido actualizada a (${roomType}).`);
    } else {
      console.log(`No se encontró una reserva para la habitación ${roomNumberToEdit}.`);
    }
  }
  
  async function start() {
    let option = '';
    const reservations = [];
  
    do {
      option = prompt(`¿Qué acción desea realizar?
      1. Realizar una reserva
      2. Ver reservas actuales
      3. Cancelar reserva
      4. Editar reserva
      5. Salir`);
  
      switch (option) {
        case "1":
          await makeReservation();
          break;
        case "2":
          await viewReservations();
          break;
        case "3":
          await cancelReservation(reservations);
          break;
        case "4":
          await editReservation(reservations);
          break;
        case "5":
          console.log("Gracias por usar nuestro sistema de reservas.");
          break;
        default:
          console.log("Opción inválida");
      }
    } while (option !== "5");
  }
  
  start();
  