import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const SelectCat = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Categoria" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Remeras</SelectItem>
        <SelectItem value="dark">Jeans</SelectItem>
        <SelectItem value="system">Camisas</SelectItem>
        <SelectItem value="system">Accesorios</SelectItem>
        <SelectItem value="system">Camperas</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectCat;
