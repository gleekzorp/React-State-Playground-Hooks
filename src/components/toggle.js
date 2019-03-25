import React, { useState } from "react";

const Toggle = () => {
  const [saying, changeSaying] = useState(true);

  return (
    <div>
      <h1>Toggle</h1>
      <button onClick={() => changeSaying(!saying)}>Toggle</button>
      <h1>{saying ? "Hello" : "goodbye"}</h1>
    </div>
  );
};

export default Toggle;

// Old Way
// import React, { Component } from "react";

// export default class Toggle extends Component {
//   constructor() {
//     super();

//     this.state = {
//       saying: true
//     };
//     // You don't need to bind when you use an arrow function
//     // this.changeSaying = this.changeSaying.bind(this);
//   }

//   changeSaying = () => {
//     this.setState({
//       saying: !this.state.saying
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Toggle</h1>
//         <button onClick={this.changeSaying}>Toggle</button>
//         <h1>{this.state.saying ? "Hello" : "goodbye"}</h1>
//       </div>
//     );
//   }
// }
