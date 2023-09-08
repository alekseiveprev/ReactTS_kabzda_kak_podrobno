import React, { useState } from 'react';

type RaitingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5;
};

let selected: boolean;
export function Raiting(props: RaitingPropsType) {
  console.log('Raiting rendering');

  //let [selected, setSelected] = useState(false);

  return (
    <div>
      <Star selected={props.value > 0} />
      <button>1</button>
      <Star selected={props.value > 1} />
      <button>2</button>
      <Star selected={props.value > 2} />
      <button>3</button>
      <Star selected={props.value > 3} />
      <button>4</button>
      <Star selected={props.value > 4} />
      <button>5</button>

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

  /*if (props.value === 0) {
        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 1) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 2) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 3) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 4) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 5) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        )
    }
    return (
        <div>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )*/
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
