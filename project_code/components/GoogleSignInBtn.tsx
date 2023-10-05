import { FC, ReactNode, useState } from "react"
import { Button } from "./ui/button"

interface GoogleSignInBtnProps {
    children: ReactNode
}

const GoogleSignInBtn: FC<GoogleSignInBtnProps> = ({ children }) => {
    const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

    const loginWithGoogle = async () => {
        const clientId = "702499301347-78ac0vqh78ci69svej55aon0jjq50cle.apps.googleusercontent.com";
        const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${window.location.origin}&response_type=code&scope=email%20profile`;

        try {
            const response = await fetch("YOUR_BACKEND_ENDPOINT");
            const data = await response.json();
            setRedirectUrl(data.redirectUrl);
        } catch (error) {
            console.error("Error:", error);
        }

        window.location.href = authUrl;
    }

    if (redirectUrl) {
        window.location.href = redirectUrl; 
        return null; 
    }

    return (
        <Button onClick={loginWithGoogle} className="w-full">
            {children}
        </Button>
    )
}

export default GoogleSignInBtn;
