import { Injectable, inject, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nota, NuevaNota } from '../interfaces/nota.interface';

@Injectable({ providedIn: 'root' })
export class NotaService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/notas';

  public notas: WritableSignal<Nota[]> = signal([]);
  public error = signal('');

  cargarNotas(): void {
    this.http.get<Nota[]>(this.apiUrl).subscribe({
      next: notas => this.notas.set(notas),
      error: () => this.error.set('No se pudieron cargar las notas. ¿Está corriendo el servidor?'),
    });
  }

  // Actualización pesimista: la nota se agrega a la señal cuando el servidor confirma
  agregarNota(nuevaNota: NuevaNota): void {
    this.http.post<Nota>(this.apiUrl, nuevaNota).subscribe({
      next: creada => {
        this.notas.update(notas => [creada, ...notas]);
        this.error.set('');
      },
      error: () => this.error.set('No se pudo guardar la nota.'),
    });
  }
}
