import React, { useState } from 'react';

type RaitingPropsType = {
  //value: 0 | 1 | 2 | 3 | 4 | 5;
};

let selected: boolean;
export function UncontrolledRaiting(props: RaitingPropsType) {
  console.log('Raiting rendering');

  let [value, setValue] = useState(4);

  return (
    <div>
      <Star selected={value > 0} />
      <button
        onClick={() => {
          setValue(1);
        }}
      >
        1
      </button>
      <Star selected={value > 1} />
      <button
        onClick={() => {
          setValue(2);
        }}
      >
        2
      </button>
      <Star selected={value > 2} />
      <button
        onClick={() => {
          setValue(3);
        }}
      >
        3
      </button>
      <Star selected={value > 3} />
      <button
        onClick={() => {
          setValue(4);
        }}
      >
        4
      </button>
      <Star selected={value > 4} />
      <button
        onClick={() => {
          setValue(5);
        }}
      >
        5
      </button>

      {/* <Star />
      <button
        onClick={() => {
          setSelected(true);
        }}
      >
        1
      </button>
      <Star />
      <button>2</button>
      <Star />
      <button>3</button>
      <Star />
      <button>4</button>
      <Star />
      <button>5</button> */}
    </div>
  );
}

type StarPropsType = {
  selected: boolean;
};

function Star(props: StarPropsType) {
  //debugger
  console.log('Star rendering');
  /*{ props.selected === true && return (<span><b>star</b> </span>) }   // какаято хрень у меня*/

  if (props.selected === true) {
    return (
      <span>
        <b>star</b>{' '}
      </span>
    );
  } else {
    return <span>star </span>;
  }
}
