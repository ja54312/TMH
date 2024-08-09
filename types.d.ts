//Aqui se ponen types que se usan en varios archivos
interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

type ProductType = {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    handle: string;
    tags: string;
};