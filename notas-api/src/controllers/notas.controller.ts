import { type Request, type Response } from 'express';
import mongoose from 'mongoose';
import { Nota } from '../models/nota.model.ts';

export const getNotas = async (_req: Request, res: Response) => {
  try {
    const notas = await Nota.find().sort({ _id: -1 });
    res.status(200).json(notas);
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: 'Error al obtener las notas' });
  }
};

export const createNota = async (req: Request, res: Response) => {
  const { titulo, contenido } = req.body ?? {};

  try {
    const nota = new Nota({ titulo, contenido });
    await nota.save();
    res.status(201).json(nota);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      res.status(400).json({ ok: false, msg: error.message });
      return;
    }
    console.log(error);
    res.status(500).json({ ok: false, msg: 'Error al crear la nota' });
  }
};
