import React from 'react';
import moment from 'moment';

export default function Widget() {
  return (
    <div style={{ backgroundColor: "#0a0", padding: 10, marginBottom: 10, color: "#fff" }}>
      <p>
        {moment().format('MMMM Do YYYY, h:mm:ss a')}
      </p>
    </div>
  );
}
