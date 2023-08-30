type PropsType = {
  // on: boolean;
};

function OnOff(props: PropsType) {
  const on = false;

  const onStyle = {
    width: '30px',
    height: '30px',
    border: '1px solid black',
    display: 'inline-block',
    padding: '2px',
    //  backgroundColor: props.on ? 'green' : 'white',
    backgroundColor: on ? 'green' : 'white',
  };
  const offStyle = {
    width: '30px',
    height: '30px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '2px',
    padding: '2px',
    // backgroundColor: props.on ? 'white' : 'red',
    backgroundColor: on ? 'white' : 'red',
  };
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '5px',
    //backgroundColor: props.on ? 'green' : 'red',
    backgroundColor: on ? 'green' : 'red',
  };
  return (
    <div>
      <div style={onStyle}>On </div>
      <div style={offStyle}>Off </div>
      <div style={indicatorStyle}> </div>
    </div>
  );
}

export default OnOff;
