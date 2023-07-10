export const Header = () => {
  return (
    <a href="/">
      <div className="w-full h-[80px] bg-purple-550">
        <div className="absolute w-[74px] h-[69px] left-[46px] top-1 bg-grey-10 rounded-full ">
          <div className="absolute w-[76px] h-[10px] left-0 top-[30px] bg-purple-550"></div>
          <div className="absolute w-[24px] h-[23px] left-[26px] top-[24px] rounded-full  bg-purple-550">
            <div className="absolute w-[15px] h-[15px] left-1 top-1 rounded-full bg-grey-10">
              <div className="absolute w-[9px] h-[9px] left-[3px] top-[3px] rounded-full bg-purple-550"></div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
