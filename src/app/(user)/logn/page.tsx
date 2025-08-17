import LogInForm from "@/components/formes/LogInForm";


const Login = () => {
  return (
    <section className=" fix-hight container m-auto px-7 flex items-center justify-center ">
      <div className=" m-auto bg-white rounded-lg p-5 w-full md:w-2/3 ">
        <h1 className=" text-3xl font-bold text-gray-800 mb-5">log In</h1>
        <LogInForm />
      </div>
    </section>
  )
};

export default Login;
