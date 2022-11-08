import React from 'react';
import './WorkExperience.css';
import engineer from '../../images/engineer.png';
import software_engineer from '../../images/software_engineer.png';
import { useStateValue } from '../Context/StateProvider';

function WorkExperience() {

    const todayDate = new Date().toLocaleDateString();
    const arr = todayDate.split('/');
    const totalExperience = `${arr[0] - 9}.${arr[1]}`;

    const [{ mode }] = useStateValue();
    const style = {
        darkImage: { filter: "invert(87%) sepia(32%) saturate(5006%) hue-rotate(354deg) brightness(104%) contrast(101%)" },
        lightImage: {},
        darkLine: {backgroundColor: 'white'},
        lightLine: {backgroundColor: 'gray'},
    }

    return (
        <div className='work_main'>
            <div className='work_container'>
                <div className='work_dots' style={mode ? style.darkLine : style.lightLine} id='top_dot'></div>
                <div className='work_line' style={mode ? style.darkLine : style.lightLine}></div>
                <div className='work_dots' style={mode ? style.darkLine : style.lightLine} id='bottom_dot'></div>
            </div>
            <div className='work_text'>
                <div className="mechanical_work">
                    <div className='mechanical_text'>
                        <h4>Mechanical Engineer</h4>
                        <h6>Riviera Homefurnishings Pvt. Ltd. &#x2022; Full-time</h6>
                        <p>2 years &#x2022; Panipat</p>
                        <p>Jun 2020 - Jun 2022</p>
                    </div>
                    <img style={mode ? style.darkImage : style.lightImage} src={engineer} alt="mechanicalEngg." />
                </div>
                <div className="software_work">
                    <div className='software_text'>
                        <h4>Software Engineer Intern</h4>
                        <h6>Quokka Labs &#x2022; Internship</h6>
                        {/* <p>{totalExperience} months &#x2022; Noida</p> */}
                        <p>2 months &#x2022; Noida</p>
                        <p>Sep 2022 - Present</p>
                    </div>
                    <img style={mode ? style.darkImage : style.lightImage} src={software_engineer} alt="softwareEngg." />
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;
