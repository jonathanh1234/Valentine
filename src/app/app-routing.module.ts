import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValentineButtonsComponent } from './valentine-buttons/valentine-buttons.component';

const routes: Routes = [
  { path: '', component: ValentineButtonsComponent },
  // Add other routes here
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect to home for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })], // Set useHash to true if needed
  exports: [RouterModule]
})
export class AppRoutingModule {}