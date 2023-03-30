
import profile from "../json/profile.json";
export default function Header() {
    return (
        <div className=" px-32  bg-black/80 fixed w-screen z-20 ">
            <div className="flex flex-row justify-between">
                <div  className="w-24 h-24">
                    <img src={profile.logo} />
                </div>
                <div className="flex flex-row items-center space-x-4">
                    <span className="text-white">HOME</span>
                    <span className="text-white">ABOUT</span>
                    <span className="text-white">SERVICES</span>
                    <span className="text-white">WORK</span>
                </div>
            </div>

        </div>
    )
}