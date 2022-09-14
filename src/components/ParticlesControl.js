import Particles from "react-tsparticles";
import particlesJS from "./config/app"

const particlesControl = () => {
  return (
    <Particles props={particlesJS}></Particles>
  )
}

export default particlesControl;