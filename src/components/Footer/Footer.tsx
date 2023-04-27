import LanguageSelect from "../UI/LanguageSelect/LanguageSelect";
import classes from "./Footer.module.css";

const Footer = (props: any) => {
  return (
    <div className={classes.footerMaster}>
      <div className={classes.footer}>
        
        <div>
          <ul className={classes.contactList}>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Centro de ajuda</a>
            </li>
            <li>
              <a href="#">Conta</a>
            </li>
            <li>
              <a href="#">Media Center</a>
            </li>
            <li>
              <a href="#">Relações com Investidores</a>
            </li>
            <li>
              <a href="#">Empregos</a>
            </li>
            <li>
              <a href="#">Resgatar vales-presente</a>
            </li>
            <li>
              <a href="#">Comprar vales-presente</a>
            </li>
            <li>
              <a href="#">Formas de Assistir</a>
            </li>
            <li>
              <a href="#">Termos de uso</a>
            </li>
            <li>
              <a href="#">Privacidade</a>
            </li>
            <li>
              <a href="#">Preferências de Cookies</a>
            </li>
            <li>
              <a href="#">Informação corporativa</a>
            </li>
            <li>
              <a href="#">Contate-nos</a>
            </li>
            <li>
              <a href="#">Teste rápido</a>
            </li>
            <li>
              <a href="#">Noticias legais</a>
            </li>
            <li>
              <a href="#">Só na Netflix</a>
            </li>
          </ul>
        </div>
        <div className={classes.footerLangSelect}>
          <LanguageSelect id="footer_lang_select" className="" />
        </div>
        <span className={classes.copyright}>Netflix Brazil</span>
        <div className={classes.attribution}>
          Codificado por:{" "}
          <a href="https://github.com/felipejohnsonn">Felipe Johnson</a>
          <br />
          Original site:{" "}
          <a href="https://www.netflix.com/br-en/">Netflix Brazil</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
