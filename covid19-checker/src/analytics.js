import React from 'react';

export function AnalyticsCounts(props) {
  return (
    <div>
      <li>
        <h4>
          Deaths
        </h4>
        <h1>{props.deaths}</h1>
      </li>
      <li>
        <h4>
          Recoverd
        </h4>
        <h1>{props.recoverd}</h1>
      </li>
      <li>
        <h4>
          Confirmed
        </h4>
        <h1>{props.confirmed}</h1>
      </li>
    </div>
  );
};
