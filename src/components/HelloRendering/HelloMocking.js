import React from "react";
import { getUser } from "./data";

export function HelloMocking({ id }) {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    getUser(id).then((u) => setUser(u));
  }, []);

  if (user === undefined) {
    return null;
  }
  return <p>Hello {user.name}</p>;
}
