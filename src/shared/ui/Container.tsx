
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div
      className='w-full mx-auto
      sm:max-w-[640px]
      md:max-w-[768px]
      lg:max-w-[1024px]
      xl:max-w-[1280px]
      '
    >
      {children}
    </div>
  );
};
