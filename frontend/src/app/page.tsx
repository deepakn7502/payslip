export default function Login() {
  return (
    <div>
      <form className="h-96 bg-blue-950 w-96 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-around border-2 rounded-2xl border-blue-950 ">
        <h1 className="text-white text-3xl uppercase">login</h1>
        <input
          className="h-14 w-10/12 px-4 text-black border-2 border-blue-950 rounded-lg"
          placeholder="Username"
        />
        <input
          className="h-14 w-10/12 px-4 text-black border-2 border-blue-950 rounded-lg"
          placeholder="Password"
        />
        <button
          className="bg-yellow-300 px-4 py-2 rounded text-black"
          type="submit"
        >
          Login
        </button>
        <button className="text-white">Forgot Password?</button>  
      </form>
    </div>
  );
}

// className="bg-[url('/images/vivid-blurred.jpg')]"

// type Repository {
//   id: number;
//   name: string;
//   full_name: string;
//   };
//   export default async function Page() {
//   | const res = await fetch('https://api.github.com/
//   repos/vercel/next.js');
//   const data: Repository await res.json();
//   return <h1>{data.full_name}</h1>;
//   }
