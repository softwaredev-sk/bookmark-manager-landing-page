// eslint-disable-next-line react/prop-types
function Shadow({ side, ind }) {
  const right = `absolute -z-10 rounded-l-full right-0 bg-softblue w-[18rem] h-[12rem] translate-x-8 -translate-y-48
  sm:w-[30rem] sm:h-[18rem] sm:translate-x-16 sm:-translate-y-72
  md:w-[36rem] md:h-[20rem] md:translate-x-16 md:-translate-y-80
  lg:w-[30rem] lg:h-[16rem] lg:translate-x-24 lg:-translate-y-64
  2xl:w-[36rem] 2xl:h-[20rem] 2xl:translate-x-22 2xl:-translate-y-80
  `;
  const left = `absolute -z-10 rounded-r-full left-0 bg-softblue  w-[450px] h-[190px] -translate-x-36 -translate-y-36 
  sm:w-[540px] sm:h-[300px] sm:-translate-x-8 sm:-translate-y-64
  md:w-[400px] md:h-[250px] md:-translate-x-8 md:translate-y-20
  lg:w-[500px] lg:h-[260px] lg:-translate-x-8 ${
    ind ? 'lg:translate-y-28' : 'lg:translate-y-44'
  }  
  xl:w-[580px] xl:h-[340px] xl:-translate-x-8 xl:translate-y-28
  2xl:w-[700px] 2xl:h-[400px] 2xl:-translate-x-8 ${
    ind ? '2xl:translate-y-24' : '2xl:translate-y-40'
  }
  `;
  const classes = side === 'right' ? right : left;
  return <div className={classes}></div>;
}

export default Shadow;
