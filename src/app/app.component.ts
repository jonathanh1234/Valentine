import { Component } from '@angular/core';
import { ValentineButtonsComponent } from './valentine-buttons/valentine-buttons.component'; // Adjust the import path as needed

@Component({
  selector: 'app-root',
  template: `
    <app-valentine-buttons></app-valentine-buttons>
  `,
  styleUrls: ['./app.component.css'],
  standalone: true, // Marking the root component as standalone, if needed
  imports: [ValentineButtonsComponent] // Import the standalone component here
})
export class AppComponent { }