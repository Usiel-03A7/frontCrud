// vehicle-form.component.ts
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vehicle } from '../../models/vehicle.model';
import { VehicleService } from '../../services/vehicle.service'; // Importar el servicio

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss'],
})
export class VehicleFormComponent implements OnInit {
  @Input() vehicle: Vehicle | null = null;
  @Output() save = new EventEmitter<Vehicle>();

  vehicleForm: FormGroup;
  imageUrls: string[] = [];
  brands: { id: number; name: string }[] = []; // Definir la propiedad brands

  constructor(
    private fb: FormBuilder,
    private vehicleService: VehicleService, // Inyectar el servicio
  ) {
    this.vehicleForm = this.fb.group({
      brandId: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadBrands(); // Cargar las marcas al iniciar el componente
  }

  // Método para cargar las marcas
  loadBrands(): void {
    this.vehicleService.getBrands().subscribe((brands) => {
      this.brands = brands;
    });
  }

  ngOnChanges(): void {
    if (this.vehicle) {
      this.vehicleForm.patchValue(this.vehicle);
      this.imageUrls = this.vehicle.imageUrls || [];
    }
  }

  addImageUrl(): void {
    if (this.imageUrls.length < 5) {
      this.imageUrls.push('');
    }
  }

  removeImageUrl(index: number): void {
    this.imageUrls.splice(index, 1);
  }

  onSubmit(): void {
    if (this.vehicleForm.valid) {
      const vehicleData = {
        ...this.vehicleForm.value,
        imageUrls: this.imageUrls.filter((url) => url.trim() !== ''),
      };
      this.save.emit(vehicleData);
    }
  }
}
