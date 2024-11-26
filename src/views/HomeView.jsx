import { CardApp } from '../components/CardApp';
import { Hero } from '../components/Hero';
import { Hero2 } from '../components/Hero2';
import { Categories } from "../components/Categories";

export function HomeView() {
  return(
    <div>
      <Categories />
      <Hero />
      <div className="row my-5">
        <div className="col-12 col-sm-4 mb-3">{CardApp()}</div>
        <div className="col-12 col-sm-4 mb-3">{CardApp()}</div>
        <div className="col-12 col-sm-4 mb-3">{CardApp()}</div>
        <div className="col-12 col-sm-4 mb-3">{CardApp()}</div>
        <div className="col-12 col-sm-4 mb-3">{CardApp()}</div>
        <div className="col-12 col-sm-4 mb-3">{CardApp()}</div>
      </div>
      <Hero2 />
    </div>
  );
}