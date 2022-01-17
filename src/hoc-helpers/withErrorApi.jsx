import { useState } from "react"
import ErrorMessage from "@components/ErrorMessage"

export const withErrorApi = View => {
    return props => {
        const [errorAoi, setErrorApi] = useState(false)

        return (
            <>
                {errorAoi
                    ? <ErrorMessage />
                    : (
                            <View 
                            setErrorApi={setErrorApi}
                            {...props} />
            )
        }
            </>
        )
    }
}