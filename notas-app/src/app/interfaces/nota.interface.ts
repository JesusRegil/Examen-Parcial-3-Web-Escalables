export interface Nota {
  id: string;
  titulo: string;
  contenido: string;
}

export type NuevaNota = Omit<Nota, 'id'>;
