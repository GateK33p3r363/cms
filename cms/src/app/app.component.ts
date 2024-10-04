import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cms';

  selectedFeature: string = 'documents';

  onFeatureSelected(selectedFeature: string) {
    console.log('Selected Feature:', selectedFeature);
    // Additional logic to handle feature change can go here
  
}
switchView(selectedFeature: string) {
  this.selectedFeature = selectedFeature; // Assign the received feature to the class variable
}
}


