import logo from './logo.svg';
import './App.css';
import React from 'react';
import redbull from './MicrosoftTeams-image.png';

function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

let uname = "Scott";
let age = 25;
let email = "scott@gmail.com";
function App2() {
  return (
    //<React.Fragment></React.Fragment>
    <>
      <h1>Welcome</h1>
      <hr />
      <p>React Demo</p>
      <div>
        User Name : {uname} <br />
        Age :       {age}   <br />
        Email :     {email} <br />
      </div>
    </>
  )
}


let empno = 101;
let ename = "Rahul";
let job = "Analyst";
let salary = 100000;
let deptno = 1;
function App3() {
  return (
    //<React.Fragment></React.Fragment>
    <>
      <h1>Welcome</h1>
      <hr />
      <p>React Demo</p>
      <table border='1'>
        <th>Emp Number  <br /></th>
        <th>Emp Name <br /></th>
        <th>Job <br /></th>
        <th>Salary <br /></th>
        <th>Dept No  <br /></th>
        <tr>
          <td>
            {empno}
          </td>
          <td>
            {ename}
          </td>
          <td>
            {job}
          </td>
          <td>
            {salary}
          </td>
          <td>
            {deptno}
          </td>
        </tr>
      </table>
      <div>
        <img src={redbull} alt="image" width={100} height={250}></img>
        <img src="https://tse1.mm.bing.net/th/id/OIP.33CwBYkmnMfpA9Djup22JwHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"></img>
      </div>
    </>
  )
}


let content = ["HTML", "C++", "Java"];
function App4() {
  let x = <h3>Using React Tags</h3>;
  let res = new Array(3);

  /*res[0]=<li>{content[0]}</li>;
  res[1]=<li>content[1]</li>;
  res[2]=<li>content[2]</li>;*/

  /*for(let i=0; i<content.length;i++)
  {
    res.push(<li>{content[i]}</li>)
  }*/

  res = content.map(item => <li>{item}</li>);

  return (
    <>
      <h3>Using React</h3>
      {x}
      <hr />
      <ul>
        <li>{content[0]}</li>
        <li>{content[1]}</li>
        <li>{content[2]}</li>
      </ul>
      <ul>
        {res}
      </ul>
    </>
  )
}


const persons = { id: 1, firstName: "Ajay", lastName: "Bisht", age: 9, salary: 10000 };
function App5() {
  return (
    <div>
      <li>{persons.id}</li>
      <li>{persons.firstName}</li>
      <li>{persons.age}</li>
      <li>{persons.salary}</li>
    </div>
  )
}

const employees = [{ id: 1, firstName: "Ajay", lastName: "Bisht", age: 9, salary: 10000, job: 'Manager' },
{ id: 2, firstName: "Rajiv", lastName: "Vishnoi", age: 22, salary: 12000, job: 'Analyst' },
{ id: 3, firstName: "Bosco", lastName: "Caesar", age: 25, salary: 20000, job: 'Senior Manager' },
{ id: 4, firstName: "Albert", lastName: "Wadlow", age: 3, salary: 30000, job: 'Deputy Analyst' },
{ id: 5, firstName: "Rajiv", lastName: "Vishnoi", age: 22, salary: 12000, job: 'Analyst' },
{ id: 6, firstName: "Bosco", lastName: "Caesar", age: 25, salary: 20000, job: 'Senior Manager' },
{ id: 7, firstName: "Albert", lastName: "Wadlow", age: 3, salary: 30000, job: 'Deputy Analyst' }];
function App6() {
  /*let arrid = employees.map(
    item=>
    <tr>
      <td>{item.id}</td>
    </tr>)
  let arrfn = employees.map(
    item=>
    <tr>
      <td>{item.firstName}</td>
    </tr>)
  let arrage = employees.map(
      item=>
      <tr>
        <td>{item.age}</td>
      </tr>)
  let arrjob = employees.map(
        item=>
        <tr>
          <td>{item.job}</td>
        </tr>)
  let arrsal = employees.map(
    item=>
    <tr>
      <td>{item.salary}</td>
    </tr>
  );*/
  let resultsArray = employees.map(item =>
    <tr>
      <td>{item.id}</td>
      <td>{item.firstName}</td>
      <td>{item.age}</td>
      <td>{item.salary}</td>
      <td>{item.job}</td>
    </tr>
  );
  let x = 0;
  return (
    <>
      <h3>Display</h3>
      <hr />
      <table border='2' width="500">
        <tr>
          <th>ID: </th>
          <th>Name: </th>
          <th>Age: </th>
          <th>Salary: </th>
          <th>Job: </th>
        </tr>
        {resultsArray}
      </table>
    </>
  )
}


function App7() {
  let file1 = "https://img.freepik.com/free-photo/green-park-view_1417-1492.jpg";
  let file2 = "MicrosoftTeams-image.png";
  return (
    <>
      <h3>Working with Images React JS</h3>
      <hr />

      <img width="100" src="https://img.freepik.com/free-photo/green-park-view_1417-1492.jpg" />
      <br />
      <img width="100" src={file1} />
      <hr />

      <img width="100" src="./Images/MicrosoftTeams-image.png" />
      <hr />

      <img width="100" src={"./Images/" + file2} />
      <hr />
    </>
  );
}



let usersArray = [{ "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://reqres.in/img/faces/1-image.jpg" },
{ "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://reqres.in/img/faces/2-image.jpg" },
{ "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://reqres.in/img/faces/3-image.jpg" },
{ "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://reqres.in/img/faces/4-image.jpg" },
{ "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "https://reqres.in/img/faces/5-image.jpg" },
{ "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://reqres.in/img/faces/6-image.jpg" }
];

function App8(){
  let Details = usersArray.map(item =>
    <tr>
      <td>{item.id}</td>
      <td>{item.email}</td>
      <td>{item.first_name} {item.last_name}</td>
      <td><img width="100" src={item.avatar} /></td>
    </tr>
  );
  return(
    <>
    <h3>Details</h3>
      <hr />
      <table border='2' width="500">
        <tr>
          <th>ID: </th>
          <th>Email: </th>
          <th>Name: </th>
          <th>Avatar: </th>
        </tr>
        {Details}
      </table>
    </>
  )
}


function App9() {
  let files = ["1.png","2.png","3.png","4.png"];
  let filex = "./Numbers/";
  let imageprint = files.map
  (
    item=>
    <img width='100' src={filex+item}></img>
  )
  return (
    <>
      <h3>Working with Images React JS</h3>
      <hr />
        {imageprint}
    </>
  );
}

//export default App1;
//export default App2;
//export default App3;
//export default App4;
//export default App5;
//export default App6;
//export default App7;
//export default App8;
export default App9;

