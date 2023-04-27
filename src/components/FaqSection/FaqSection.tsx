import { BaseSyntheticEvent } from "react";
import classes from "./FaqSection.module.css";
import CreateAccount from "../UI/CreateAccount/CreateAccount";

const FaqSection = (props: any) => {
  const toggleAnswer = (e: BaseSyntheticEvent) => {
    const el = e.target.closest("div");
    const parent = el.parentNode;

    if (el.classList.contains(classes.questionContainer)) {
      parent.classList.toggle(classes.active);
    }
  };
  return (
    <div className={classes.faqSectionMaster}>
      <div className={classes.faqItemsContainer} onClick={toggleAnswer}>
        <h2>Perguntas Frequentes</h2>
        <div className={classes.faqItemContainer}>
          <div className={classes.questionContainer}>
            <span>O que é Netflix?</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="default-ltr-cache-1tgeghn e1tuurd64"
              data-name="Add"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className={classes.answerContainer}>
            <span>
              Netflix é um serviço de streaming que oferece uma ampla variedade de
              programas de TV premiados, filmes, anime, documentários e muito mais em
              milhares de dispositivos conectados à Internet.
              <br />
              <br />
              Você pode assistir o quanto quiser, quando quiser -tudo por um
              preço mensal baixo. Há sempre algo novo para descobrir e
              novos programas de TV e filmes são adicionados toda semana!
            </span>
          </div>
        </div>

        <div className={classes.faqItemContainer}>
          <div className={classes.questionContainer}>
            <span>Quanto custa a Netflix?</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="default-ltr-cache-1tgeghn e1tuurd64"
              data-name="Add"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className={classes.answerContainer}>
            <span>
              Assista à Netflix em seu smartphone, tablet, Smart TV, laptop ou
              dispositivo de streaming, tudo por uma taxa mensal fixa. Os planos variam de
              R$ 18,90 a R$ 55,90 por mês. Sem custos extras, sem contratos.
            </span>
          </div>
        </div>

        <div className={classes.faqItemContainer}>
          <div className={classes.questionContainer}>
            <span>Onde posso assistir?</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="default-ltr-cache-1tgeghn e1tuurd64"
              data-name="Add"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className={classes.answerContainer}>
            <span>
              Assista em qualquer lugar, a qualquer hora. Faça login com sua conta Netflix para
              assista instantaneamente na web em netflix.com de seu computador pessoal
              computador ou em qualquer dispositivo conectado à Internet que ofereça o
              Aplicativo Netflix, incluindo smart TVs, smartphones, tablets, streaming
              reprodutores de mídia e consoles de jogos.
              <br />
              <br />
              Você também pode baixar seus programas favoritos com iOS, Android,
              ou aplicativo do Windows 10. Use downloads para assistir enquanto estiver em movimento
              e sem conexão com a internet. Leve a Netflix com você
              em qualquer lugar.
            </span>
          </div>
        </div>

        <div className={classes.faqItemContainer}>
          <div className={classes.questionContainer}>
            <span>Como faço para cancelar?</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="default-ltr-cache-1tgeghn e1tuurd64"
              data-name="Add"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className={classes.answerContainer}>
            <span>
              Netflix é flexível. Não há contratos chatos e nem
              compromissos. Você pode facilmente cancelar sua conta online em dois
              cliques. Não há taxas de cancelamento -inicie ou interrompa seu
              conta a qualquer momento.
            </span>
          </div>
        </div>

        <div className={classes.faqItemContainer}>
          <div className={classes.questionContainer}>
            <span>O que posso assistir na Netflix?</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="default-ltr-cache-1tgeghn e1tuurd64"
              data-name="Add"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className={classes.answerContainer}>
            <span>
              A Netflix tem uma extensa biblioteca de longas-metragens, documentários,
              Programas de TV, anime, originais premiados da Netflix e muito mais. Assistir
              quanto quiser, quando quiser.
            </span>
          </div>
        </div>

        <div className={classes.faqItemContainer}>
          <div className={classes.questionContainer}>
            <span>Netflix é bom para crianças?</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="default-ltr-cache-1tgeghn e1tuurd64"
              data-name="Add"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className={classes.answerContainer}>
            <span>
              A experiência Netflix Kids está incluída na sua assinatura para oferecer
              os pais controlam enquanto as crianças desfrutam de programas de TV para toda a família e
              filmes em seu próprio espaço.
              <br />
              <br />
              Os perfis infantis vêm com controles dos pais protegidos por PIN que permitem
              você restringe a classificação etária do conteúdo que as crianças podem assistir e
              bloqueie títulos específicos que você não quer que as crianças vejam.
            </span>
          </div>
        </div>
        <CreateAccount
          labelId="footer_email_label"
          id="footer_create_account"
          className={classes.faqCreateAccount}
        />
      </div>
    </div>
  );
};

export default FaqSection;
