import React, { createContext, useState, useContext } from "react";

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companies, setCompanies] = useState([
    {
      id: "symplifica",
      imageLogoSrc: "https://i.postimg.cc/dQdVh7Vq/symplifica.png",
      imageSrc: "https://i.postimg.cc/85PFysmc/image.png",
      title: "Symplifica",
      subtitle: "Gestiona los empleados para tu hogar o negocio",
      description: "Este es un ejemplo de descripción.",
      avatars: [
        "https://i.postimg.cc/jdRQZN67/image.png",
        "https://i.postimg.cc/PqfxPWDd/image.png",
        "https://i.postimg.cc/6pt6mrYC/image.png",
      ],
      beneficios: [
        {
          title: "Afilia a tu trabajadora a Seguridad Social.",
          description: ""
        },
        {
          title: "Realiza la liquidación y finaliza la relación laboral según la ley.",
          description: ""
        },
        {
          title: "Paga automáticamente con tarjeta de crédito la nómina y seguridad social.",
          description: ""
        },
        {
          title: "Gestiona incapacidades, permisos, primas, cesantías y más.",
          description: ""
        }
      ],
      linkAS: 'https://apps.apple.com/co/app/symplifica/id1156939578?utm_source=website&utm_medium=button&utm_campaign=link-home-app-IOS-footer',
      linkPS: 'https://play.google.com/store/apps/details?id=com.symplifica.symplifica&hl=es_CO&utm_source=website&utm_medium=button&utm_campaign=link-home-app-Android-footer&pli=1'
    },
    {
      id: "fitpal",
      imageLogoSrc: "https://i.postimg.cc/wBmPDTpp/logo-fitpal.png",
      imageSrc: "https://i.postimg.cc/2jg7z6Fk/empre.png",
      title: "Fitpal",
      subtitle: "Empresa de tecnología de la salud",
      description: "Este es otro ejemplo de descripción.",
      avatars: [
        "https://i.postimg.cc/6pt6mrYC/image.png",
        "https://i.postimg.cc/jdRQZN67/image.png",
        "https://i.postimg.cc/PqfxPWDd/image.png",
      ],
      beneficios: [
        {
          title: "Más de 500 aliados para cuidar tu salud y cumplir tus objetivos",
          description: "Descubre centros boutique, gimnasios, spa's, estudios de yoga y muchas opciones más."
        },
        {
          title: "Tú tienes el control",
          description: "Encuentra un catálogo de clases, instructores y centros para que elijas el que mejor se adapte a ti."
        },
        {
          title: "Conviertete en toda una leyenda",
          description: "Completa tus objetivos y sube de nivel. Entre más alto sea tu nivel, más beneficios y recompensas desbloquearas."
        }
      ],
      linkAS: 'https://apps.apple.com/co/app/fitpal/id1186401110',
      linkPS: 'https://play.google.com/store/apps/details?id=com.fitpal.fitpal&hl=es_CO'
    },
    {
      id: "hogaru",
      imageLogoSrc: "https://i.postimg.cc/GpCnydFG/hogaru.png",
      imageSrc: "https://i.postimg.cc/rmRHnHNM/logo-hogaru-white-over-blue-600x400.png",
      title: "Hogaru",
      subtitle: "Empresa lider en servicios de aseo",
      description: "Este es otro ejemplo de descripción.",
      beneficios: [
        {
          title: "Una misma cara",
          description: "Con el plan mensual irá la misma profesional a tu hogar."
        },
        {
          title: "Flexibilidad",
          description: "Toma los servicios en los días y horarios que necesites."
        },
        {
          title: "Sin preocupaciones",
          description: "Nosotros nos encargamos de toda la gestión y dotación del personal."
        }
      ],
      avatars: [
        "https://i.postimg.cc/PqfxPWDd/image.png",
        "https://i.postimg.cc/6pt6mrYC/image.png",
        "https://i.postimg.cc/jdRQZN67/image.png",
      ],
      linkAS: 'https://apps.apple.com/co/app/hogaru/id1045276996?l=en-GB',
      linkPS: 'https://play.google.com/store/apps/details?id=com.hogaru.clientApp&pcampaignid=web_share'
    }  ]);

  return (
    <CompanyContext.Provider value={{ companies }}>
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompanies = () => {
  const context = useContext(CompanyContext);

  if (!context) {
    throw new Error("useCompanies debe usarse dentro de un CompanyProvider");
  }

  return context;
};
