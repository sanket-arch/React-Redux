import React, { useEffect } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../redux/user/selectors";
function UserContainer({ userData, fetchuser }) {
  useEffect(() => {
    fetchuser();
  }, []);
  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      {userData.users && userData.users.map((user) => <p>{user.name}</p>)}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
