import React, { useState } from "react";

const FontSizer = () => {
  const [fontSize, changeSize] = useState(20);

  return (
    <div>
      <h1>Font Sizer</h1>
      <button onClick={() => changeSize(fontSize + 5)}>Bigger</button>
      <button onClick={() => changeSize(fontSize - 5)}>Smaller</button>
      <div style={{ fontSize: `${fontSize}px` }}>{fontSize}px</div>
    </div>
  );
};

export default FontSizer;

// Old Way
// import React, { Component } from "react";

// export default class FontSizer extends Component {
//   constructor() {
//     super();

//     this.state = {
//       fontSize: 20
//     };
//   }

//   changeSize(arg) {
//     this.setState({
//       fontSize: this.state.fontSize + arg
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Font Sizer</h1>
//         <button onClick={() => this.changeSize(5)}>Bigger</button>
//         <button onClick={() => this.changeSize(-5)}>Smaller</button>
//         <div style={{ fontSize: `${this.state.fontSize}px` }}>
//           {this.state.fontSize}px
//         </div>
//       </div>
//     );
//   }
// }
