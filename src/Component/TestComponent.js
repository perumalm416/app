import { Fragment, useEffect, useState } from "react";
// import { UserActivity } from "./UserActivity";

function TestComponent() {
  const [data, setData] = useState([]);

  //   const onUserActivity = () => setUserActivity(!isUserActivity);
  console.log(data);
  useEffect(() => {
    fetch("https://router-4221e-default-rtdb.firebaseio.com/events.json")
      .then((response) => response.json())
      .then((response) => {
        let loadedData = [];
        for (let data in response) {
          loadedData.push(response[data]);
        }
        setData(loadedData);
      })

      .catch((error) => console.log(error));
  }, []);
  return <Fragment>
    <div>
    <ul>
        {data.map(item=>(<li key={item.eventId}>{item.eventName}</li>))}
    </ul>
    </div>
  </Fragment>;
}

export default TestComponent;
