import { grid } from "../../assets"


const Grid = () => {
  return (
        <img 
            src={grid} 
            alt="grid" 
            className="hidden lg:block absolute -top-[1.125rem] -left-0 z-0 w-full h-full object-top pointer-events-none opacity-50 lg:opacity-100"
        />
    );
};

export default Grid
