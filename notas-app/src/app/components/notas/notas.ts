import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotaService } from '../../services/nota.service';
import { Nota } from '../../interfaces/nota.interface';

@Component({
  selector: 'app-notas',
  imports: [FormsModule],
  templateUrl: './notas.html',
  styleUrl: './notas.css',
  host: { '(document:keydown.escape)': 'cerrar()' },
})
export class Notas implements OnInit {
  protected notaService = inject(NotaService);

  titulo = '';
  contenido = '';

  // Nota que se muestra en el pop-up (null = cerrado)
  notaAbierta = signal<Nota | null>(null);

  ngOnInit(): void {
    this.notaService.cargarNotas();
  }

  guardar(): void {
    const titulo = this.titulo.trim();
    const contenido = this.contenido.trim();
    if (!titulo || !contenido) return;

    this.notaService.agregarNota({ titulo, contenido });
    this.titulo = '';
    this.contenido = '';
  }

  abrir(nota: Nota): void {
    this.notaAbierta.set(nota);
  }

  cerrar(): void {
    this.notaAbierta.set(null);
  }
}
