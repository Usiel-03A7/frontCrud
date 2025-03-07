// vehicle-list.component.ts
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] = [];
  page = 1;
  pageSize = 10;
  totalItems = 0;
  searchTerm = '';
  searchYear = '';

  constructor(
    private vehicleService: VehicleService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.vehicleService.getVehicles(this.page, this.pageSize, this.searchTerm, this.searchYear).subscribe((response) => {
      this.vehicles = response.data;
      this.totalItems = response.totalItems;
    });
  }

  onSearch(): void {
    this.page = 1;
    this.loadVehicles();
  }

  viewVehicle(id: number): void {
    this.router.navigate(['/vehicles', id]);
  }

  // Método para editar un vehículo
  editVehicle(id: number): void {
    this.router.navigate(['/vehicles', id, 'edit']);
  }

  // Método para eliminar un vehículo
  deleteVehicle(id: number): void {
    if (confirm('¿Estás seguro de eliminar este vehículo?')) {
      this.vehicleService.deleteVehicle(id).subscribe(() => {
        this.loadVehicles(); // Recargar la lista después de eliminar
      });
    }
  }

  // Propiedad calculada para el total de páginas
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }
}
