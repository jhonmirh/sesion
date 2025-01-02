export interface Room {
    id: string,
    roomType: string, //Ejemplo: "Habitación de lujo"
    title: string, //Ejemplo: "Habitación familiar deluxe"
    size: string, //Ejemplo: "150 m2"
    beds: number, //Ejemplo: "2 camas King Size"
    rating: number, //Rating con estrellas
    image: string,
    price: number,
    description: string,
    isDeleted?: boolean,
}

export interface Booking {
    userId: string,
    roomId: string,
    checkInDate: Date,
    checkOutDate: Date,
    //status?: 'pending' | 'confirmed' | 'cancelled';
}