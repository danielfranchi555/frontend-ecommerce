"use client";
import CartAddProd from "@/Components/Admin/cartAddProd/CartAddProd";
import { Button } from "@/Components/ui/button";
import { DialogFooter } from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

const Page = ({ params }) => {
  const id = params.id;
  const [product, setProduct] = useState({});

  const { register, handleSubmit, reset, control } = useForm({
    defaultValues: {
      name_product: "",
      price: "",
      description: "",
      size: "",
      stock: "",
      img_url: "",
      category: "",
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "sizes",
  });

  const getProduct = async () => {
    const resp = await fetch(`http://localhost:4000/api/productsByAdmin/${id}`);
    const data = await resp.json();
    setProduct(data);
    // Reset form with fetched product data
    reset(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(product);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <Label htmlFor="name" className="w-[100px]">
              Nombre
            </Label>
            <Input
              id="name"
              placeholder="Nombre"
              className="col-span-3"
              {...register("name_product")}
            />
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="price" className="w-[100px]">
              Precio
            </Label>
            <Input
              id="price"
              type="number"
              placeholder="Precio"
              className="col-span-3"
              {...register("price")}
            />
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="description" className="w-[100px]">
              Descripción
            </Label>
            <Textarea
              id="description"
              placeholder="Ingrese la descripción"
              {...register("description")}
            />
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="category" className="w-[100px]">
              Categoría
            </Label>
            <select
              id="category"
              className="text-md border w-full rounded-md"
              {...register("category")}
            >
              <option value="camperas">camperas</option>
              <option value="remeras">remeras</option>
              <option value="jeans">jeans</option>
              <option value="accesorios">accesorios</option>
              <option value="camisas">camisas</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="image_url" className="w-[100px]">
              Imagen Principal
            </Label>
            <Input
              id="image_url"
              type="text"
              placeholder="Ingrese el link de la imagen"
              className="col-span-3"
              {...register("image_url")}
            />
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="sizes" className="w-[100px]">
              Talles y Stock
            </Label>
            <Button
              type="button"
              onClick={() => append({ size: "", stock: 0 })}
            >
              Añadir Talle
            </Button>
          </div>
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-4">
              <Input
                id={`size-${index}`}
                placeholder="Talle"
                {...register(`sizes[${index}].size`)}
              />
              <Input
                id={`stock-${index}`}
                type="number"
                placeholder="Stock"
                {...register(`sizes[${index}].stock`)}
              />
              <Button type="button" onClick={() => remove(index)}>
                Eliminar
              </Button>
            </div>
          ))}
          <DialogFooter>
            <Button type="submit">Guardar Cambios</Button>
          </DialogFooter>
        </div>
      </form>
    </div>
  );
};

export default Page;
