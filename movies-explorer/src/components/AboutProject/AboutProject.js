
function AboutProject() {

  
    return (
        <section className="about-project" id="about-project">
        <h2 className="title">О проекте</h2>
        <div className="about-project__container about-project__container_info">
            <h3 className="about-project__info-title about-project__box1">Дипломный проект включал 5 этапов</h3>
            <h3 className="about-project__info-title about-project__box2">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__info-subtitle about-project__box3">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            <p className="about-project__info-subtitle about-project__box4">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className="about-project__container about-project__container_time-frame">
            <div className="about-project__columns about-project__columns_green-theme">
                <h3 className="about-project__time-frame-title about-project__time-frame-title_dark-theme">1 неделя</h3>
            </div>
            <div className="about-project__columns">
                <h3 className="about-project__time-frame-title">4 недели</h3>
            </div>
            <p className="about-project__time-frame-subtitle">Back-end</p>
            <p className="about-project__time-frame-subtitle">Front-end</p>
        </div>
    </section>
    );
}
  
export default AboutProject;