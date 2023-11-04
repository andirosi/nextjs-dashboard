import { lusitana } from "@/app/ui/fonts";

export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Modelo de Producto</h1>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <div className="w-full md:col-span-6">
          Aqui va el modelo
        </div>
        <div className="flex w-full flex-col md:col-span-2 lg:col-span-2">
          Aquí va el formulario
        </div>
      </div>
    </div>
  );
}
