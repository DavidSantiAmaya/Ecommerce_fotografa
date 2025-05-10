import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'; 
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent, FooterComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'mi-proyecto-angular';
  changeColor() {

    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    document.querySelector('h1')!.style.color = randomColor;

  }
}
