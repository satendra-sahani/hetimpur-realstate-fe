import { LoginForm } from "@/components/auth/login-form";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Fragment } from "react";

export default function Login() {
    return (
        <Fragment>
            <Header />
            <br />
            <LoginForm />
            <br />
            <Footer />
        </Fragment>
    )
}