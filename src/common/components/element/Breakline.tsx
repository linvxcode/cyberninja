type BreaklineProps = {
    className?: string;
    [propName: string]: string | undefined;
  };
  
  const Breakline = ({ className = '', ...others }: BreaklineProps) => {
    return (
      <div
        className={`border-t dark:border-neutral-700 border-gray-300 ${className}`}
        {...others}
      ></div>
    );
  };
  
  export default Breakline;
  