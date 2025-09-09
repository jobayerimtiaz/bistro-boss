import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const AllUsers = () => {
  const axiosSecure = UseAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return (
    <div>
      <h1>all users </h1>
    </div>
  );
};

export default AllUsers;
