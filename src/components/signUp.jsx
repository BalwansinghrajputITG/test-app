import { useState } from "react";

export default function SignUp() {
    const [data, setdata] = useState({});
    const [choosenClass, setClass] = useState("class");

    const handleChanges = (e) => {
        const { name, value } = e.target;

        setdata((pre) => ({
            ...pre,
            [name]: value,
        }));
    };

    const handleClass = (e) => {
        setClass(e.target.value);
    };

    const submitHandle = (e) => {
        e.preventDefault();
        console.log(data);
    };
    return (
        <div className=" max-h-64 min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600  h-screen flex justify-center items-center text-white">
            <form
                onSubmit={submitHandle}
                className=" sign-up-form gap-4 rounded-tl-3xl rounded-br-3xl flex-col flex justify-center items-center  border-2 w-72 py-6"
            >
                <h1 className="text-4xl font-bold mb-4">Sign-up</h1>
                <div className="flex  gap-1 flex-col">
                    <label htmlFor="userName" className="font-bold">
                        {" "}
                        Plese Enter User Name
                    </label>
                    <input
                        type="text"
                        required
                        name="usernName"
                        onChange={handleChanges}
                        id="userName"
                        placeholder="Name Here"
                        className="border-b text-lg outline-none rounded-full px-3"
                    />
                </div>
                <div className="flex  gap-1 flex-col">
                    <label htmlFor="email" className="font-bold">
                        {" "}
                        Plese Enter E-mail Address
                    </label>
                    <input
                        type="email"
                        required
                        name="email"
                        onChange={handleChanges}
                        id="email"
                        placeholder="E-mail Address"
                        className="border-b text-lg outline-none rounded-full px-3"
                    />
                </div>
                <div className="flex  gap-1 flex-col w-50 ">
                    <label htmlFor="userClass" className="font-bold">
                        {" "}
                        Plese Enter Class
                    </label>
                    {/* <input type="text"  placeholder="Class" className="border-b text-lg outline-none " /> */}
                    <select
                        name="class"
                        onChange={handleChanges}
                        id="userClass"
                        required
                        className="border-b text-lg outline-none w-full rounded-full px-2"
                        onClick={handleClass}
                    >
                        <option className="text-black" value="class" selected>
                            class
                        </option>
                        <option className="text-black" value="class-1">
                            Class-1
                        </option>
                        <option className="text-black" value="class-2">
                            Class-2
                        </option>
                        <option className="text-black" value="class-3">
                            Class-3
                        </option>
                        <option className="text-black" value="class-4">
                            Class-4
                        </option>
                        <option className="text-black" value="class-5">
                            Class-5
                        </option>
                        <option className="text-black" value="class-6">
                            Class-6
                        </option>
                        <option className="text-black" value="class-7">
                            Class-7
                        </option>
                        <option className="text-black" value="class-8">
                            Class-8
                        </option>
                        <option className="text-black" value="class-9">
                            Class-9
                        </option>
                        <option className="text-black" value="class-10">
                            Class-10
                        </option>
                        <option className="text-black" value="class-11">
                            Class-11
                        </option>
                        <option className="text-black" value="class-12">
                            Class-12
                        </option>
                    </select>
                </div>
                <button
                    className={`px-7 text-black font-black py-3 rounded-tl-full rounded-br-full bg-green-500 border submit${choosenClass == "class" ? "disabled" : "abled"
                        }`}
                >
                    Sign Up
                </button>
                <a href="#">Allready have an Account</a>
            </form>
        </div>
    );
}
