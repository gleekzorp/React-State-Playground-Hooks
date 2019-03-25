import React, { useState, useEffect } from "react";

const Clock = () => {
  const [date, tick] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval(() => tick(new Date()), 1000);
    // This gets called after every render, by default
    // (the first one, and every one after that)
    console.log("render!");

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () => {
      clearInterval(timerID);
      console.log("unmount");
    };
  });

  return (
    <div>
      <h1>Clock</h1>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  );
};
export default Clock;

///////////////////////////////
// Niels Way
// import React, { useState, useEffect } from "react";

// const Clock = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(
//     () => {
//       let second = setInterval(() => tick(), 1000);
//       return () => clearInterval(second);
//     },
//     [time]
//   );

//   const tick = () => {
//     setTime(new Date());
//   };

//   return (
//     <div>
//       <h1>{time.toLocaleTimeString()}</h1>
//     </div>
//   );
// };

// export default Clock;

///////////////////////////////
// Old Way
// import React, { Component } from "react";

// export default class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date()
//     };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Clock</h1>
//         <h2>{this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }
