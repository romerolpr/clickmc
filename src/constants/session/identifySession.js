import { useRouter } from "next/router";
import { userService } from "../../services";

const identifySession = () => {

    const router = useRouter()
    const { userValue } = userService

    if (userValue == undefined) {
        router.push('/')
    }

}

export { identifySession }