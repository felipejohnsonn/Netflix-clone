import GridItem from "../GridItem/GridItem";
import classes from "./GridItemsContainer.module.css";
import enjoyOnTv from "../../assets/img/enjoyOnTv.png";
import watchEverywhere from "../../assets/img/watchEverywhere.png";
import kids from "../../assets/img/netflixKids.png";
import download from "../../assets/img/download.png";

const itemsData = [
  {
    imgSrc: enjoyOnTv,
    alt: "Divirta-se na sua tv",
    title: "Divirta-se na sua TV.",
    text: "Assista em Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players e muito mais.",
  },
  {
    imgSrc: watchEverywhere,
    alt: "Assista em todos os lugares",
    title: "Assista em todos os lugares.",
    text: "Transmita filmes e programas de TV ilimitados em seu telefone, tablet, laptop e TV sem pagar mais.",
  },
  {
    imgSrc: kids,
    alt: "Crie perfis para crianças",
    title: "Crie perfis para crianças.",
    text: "Envie as crianças em aventuras com seus personagens favoritos em um espaço feito apenas para eles -grátis com sua assinatura.",
  },
  {
    imgSrc: download,
    alt: "Assistir off-line",
    title: "Baixe seus programas para assistir offline.",
    text: "Disponível apenas em planos sem anúncios.",
  },
];

const GridItemsContainer = (props: any) => {
  return (
    <div className={classes.gridItemsContainer}>
      {itemsData.map((item, index) => {
        return (
          <GridItem
            className=""
            key={index}
            alt={item.alt}
            src={item.imgSrc}
            title={item.title}
            text={item.text}
          />
        );
      })}
    </div>
  );
};

export default GridItemsContainer;
