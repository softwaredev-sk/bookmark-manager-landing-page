function Button({ isActive, onClicking, children }) {
  return (
    <button
      className={
        isActive
          ? 'rounded p-3 mx-1 bg-softblue text-white font-medium'
          : 'rounded p-3 mx-1 bg-slate-100 text-grayblue font-medium'
      }
      onClick={onClicking}
    >
      {children}
    </button>
  );
}

export default Button;
