import React, { useEffect, useState } from "react";
import clients from "./utils/Clients";
import { Button, LinearProgress, Card, CardContent } from "@material-ui/core";

export default function UserList() {
  const [users, setUsers] = useState([{ id: 1 }]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    clients.users.findAll().then(({ data }) => {
      setUsers(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <LinearProgress color="secondary" />
      ) : (
        <div>
          {users.map(user => (
            <Card key={user.id}>
              <CardContent>{user.username}</CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
