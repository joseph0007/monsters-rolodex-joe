import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/searchBox.component";

// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ monsters: data }));
  }

  /**
   * the speciality of arrow function is that instead of storing the method inside the prototype chain what it does is it makes the
   * function a method of the newly created Object(it makes it its own method).
   * Now the beauty of this is that the this keyword in the method that is in the prototype chain will point to nothing but the
   * this keyword inside the method that is the own method of the object will point to that object!!
   */
  filterMonsterFn = (e) => {
    //setState is a async function
    this.setState({ searchField: e.target.value }, function () {
      console.log(this.state.searchField);
    });
  };

  //UNIDIRECTIONAL DATA FLOW
  /**
   * the main workings of react app is based on the state data it is provided with and on the basis of that data the app is re-rendered
   * that is whenever setState is called and the state data is changed the render() function is called again. And this makes sure that
   * the entire app is based on the new state.This means you should not change the state directly like this.state.name = 'blah'
   */
  render() {
    console.log(this);
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((el) =>
      el.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      //this is not standard html but JSX(javascript XML)
      <div className="App">
        <h1 className="heading-main">monsters rolodex</h1>
        <SearchBox
          key="monster_searchBox"
          placeholder="search monsters..."
          fn={this.filterMonsterFn}
        />
        <CardList key="monster_list" monsters={filteredMonsters} />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
