import { useParams } from "react-router-dom";
function User() {
  const { userid } = useParams();
  return (
    <div className="bg-black text-2xl text-slate-300 font-bold text-center py-4">
      User: {userid}{" "}
    </div>
  );
}

export default User;
