import { useSpeedometer } from "./hooks/useSpeedometer";

const Speedometer = () => {
    const {
        speed
    } = useSpeedometer();

    return (
        <div>{speed}</div>
    )
}

export default Speedometer;