import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation } from "react-i18next";

const Language = (props) => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <NavDropdown
        title={i18n.language === "vi" ? "Tiếng Việt" : "Vietnamese"}
        id="basic-nav-dropdown2"
        className="language">
        <NavDropdown.Item onClick={() => handleChangeLanguage()}>
          English
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleChangeLanguage()}>
          Tiếng Việt
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};
export default Language;
