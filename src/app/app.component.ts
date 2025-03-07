// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { RouterModule } from '@angular/router'; // Importar RouterModule
import { NavigationComponent } from './components/NavigationComponent/navigation.component'; // Importar NavigationComponent

@Component({
  selector: 'app-root',
  standalone: true, // Mantener standalone
  imports: [
    CommonModule, // Importar CommonModule para directivas como *ngIf y *ngFor
    RouterModule, // Importar RouterModule para <router-outlet>
    NavigationComponent, // Importar NavigationComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent { }
