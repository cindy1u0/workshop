import { ReactElement, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import services from '../utils/services';
import { Person } from '../utils/types';

const PracticeOne = (): ReactElement => {
  const history = useHistory();
  const [data, setData] = useState<Person[]>([]);
  /**
   * TODO: CHANGE THIS PART TO ADD YOUR SERVICE
   * TEMPLATE: services.<your_endpoint_name>.then((res) => setData(res.data))
   */
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
      <div>
        In this practice, you will get a list of data from my jank backend server.
        <br />
        1. you will need to add a GET request in "backend/src/index.js"
        <br />
        2. you will need to add an endpoint to "frontend/src/utils/services.ts"
        <br />
        3. add your action to onClick and see the result :))))
      </div>
      <div
        style={{
          marginTop: "100px"
        }}
      >
        <button
          onClick={() => {
            // TODO: CHANGE THIS PART TO ADD YOUR SERVICE
            // TEMPLATE: services.<your_endpoint_name>.then(
            //  (res) => setData(res.data))
            console.log("hello")
          }
          }
        >GET ITTTTT</button>
          <button
          onClick={() => history.push("/")
          }
        >GO BACK</button>
        {data.map((item: Person) => {
          return <div>
            this person's name is {item.name}, their role is {item.role},
            theey are {item.age} years old, and they are on the {item.team}
          </div>
        })}
      </div>
    </div>
  )
}

export default PracticeOne;