import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Header from './Shared/Header/header.component';
import Footer from './Shared/Footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',

})
export class App {

}
