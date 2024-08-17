//Components
import { Metadata } from "next"
import { HeroForm } from "@/components/home/HeroForm"
import { StatsHome } from "@/components/home/StatsHome"
import { ServiciosTab } from "@/components/home/ServiciosTab"
import { DescubreComoViajamos } from "@/components/home/DescubreComoViajamos"
import { SolucionesLogistica } from "@/components/home/SolucionesLogistica"
import { SecondBannerInfo } from "@/components/home/SecondBannerInfo"
import { ContactHome } from "@/components/home/ContactHome"

export const metadata: Metadata = {
    title: "TMH – Soluciones integrales en Logística",
    description: "",
    keywords: [
        "Servicios de logística",
        "Transporte de mercancías",
        "Gestión de inventarios",
        "Distribución de productos",
        "Almacenamiento seguro",
        "Soluciones logísticas",
        "Cadena de suministro",
        "Optimización logística",
        "Transporte de carga",
        "Almacén logístico",
        "Soluciones de transporte",
        "Gestión de cadenas de suministro",
        "Transporte de contenedores",
        "Logística y distribución",
        "Almacén y distribución",
        "Empresa de logística integral",
        "Transporte especializado",
    ]
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
            <ContactHome />
        </main>
    )
}