import React from 'react';
import { useSelector } from 'react-redux';


/**
 * Get the experience array from the state.
 * map it into experience components
 * make the table and and add the delete button
*/

function Experience() {

    // get the experience array
    const experience = useSelector(state => state.profile.profile.experience);

    const expArray = experience.map(exp => (
        <tr key={exp._id}>
            <td>{exp.company}</td>
            <td>{exp.from}</td>
            <td>{exp.to}</td>
        </tr>
    ))
    console.log(experience)  
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                </thead>
                <tbody>
                    {expArray}
                </tbody>
            </table>
        </div>
    )
}

export default Experience;