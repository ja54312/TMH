//Components
import { Metadata } from "next"
import { BackgroundWhite } from "@/components/shared/BackgroundWhite"
import { BannerHeroBlog } from "@/components/blog/BannerHeroBlog"
import { ArticleMain } from "@/components/blog/ArticleMain"
import { CarruselArticles } from "@/components/blog/CarruselArticles"
import { ArticleSecondary } from "@/components/blog/ArticleSecondary"


export const metadata: Metadata = {
    title: "TMH – Soluciones integrales en Logística-Blog",
    description: "",
    keywords: []
}


export default function Blog() {
    return (
        <main>
            <BackgroundWhite>
                <BannerHeroBlog />
                <ArticleMain />
                <CarruselArticles />
                <ArticleSecondary />
            </BackgroundWhite>
        </main>
    )
}