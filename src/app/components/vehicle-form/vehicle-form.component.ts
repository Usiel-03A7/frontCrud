// components/vehicle-form/vehicle-form.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss'],
})
export class VehicleFormComponent {
  @Input() vehicle: Vehicle | null = null; // Define la propiedad `vehicle`
  @Output() save = new EventEmitter<Vehicle>(); // Define el evento `save`

  vehicleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.vehicleForm = this.fb.group({
      brandId: ['', Validators.required],
      model: ['', Validators.required],
      image: [null, Validators.required],
    });
  }

  ngOnChanges() {
    // Actualiza el formulario cuando la propiedad `vehicle` cambia
    if (this.vehicle) {
      this.vehicleForm.patchValue(this.vehicle);
    }
  }

  onSubmit() {
    if (this.vehicleForm.valid) {
      this.save.emit(this.vehicleForm.value); // Emite el evento `save` con los datos del formulario
    }
  }
}
