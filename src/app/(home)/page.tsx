//Components
import { Metadata } from "next"
import { HeroForm } from "@/components/home/HeroForm"
import { StatsHome } from "@/components/home/StatsHome"
import { ServiciosTab } from "@/components/home/ServiciosTab"
import { DescubreComoViajamos } from "@/components/home/DescubreComoViajamos"
import { SolucionesLogistica } from "@/components/home/SolucionesLogistica"
import { SecondBannerInfo } from "@/components/home/SecondBannerInfo"

export const metadata: Metadata = {
    title: "TMH – Soluciones integrales en Logística",
    description: "",
    keywords: [""],
}


export default function Home() {
    return (
        <main>
            <HeroForm />
            <StatsHome />
            <ServiciosTab />
            <DescubreComoViajamos />
            <SolucionesLogistica />
            <SecondBannerInfo />
        </main>
    )
}