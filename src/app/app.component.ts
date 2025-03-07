import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehicleService } from './services/vehicle.service';
import { Vehicle } from './models/vehicle.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  newModel: string = ''; // Variable para el modelo
  newBrandId: number = 0; // Variable para el ID de la marca seleccionada
  newImage: string = ''; // Variable para el enlace de la imagen

  // Lista de marcas de vehículos
  brands: { id: number; name: string }[] = [];

  // Lista de vehículos agregados
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  // Método que se ejecuta al iniciar el componente
  ngOnInit(): void {
    this.loadBrands(); // Carga las marcas al iniciar
    this.loadVehicles(); // Carga los vehículos al iniciar
  }

  // Método para cargar las marcas desde la API
  loadBrands() {
    this.vehicleService.getBrands().subscribe({
      next: (response) => {
        this.brands = response.$values; // Accede a la propiedad $values
        console.log('Marcas cargadas:', this.brands);
      },
      error: (error) => {
        console.error('Error al cargar las marcas:', error);
      },
    });
  }

  // Método para cargar los vehículos desde la API
  loadVehicles() {
    this.vehicleService.getVehicles().subscribe({
      next: (response) => {
        this.vehicles = response.$values; // Accede a la propiedad $values
        console.log('Vehículos cargados:', this.vehicles);
      },
      error: (error) => {
        console.error('Error al cargar los vehículos:', error);
      },
    });
  }

  // Método para obtener el nombre de la marca a partir de su ID
  getBrandName(brandId: number): string {
    const brand = this.brands.find((b) => b.id === brandId);
    return brand ? brand.name : 'Marca desconocida';
  }

  // Método para agregar un vehículo
  addVehicle() {
    if (!this.newModel.trim() || !this.newBrandId || !this.newImage.trim()) {
      console.error('Por favor, completa todos los campos.');
      return;
    }

    const newVehicle: Vehicle = {
      brandId: this.newBrandId,
      model: this.newModel,
      imageUrl: this.newImage, // Guarda el enlace de la imagen
    };

    console.log('Nuevo vehículo:', newVehicle); // Verifica el valor de newVehicle

    // Envía el vehículo a la API
    this.vehicleService.addVehicle(newVehicle).subscribe({
      next: (response) => {
        console.log('Vehículo agregado a la API:', response); // Verifica la respuesta del backend

        // Agrega el vehículo a la lista local con la respuesta del backend
        this.vehicles = [response, ...this.vehicles]; // Usa el operador spread para crear un nuevo array
        this.clearForm();

        console.log('Lista de vehículos actualizada:', this.vehicles); // Verifica la lista actualizada
      },
      error: (error) => {
        console.error('Error al agregar el vehículo a la API:', error);
      },
    });
  }

  // Método para eliminar un vehículo
  deleteVehicle(id: number): void {
    this.vehicleService.deleteVehicle(id).subscribe({
      next: () => {
        console.log('Vehículo eliminado de la API:', id);
        // Elimina el vehículo de la lista local
        this.vehicles = this.vehicles.filter((vehicle) => vehicle.id !== id);
      },
      error: (error) => {
        console.error('Error al eliminar el vehículo:', error);
      },
    });
  }

  // Método para limpiar el formulario
  clearForm() {
    this.newModel = '';
    this.newBrandId = 0;
    this.newImage = '';
  }
}
