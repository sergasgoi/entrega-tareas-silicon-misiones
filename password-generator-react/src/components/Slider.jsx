function Slider(
    {
        longitud,
        setLongitud
    }) {


    function longitudSlider(e) {
        setLongitud(Number(e.target.value))
    }

    return (
        <div className="slider-container">

            <label>Longitud <span>{longitud}</span></label>
            <input
                className="slider"
                type="range"
                min="0"
                max="20"
                value={longitud}
                onChange={longitudSlider}
            />
        </div>
    )
}
export default Slider;