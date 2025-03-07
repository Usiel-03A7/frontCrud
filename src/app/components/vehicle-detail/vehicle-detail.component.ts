// vehicle-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss'],
})
export class VehicleDetailComponent implements OnInit {
  vehicle: Vehicle | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadVehicle(+id);
    }
  }

  loadVehicle(id: number): void {
    this.vehicleService.getVehicle(id).subscribe((vehicle) => {
      this.vehicle = vehicle;
    });
  }

  editVehicle(): void {
    this.router.navigate(['/vehicles', this.vehicle?.id, 'edit']);
  }

  deleteVehicle(): void {
    if (confirm('¿Estás seguro de eliminar este vehículo?')) {
      this.vehicleService.deleteVehicle(this.vehicle!.id!).subscribe(() => {
        this.router.navigate(['/vehicles']);
      });
    }
  }
}
