import { RegisterForm } from "@/components/auth/register-form";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Fragment } from "react";

export default function Register() {
    return (
        <Fragment>
            <Header />
            <br />
            <RegisterForm />
            <br />
            <Footer />
        </Fragment>
    )
}