import mongoose from 'mongoose';

const notaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'El título es obligatorio'],
    trim: true,
  },
  contenido: {
    type: String,
    required: [true, 'El contenido es obligatorio'],
    trim: true,
  },
}, {
  // Devuelve "id" en lugar de "_id" y oculta "__v"
  toJSON: {
    transform: (_doc, { _id, __v, ...rest }) => ({ ...rest, id: String(_id) }),
  },
});

export const Nota = mongoose.model('Nota', notaSchema);
