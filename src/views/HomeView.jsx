import { useCompanies } from "../CompanyContext";
import { CardApp } from '../components/CardApp';
import { Hero } from '../components/Hero';
import { Hero2 } from '../components/Hero2';
import { Categories } from "../components/Categories";
import { Carrusel } from "../components/Carousel";

export function HomeView() {

  const { companies } = useCompanies();

  return (
    <div>
      <Categories />
      <Hero />
      <div className="row my-5">
      {companies.map((company) => (
          <div key={company.id} className="col-12 col-sm-4 mb-3">
            <CardApp
              id={company.id}
              imageLogoSrc={company.imageLogoSrc}
              imageSrc={company.imageSrc}
              title={company.title}
              subtitle={company.subtitle}
              stairs="⭐⭐⭐⭐⭐"
              avatars={company.avatars}
            />
          </div>
        ))}
      </div>
      <Hero2 />
      <Carrusel />
    </div>
  );
}