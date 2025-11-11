import { useForm } from "react-hook-form";
import { request } from "../config/request";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const Login = () => {
  const { handleSubmit, register, reset } = useForm();

  const navigate = useNavigate();

  const submit = (data) => {
    request.post("/login", data).then((res) => {
      if (res?.data?.accessToken) {
        Cookies.set("token", res?.data?.accessToken);
        navigate("/app");
      }
    });
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <input
            className="p-2 mb-2 border w-full"
            placeholder="Email"
            {...register("email")}
            type="email"
          />
        </div>
        <div>
          <input
            className="p-2 mb-2 border w-full"
            placeholder="Password"
            {...register("password")}
            type="password"
          />
        </div>
        <button className="bg-green-300 w-full p-2 cursor-pointer" type="submit">
          Send
        </button>
      </form>
    </>
  );
};
