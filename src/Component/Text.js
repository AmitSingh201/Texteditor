import React, { useState } from 'react';



export default function Text(props) {

  const [texts, setText] = useState("");

  //   const [textColor, setTextColor] = useState('black');
  //  const handleChnageTextColor = (e) => {

  //  setTextColor(textColor === 'black' ? '#CCCCCC' : 'black');
  // }
  // const [count, setCount] = useState(0);
  //this is hook and state code logic 
  const upclick = () => {
    console.log("Uper was clicked" + texts);
    let newtext = texts.toUpperCase();
    setText(newtext);

  };
  

  const handelOnchange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  };

  //this is submit button logic
  function submit() {
    console.log("cilcked");
  }

  // Function to capitalise first letter
  // to capitalize the first character of any string
  const capitalize = () => {

    let firstchar = texts.charAt(0); // storing the first char of the string
    let newText1 = firstchar.toUpperCase(); // converting that to uppercase
    setText(newText1 + texts.slice(1)); // printing it with rest excluding the first char by using slice

  }

  return (


    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.hedding}</h1>
        <div className="mb-3"  >
          {/* <label form="exampleFormControlTextarea1" className="form-label">Write Your Quries</label> */}
          <textarea className="form-control" value={texts} style={{ backgroundColor: props.mode === 'dark' ? 'grey':'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handelOnchange} id="exampleFormControlTextarea1" rows="7"></textarea>
          {/* value={text} onChange={uperOnchange} */}
        </div>
      </div>
      <button className="my  mx-1" onClick={submit}>Submit</button>
      <button className="btn-2  mx-1" onClick={capitalize}>FirstCap</button>
      <button className="btn-2  mx-1" onClick={upclick}>UperCase</button>
      



      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <p className="allinfo" >{texts.split(" ").length} words | {texts.length} charactres | {texts.split("\n").length}Line count</p>
        <p>{0.008 * texts.split(" ").length} Time to read</p>
        <h2>Previwe</h2>
        <p>{texts.length > 0 ? texts : "Enter the text perive it to here"}</p>
      </div>
    </>
  );
}
