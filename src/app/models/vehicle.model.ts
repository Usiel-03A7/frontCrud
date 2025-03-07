// vehicle.model.ts
export interface Vehicle {
  id?: number; // ID del vehículo (opcional)
  brandId: number; // ID de la marca
  model: string; // Modelo del vehículo
  year: number; // Año del vehículo
  imageUrls: string[]; // URLs de las imágenes
}
