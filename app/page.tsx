import Appointment from "./components/Appointment";
import Headerbar from "./components/Headerbar";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <div className="flex" >
        <Navbar />
        <div className="w-full border-2 border-red-700" >
          <Headerbar/>
          <Homepage />
          <Appointment/>
          </div>
      </div>
    </main>
  )
}
