import { Component } from '@angular/core';
import { Notas } from './components/notas/notas';

@Component({
  imports: [Notas],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
