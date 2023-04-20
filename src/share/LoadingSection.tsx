export const LoadingSection = () => {
  return (
    <div>
      <h3 className="text-3xl text-center">Cargando Información...</h3>
      <h4 className="text-sm text-center mb-5">Por favor espere</h4>
      <div className="flex justify-center">
        <div
          className="
            inline-block
            h-8 w-8
            animate-spin
            rounded-full
            border-4
            border-solid
            border-current
            border-r-transparent
            align-[-0.125em]
            motion-reduce:animate-[spin_1.5s_linear_infinite]"
        >
        </div>

      </div>
    </div>
  );
};