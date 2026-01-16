
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children,className }: ContainerProps) => {
  return (
    <div
      className={` ${className} w-full! mx-auto! px-4
      sm:max-w-[640px]
      md:max-w-[768px]
      lg:max-w-[1024px]
      xl:max-w-[1280px]
      `}
    >
      {children}
    </div>
  );
};
