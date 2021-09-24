import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router';
import services from '../utils/services';
import { Person } from '../utils/types';

const PracticeTwo = (): ReactElement => {
  const history = useHistory();
  const [name, setName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [team, setTeam] = useState<string>("");
  const [data, setData] = useState<Person[]>([]);

  return (
    <div
      style={{
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <div style={{
        marginBottom: "50px"
      }}>
        PRACTICE 2:
        <br/>
        1. Fill out information in the inputs :)
        <br/>
        2. Add your service endpoint
        <br/>
        3. Add functionalities in index.js
      </div>
      {/* Just ignore this junk */}
      <form>
        <label>
          Name:
          <input type="text" name="name" onChange={
            (e) => setName(e.target.value)
          }
          />
        </label>
        <br />
        <label>
          role:
          <input type="text" name="role" onChange={
            (e) => setRole(e.target.value)} />
        </label>
        <br />
        <label>
          age:
          <input type="text" name="age" onChange={
            (e) => setAge(e.target.value)}/>
        </label>
        <br />
        <label>
          team:
          <input type="text" name="team" onChange={
            (e) => setTeam(e.target.value)}/>
        </label>
        <br />
        <input type="submit" value="Submit" 
        disabled={!name || !age || !role || !team}
        onClick={() => {
          // TODO HERE:
          // UPDATE SERVICE ENDPOINT HERE
          // TEMPLATE: services.<your_endpoint>.
          // then.((res) => {...})
          console.log("SET STUFF");
        }}
        />
      </form>
      {data.map((item: Person) => {
          return <div>
            this person's name is {item.name}, their role is {item.role},
            theey are {item.age} years old, and they are on the {item.team}
          </div>
        })}
    </div>
  )
}

export default PracticeTwo;