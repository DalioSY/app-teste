import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { upload } from './config/multer';

const prisma = new PrismaClient();
const PORT = 4000;

const app = express();

app.get('/', async (req: Request, res: Response) => {
  const allProduct = await prisma.product.findMany();
  res.status(200).send(allProduct);
});

app.post('/', upload.single('file'), async (req: Request, res: Response) => {
  const newProduct = await prisma.product.create({
    data: {
      image: req.file?.filename || '',
      name: req.body.name,
      description: req.body.description,
      price: parseInt(req.body.price),
      unit: parseInt(req.body.unit),
      delivery: req.body.delivery,
    },
  });
  res.status(201).send(newProduct);
});

app.put('/:id', upload.single('file'), async (req: Request, res: Response) => {
  const updateProduct = prisma.product.update({
    where: { id: parseInt(req.params.id) },
    data: {
      image: req.file?.filename || '',
      name: req.body.name,
      description: req.body.description,
      price: parseInt(req.body.price),
      unit: parseInt(req.body.unit),
      delivery: req.body.delivery,
    },
  });
  res.status(201).send(updateProduct);
});

app.delete('/:id', async (req: Request, res: Response) => {
  await prisma.product.delete({
    where: { id: parseInt(req.params.id) },
  });
  res.status(200).send('✔️ User deleted sucessfully');
});

app.listen(PORT, () => console.log(`⏳ Connectd ${PORT}`));
