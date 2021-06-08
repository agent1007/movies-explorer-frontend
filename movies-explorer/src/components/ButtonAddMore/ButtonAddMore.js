function ButtonAddMore({handleClick, AddMoreButtonClassName}) {
    return (
        <button type="button" className={AddMoreButtonClassName} onClick={handleClick}>Ещё</button>
    );
}

export default ButtonAddMore;