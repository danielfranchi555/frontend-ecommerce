import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm, useFieldArray } from "react-hook-form";

const CartAddProd = () => {
  const { register, handleSubmit, control } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "sizes",
  });

  const categoryMapping = {
    jeans: 1,
    remeras: 2,
    camperas: 3,
    accesorios: 4,
    camisas: 5,
  };

  const onSubmit = (data) => {
    const category_id = categoryMapping[data.category];
    const object = {
      name_product: data.name_product,
      price: data.price,
      description: data.description,
      category_id: category_id,
      image_url: data.image_url,
      sizes: data.sizes,
    };
    // Aquí puedes realizar la llamada a la API para enviar object a la base de datos
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Añadir Producto</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Añadir el Producto</DialogTitle>
          <DialogDescription>
            Completa los campos para añadir el producto correctamente
          </DialogDescription>
        </DialogHeader>
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
      </DialogContent>
    </Dialog>
  );
};

export default CartAddProd;
