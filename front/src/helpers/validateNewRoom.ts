import validator from 'validator';

export const validateTitle = (title: string): string => {
    return validator.isLength(title, { min: 4, max: 140 })
        ? ""
        : "El título debe tener entre 4 y 140 caracteres.";
};

export const validateDescription = (description: string): string => {
    return validator.isLength(description, { min: 10, max: 500 })
        ? ""
        : "La descripción debe tener entre 10 y 500 caracteres.";
};

export const validateSize = (size: string): string => {
    const regex = /^\d+\s?m2$/; // Ejemplo: "150 m2"
    return regex.test(size)
        ? ""
        : "El tamaño debe estar en el formato '150 m2'.";
};

export const validateBeds = (beds: number): string => {
    return validator.isInt(beds.toString(), { min: 1, max: 10 })
        ? ""
        : "El número de camas debe estar entre 1 y 10.";
};

export const validateRating = (rating: number): string => {
    return validator.isInt(rating.toString(), { min: 1, max: 5 })
        ? ""
        : "La calificación debe estar entre 1 y 5 estrellas.";
};

export const validatePrice = (price: number): string => {
    return validator.isInt(price.toString(), { min: 50, max: 20000 })
        ? ""
        : "El precio por noche debe estar entre 50 y 20000 USD.";
};

export const validateImage = (image: string): string => {
    const allowedExtensions = /\.(jpg|jpeg|png|gif)$/i;
    return allowedExtensions.test(image)
        ? ""
        : "La imagen debe ser un archivo válido (jpg, jpeg, png o gif).";
};

export const validateRoomType = (roomType: string): string => {
    if (!roomType) return "El tipo de habitación es obligatorio."; 
    const validTypes = [
        "Habitación de lujo",
        "Habitación estándar",
        "Suite",
        "Habitación familiar deluxe"
    ];
    return validTypes.includes(roomType)
        ? ""
        : `El tipo de habitación debe ser uno de los siguientes: ${validTypes.join(", ")}.`;
};

