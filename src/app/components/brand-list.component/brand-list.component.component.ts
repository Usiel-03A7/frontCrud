// brand-list.component.component.ts
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.component.html',
  styleUrls: ['./brand-list.component.component.scss'],
})
export class BrandListComponent implements OnInit { // Asegúrate de que el nombre de la clase sea correcto
  brands: { id: number; name: string }[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.loadBrands();
  }

  loadBrands(): void {
    this.vehicleService.getBrands().subscribe((brands) => {
      this.brands = brands;
    });
  }
}
