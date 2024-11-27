import { CardApp } from '../components/CardApp';
import { Hero } from '../components/Hero';
import { Hero2 } from '../components/Hero2';
import { Categories } from "../components/Categories";
import { Carrusel } from "../components/Carousel";

export function HomeView() {
  return (
    <div>
      <Categories />
      <Hero />
      <div className="row my-5">
        <div className="col-12 col-sm-4 mb-3">
        <CardApp
          imageLogoSrc="https://i.postimg.cc/dQdVh7Vq/symplifica.png"
          imageSrc="https://i.postimg.cc/85PFysmc/image.png"
          title="Symplifica"
          subtitle="Gestiona los empleados para tu hogar o negocio"
          description="Este es un ejemplo de descripción."
          avatars={[
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40"
          ]}/>
        </div>
        <div className="col-12 col-sm-4 mb-3"><CardApp
          imageLogoSrc="https://via.placeholder.com/40"
          imageSrc="https://via.placeholder.com/600x300"
          title="Título de ejemplo"
          subtitle="Subtítulo dinámico"
          description="Este es un ejemplo de descripción."
          avatars={[
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40"
          ]}/>
        </div>
        <div className="col-12 col-sm-4 mb-3"><CardApp
          imageLogoSrc="https://via.placeholder.com/40"
          imageSrc="https://via.placeholder.com/600x300"
          title="Título de ejemplo"
          subtitle="Subtítulo dinámico"
          description="Este es un ejemplo de descripción."
          avatars={[
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40"
          ]}/>
        </div>
        <div className="col-12 col-sm-4 mb-3"><CardApp
          imageLogoSrc="https://via.placeholder.com/40"
          imageSrc="https://via.placeholder.com/600x300"
          title="Título de ejemplo"
          subtitle="Subtítulo dinámico"
          description="Este es un ejemplo de descripción."
          avatars={[
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40"
          ]}/>
        </div>
        <div className="col-12 col-sm-4 mb-3"><CardApp
          imageLogoSrc="https://via.placeholder.com/40"
          imageSrc="https://via.placeholder.com/600x300"
          title="Título de ejemplo"
          subtitle="Subtítulo dinámico"
          description="Este es un ejemplo de descripción."
          avatars={[
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40"
          ]}/>
        </div>
        <div className="col-12 col-sm-4 mb-3"><CardApp
          imageLogoSrc="https://via.placeholder.com/40"
          imageSrc="https://via.placeholder.com/600x300"
          title="Título de ejemplo"
          subtitle="Subtítulo dinámico"
          description="Este es un ejemplo de descripción."
          avatars={[
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40"
          ]}/>
        </div>
      </div>
      <Hero2 />
      <Carrusel />
    </div>
  );
}