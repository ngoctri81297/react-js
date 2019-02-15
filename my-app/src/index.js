import React from 'react';
import ReactDOM from 'react-dom';

//----------------------EXAMPLE-1-----------------------//
// const user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
// };
// var formatName = (user) => {
// return user.firstName + ' ' + user.lastName;
// }
// function getGreeting(user) {
// if (user) {
//     return <h1>Hello {formatName(user)}!</h1>
// }
// return <h1>Hello, Stranger.</h1>;
// };
// const element1 = (
//     <h1>
//        {getGreeting(user)}
//     </h1>
//   );
//----------------------EXAMPLE-1-END-----------------------// 

//----------------------EXAMPLE-2-----------------------//
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }
//   const element = <Welcome name="Sara" />;
// function App() {
//     return (
//       <div>
//         <Welcome name="Sara" />
//         <Welcome name="Cahal" />
//         <Welcome name="Edite" />
//       </div>
//     );
//   }
//----------------------EXAMPLE-2-END-----------------------//

//----------------------EXAMPLE-3-----------------------//
// function formatDate(date) {
//     return date.toLocaleDateString();
//   }
//   function Comment(props) {
//     return (
//       <div className="Comment">
//         <div className="UserInfo">
//           <img
//             className="Avatar"
//             src={props.author.avatarUrl}
//             alt={props.author.name}
//           />
//           <div className="UserInfo-name">
//             {props.author.name}
//           </div>
//         </div>
//         <div className="Comment-text">{props.text}</div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     );
//   }
//   const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//       name: 'Hello Kitty',
//       avatarUrl: 'https://placekitten.com/g/64/64',
//     },
//   };
//----------------------EXAMPLE-3-END-----------------------//

//----------------------EXAMPLE-4-----------------------//
  // class Clock extends React.Component{
  //   constructor(props){
  //       super(props);
  //       this.state= {date:new Date()};
  //   }
  //   componentDidMount(){
  //     console.log("goodbye");
  //   }
  //   render(){
  //       return (
  //           <div>
  //             <h1>Hello, world!</h1>
  //             <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
  //           </div>
  //         );
  //     }
  //   }
//----------------------EXAMPLE-4-END-----------------------//

//----------------------EXAMPLE-5-----------------------//
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};
//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }
//----------------------EXAMPLE-5-END-----------------------//

//----------------------EXAMPLE-6-----------------------//
// class LogginControl extends React.Component{
//   constructor(props){
//     super(props);
//     this.handleLoggoutClick = this.handleLoggoutClick.bind(this);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.state = {isLoggedin:false};
//   }
//   handleLoginClick(){
//     this.setState({isLoggedin:true});
//   }
//   handleLoggoutClick(){
//     this.setState({isLoggedin:false});
//   }
//   render(){
//     const isLoggedin = this.state.isLoggedin;
//     let button;
//     if(isLoggedin){
//       button = <LogoutButton onClick={this.handleLoggoutClick}/>
//     }else{
//       button = <LoginButton onClick={this.handleLoginClick}/>
//     }
//     return(
//       <div>
//         <Greeting isLoggedin={isLoggedin}/>
//         {button}
//       </div>
//     )
//   }
// }
// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }
// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }
// function Greeting(props) {
//   const isLoggedin = props.isLoggedin;
//   if (isLoggedin) {
//     return <UserGreeting />;
//   }else{
//   return <GuestGreeting />;
//   }
// }
// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }
// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }
//----------------------EXAMPLE-6-END-----------------------//

//----------------------EXAMPLE-7-----------------------//
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );
//----------------------EXAMPLE-7-END-----------------------//

//----------------------EXAMPLE-8-----------------------//
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coconut'};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" onChange={this.handleChange} />
//           Pick your favorite flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
//----------------------EXAMPLE-8-END-----------------------//
//----------------------EXAMPLE-9-----------------------//
function NuocSoi(props){
  if(props.nhietdo>=100){
    return "Nước sôi";
  }else if(props.nhietdo>80){
  return "Nước sắp sôi";
}else{
  return "Nước chưa sôi";
}
}
class Kiemtranhietdosoi extends React.Component{
  constructor(props){
    super(props);
    this.state = {nhietdo:''};
    this.handleChange= this.handleChange.bind(this);
  }
  handleChange(giatri){
    this.setState({nhietdo:giatri.target.value})
  }
  render(){
    return(
      <fieldset>
        <legend>Nhập Để Kiểm Tra Nhiệt Độ Sôi:</legend>
        <input value={this.state.nhietdo} onChange={this.handleChange}/>
        <NuocSoi nhietdo={this.state.nhietdo}/>
      </fieldset>
    )
  }
}
//----------------------EXAMPLE-9-END-----------------------//

ReactDOM.render(
//-----EXAMPLE-1-----//  
  //    element1,

//-----EXAMPLE-2-----//   
  // <App/>,

//-----EXAMPLE-3-----//     
  // <Comment
  //     date= {comment.date}
  //     text= {comment.text}
  //     author = {comment.author}
  // />,

//-----EXAMPLE-4-----//   
  //  <Clock/>, 

//-----EXAMPLE-5-----//   
  // <Toggle />,

//-----EXAMPLE-6-----//   
  // <LogginControl/>,

//-----EXAMPLE-7-----//  
  // <ul>{listItems}</ul>,

//-----EXAMPLE-8-----//  
  //<NameForm/>,

//-----EXAMPLE-9-----//  
  <Kiemtranhietdosoi/>,
  document.getElementById('root')
);
