function Shadow({ side }) {
  const classes =
    side === 'right'
      ? 'w-[350px] h-[200px] right-0 bg-softblue absolute translate-x-16 -translate-y-48 -z-10 rounded-l-[100px] sm:w-[600px] sm:h-[300px] sm:-translate-y-80 md:w-[700px] md:h-[300px] md:-translate-y-72 lg:w-[550px] lg:h-[260px] lg:-translate-y-[17rem] lg:translate-x-36 xl:w-[600px] xl:h-[300px] xl:-translate-y-[20rem] 2xl:w-[750px] 2xl:h-[350px] 2xl:-translate-y-[22rem]'
      : 'w-[450px] h-[200px] bg-softblue absolute -translate-x-36 -translate-y-40 overflow-x-hidden -z-10 rounded-br-[100px] md:rounded-tr-[200px] md:translate-y-20 md:rounded-br-[150px] md:h-[350px] md:w-[700px] md:-translate-x-80';
  return <div className={classes}></div>;
}

export default Shadow;
