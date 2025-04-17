// app/components/Container.tsx

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {children}
      </div>
    );
  };
  
  export default Container;
  