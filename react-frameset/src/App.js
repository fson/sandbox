import React, { Component } from 'react';
import './App.css';

const getCellStyle = (rawSize) => {
  const style = {};
  const size = rawSize.trim();
  const relativeMatch = /^(\d*)\*/.exec(size);
  if (relativeMatch) {
    style.flexGrow = parseInt(relativeMatch[1], 10) || 1;
  } else {
    style.flexBasis = size;
  }
  return style;
}

const FRAMESET = ({ rows = '100%', cols = '100%', children }) => {
  const childrenArray = React.Children.toArray(children);
  const rowSizes = rows.split(',');
  const colSizes = cols.split(',');
  const nRows = rowSizes.length;
  const nCols = colSizes.length;

  const rowElements = [];
  for (let row = 0; row < nRows; row++) {
    const colElements = [];
    for (let col = 0; col < nCols; col++) {
      const style = getCellStyle(colSizes[col]);
      const child = childrenArray[row * nCols + col];
      colElements.push(
        <div key={child.props.key} style={style}>{child}</div>
      );
    }
    rowElements.push(
      <div key={row} style={{
        display: 'flex',
        flexDirection: 'row',
        ...getCellStyle(rowSizes[row]),
      }}>
        {colElements}
      </div>
    )
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
    }}>
      {rowElements}
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <FRAMESET cols="200,*">
        <FRAMESET rows="100,*">
          <FRAME name="1" bgcolor="#2ecc71" />
          <FRAME name="2" bgcolor="#f1c40f" />
        </FRAMESET>
        <FRAME name="3" bgcolor="#e67e22" />
      </FRAMESET>
    );
  }
}

const FRAME = ({ bgcolor, name, frameborder = true }) => (
  <div style={{
    background: bgcolor,
    color: 'white',
    fontSize: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    border: frameborder && '1px solid black',
    boxSizing: 'border-box',
   }}>
    {name}
  </div>
);

export default App;
