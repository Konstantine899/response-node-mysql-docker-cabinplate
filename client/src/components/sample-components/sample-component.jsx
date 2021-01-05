import React from 'react';
import axios from 'axios';

function callServer() {
  axios
    .get('http://localhost:8000/test', {
      params: {
        table: 'sample',
      },
    })
    .then((response) => {
      console.log(response.data);
    });
}

export function SampleComponent() {
  return (
    <div>
      Это пример компонента
      {callServer()}
    </div>
  );
}
