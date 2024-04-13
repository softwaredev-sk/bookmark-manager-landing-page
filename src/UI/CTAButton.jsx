function Button({ isActive, onClicking, children }) {
  const classes = isActive
    ? 'rounded p-3 mx-1 bg-softblue text-white font-medium'
    : 'rounded p-3 mx-1 bg-slate-100 text-grayblue font-medium';
  return (
    <button className={classes} onClick={onClicking}>
      {children}
    </button>
  );
}

export default Button;
