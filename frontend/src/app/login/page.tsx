export default function Login() {
  return (
    <div>
      <form className="h-96 bg-white w-96 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-around border-2 rounded-3xl border-blue-500 ">
        <h1 className="text-blue-500 text-3xl uppercase">login</h1>
        <input
          className="h-14 w-10/12 px-4 text-black border-2 border-black rounded"
          placeholder="Username"
        />
        <input
          className="h-14 w-10/12 px-4 text-black border-2 border-black rounded"
          placeholder="Password"
        />
        <button
          className="bg-blue-500 px-4 py-2 rounded text-white"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

// className="bg-[url('/images/vivid-blurred.jpg')]"
