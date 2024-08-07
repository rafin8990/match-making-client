import { useState } from "react"
import PersonalInformationForm from "./PersonalInformationForm"
import OthersInformationForm from "./OthersInformationForm"



const InformationContainer = () => {
    const [step, setStep] = useState(1)
    return (
        <div>

            {
                step === 1 && <PersonalInformationForm setStep={setStep} handleDataSubmit={() => undefined} isSubmitting={false} />
            }
            {
                step === 2 && <OthersInformationForm handleDataSubmit={() => undefined} isSubmitting={false} />
            }
        </div>
    )
}

export default InformationContainer