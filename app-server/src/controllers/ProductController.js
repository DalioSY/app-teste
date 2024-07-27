import Product from "../models/Product.js";

export const getProduct = async (req, res) => {
  const product = await Product.find();

  return res.status(200).json(product);
};

export const createProduct = async (req, res) => {
  const product = req.body;

  const newProduct = await Product.create(product);
  return res.status(201).json(newProduct);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  await Product.findByIdAndDelete({ _id: id });
  return res.status(200).json({ response: "Product deletado" });
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updateProduct = req.body;

  await Product.findByIdAndUpdate({ _id: id }, updateProduct);
  return res.status(200).json({ response: "Product updated" });
};
