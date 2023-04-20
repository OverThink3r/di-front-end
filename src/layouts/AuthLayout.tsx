interface Props {
  title: string,
  children:  JSX.Element
}

export const AuthLayout = ({title, children}: Props) => {
  return (
  <div className="h-screen bg-orange-300 flex items-center justify-center">
    <div className="w-96 p-6 shadow-lg bg-white rounded-md">
      <h1 className="text-3xl">{title}</h1>
      <hr className="mb-4"/>
      {children}
    </div>
  </div>
  );
};