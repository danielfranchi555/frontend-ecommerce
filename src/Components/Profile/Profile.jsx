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
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";

export function Profile({ id_user }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //obtener los datos del user: name,surname,email
  const getUser = async () => {
    const resp = await fetch(
      `http://localhost:4000/api/auth/getUser/${id_user}`
    );
    const data = await resp.json();
    setUser(data.user);
  };

  const onSubmit = async (user) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const res = await fetch(
        `http://localhost:4000/api/auth/updateUser/${id_user}`,
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!res.ok) {
        console.log({ message: "error en la peticion" });
      }
      toast({
        description: "Tu perfil se actualizo correctamente.",
      });
      const datajson = await res.json();
      console.log(datajson);
    } catch (error) {
      console.log({ message: error });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          variant="ghost"
          className="hover:bg-accent text-sm px-2 py-2 cursor-pointer"
        >
          Edit Profile
        </div>
      </DialogTrigger>
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle>Editar perfil</DialogTitle>
          <DialogDescription>
            Maneja los cambios de tu perfil aqui. Click en 'Guardar cambios'
            cuando hayas terminado.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue={user?.name}
              className="col-span-3 border"
              placeholder="Name"
              {...register("name")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Surname
            </Label>
            <Input
              id="username"
              defaultValue={user?.surname}
              className="col-span-3"
              placeholder="Username"
              {...register("surname")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input
              id="username"
              defaultValue={user?.email}
              className="col-span-3"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <DialogFooter>
            <Button type="submit">Guardar Cambios</Button>
            {loading && <p>enviando...</p>}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
