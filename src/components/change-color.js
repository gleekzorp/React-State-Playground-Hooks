import React, { useState } from "react";

const ChangeColor = () => {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("Black");

  const onChange = event => {
    setInput(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    setColor(input);
    setInput("");
  };

  return (
    <div>
      <h1 style={{ color: color }}>{color}</h1>
      <form onSubmit={onSubmit}>
        <label>
          <input
            placeholder="Enter Your Color"
            type="text"
            value={input}
            onChange={onChange}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default ChangeColor;

// Old Way
// import React, { Component } from "react";

// export default class ChangeColor extends Component {
//   constructor() {
//     super();

//     this.state = {
//       color: "Black",
//       info: ""
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       info: event.target.value
//     });
//   }

//   handleSubmit(event) {
//     this.setState({
//       color: this.state.info
//     });
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <div>
//         <h1 style={{ color: this.state.color }}>{this.state.color}</h1>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             <input
//               type="text"
//               value={this.state.info}
//               onChange={this.handleChange}
//             />
//           </label>
//           <input type="submit" value="submit" />
//         </form>
//       </div>
//     );
//   }
// }
