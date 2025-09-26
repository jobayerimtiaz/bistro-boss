import UseAuth from "../../../Hooks/UseAuth";

const AdminHome = () => {
  const { user } = UseAuth();
  return (
    <div>
      <h2 className="text-3xl">
        Hi, welcome <span>{user?.displayName ? user.displayName : "Back"}</span>
      </h2>
    </div>
  );
};

export default AdminHome;
