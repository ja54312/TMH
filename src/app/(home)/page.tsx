//Components
import { Metadata } from "next"
import { HeroForm } from "@/components/home/HeroForm"

export const metadata: Metadata = {
    title: "TMH – Soluciones integrales en Logística",
    description: "",
    keywords: [""],
}


export default function Home() {
    return (
        <main>
            <HeroForm />
        </main>
    )
}