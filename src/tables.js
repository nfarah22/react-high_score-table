import React from 'react'
import allCountryScores from './scores'
import './tables.css'


function Tables(){
    const sortCountryAlpabetically = allCountryScores.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
    const table = allCountryScores.map((country, index) => {
     const sortScore = country.scores.sort((a, b) => b.s - a.s);
    
    return (<div className="table" key={index}>
      <table>
        <thead>
          <tr>
            <th>High scores:{country.name}</th>
          </tr>
        </thead>
        <tbody>
        {sortScore.map((score, key)=> (
            <tr key={key}>
              <td>{score.n}</td>
              <td>{score.s}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
    });

  return <div>{table}</div>;
}





export default Tables