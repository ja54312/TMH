//Components
import { Metadata } from "next"
import { BackgroundWhite } from "@/components/shared/BackgroundWhite"
import { BannerArticle } from "@/components/article/BannerArticle"
import { ContentArticle } from "@/components/article/ContentArticle"

export const metadata: Metadata = {
    title: "TMH – Soluciones integrales en Logística-Blog",
    description: "",
    keywords: []
}


export default function EjemploBlog01() {
    return (
        <main>
            <BackgroundWhite>
                <BannerArticle />
                <ContentArticle />
            </BackgroundWhite>
        </main>
    )
}