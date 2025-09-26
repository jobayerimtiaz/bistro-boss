import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const PaymentHistory = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div className="bg-white py-12 ">
      <div className="flex justify-between px-2 md:px-8 py-4">
        <h2 className="text-sm md:text-3xl font-bold">
          Payments: {payments.length}
        </h2>
      </div>
      <div className="md:px-8">
        <table className="table md:p-8">
          {/* head */}
          <thead className="bg-[#D1A054]">
            <tr>
              <th></th>
              <th>Price</th>
              <th>Transaction ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {payments.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td className="font-bold">${item.price}</td>
                <td className="font-bold">{item.transactionId}</td>
                <td className="font-bold">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
