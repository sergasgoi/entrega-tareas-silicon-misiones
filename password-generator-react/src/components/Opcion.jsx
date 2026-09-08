function Opcion(
    {
        texto,
        setOpcion
    }) {
    return (
        <label className="option">
            <input
                type="checkbox"
                onChange={(e) => setOpcion(e.target.checked)}
            />
            <span>{texto}</span>
        </label>
    )
}

export default Opcion