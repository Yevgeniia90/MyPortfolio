import React from 'react';
import AboutImg from '../img/Me.jpg';

const AboutMe = () => {
    return (
        <main className="section">
            <div className="container">
                <div className="AboutMeWrapper">
                    <div className='AboutMeImg'>
                        <img src={AboutImg} className="AboutMeImg" alt="About Me" />
                    </div>
                    <div className='AboutMeText'>
                        <h6>(На русском языке)</h6>
                        <h2> &emsp;Всем привет, меня зовут Евгения, мне 33 года. Я из Украины, город Харьков. 
                            У меня высшее образование по Налогооблажению и красный диплом "Финансы и кредит". 
                            Не замужем, детей нет. <br></br>
                            &emsp;С приходом войны в мою страну - изменилось сознание. 
                            Я поняла, что это возможность, что-то поменять, попробовать новое, там где ты еще не был, но слышал и хотелось. 
                            Так я попала учиться в академию "IT Step". Училась 1 год на специальности Web-разработчик. 
                            Первые полгода был <b>Frontend</b>, а потом полгода <b>Backend, SEO, дизайн</b>. Учиться было интересно, 
                            каждый предмет вел новый учитель, со своим подходом и взглядами. 
                            Мне понравилась эта профессия и я ценю ее за постоянную возможность развития, обучения 
                            (появляются новые программы, расширения, плагины) и свободy.
                            </h2>

                            <br></br>
                            <h6>(In English)</h6>
                            <h2> &emsp;Hello everyone, my name is Evgeniia, 33 years old. I'm from Ukraine, the city of Kharkiv.
                            I have a higher education in Taxation and a red diploma in "Finance and Credit".
                            I'm not married, and I don't have children. <br></br>
                            &emsp;With the onset of war in my country, my consciousness has changed.
                            I realized that it's an opportunity to change something, to try something new, somewhere you've never been but have heard about and wanted to go.
                            So, I ended up studying at the "IT Step" academy. I studied for 1 year specializing in Web Development.
                            The first six months were focused on <b>Frontend</b>, and then the next six months covered <b>Backend, SEO, design</b>.
                            Studying was interesting; each subject was taught by a new teacher, with their own approach and perspectives.
                            I enjoyed this profession, and I appreciate it for its constant opportunity for development, learning
                            (new programs, extensions, plugins emerge), and freedom.
                            </h2>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AboutMe;
