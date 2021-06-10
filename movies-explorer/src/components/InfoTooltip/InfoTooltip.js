
function InfoTooltip({ isOpen, onClose, success }) {
    return (
        <div className={`info-tooltip  ${isOpen ? 'info-tooltip_opened' : ''} `}>
            <div className="info-tooltip__container">
                <h2 className="info-tooltip__title">
                    {success ? 'Данные успешно изменены!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h2>
                <button type="button" className="info-tooltip__close-button" onClick={onClose} />
            </div>
        </div>
    );
}

export default InfoTooltip;