import Greet from "./Components/Greet";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";
import WelcomeMessage from "./Components/WelcomeMessage";
import JsxRules from "./Components/JsxRules";
import ProductInfo from "./Components/ProductInfo"
const App = () => {
  return (
    <>
    <WelcomeMessage/>
    <Header/>
      <h1>
        hello
      </h1>
      <JsxRules/>
      <Greet />
      <MainContent/>
      <ProductInfo/>
      <Footer/>
    </>
  )
}
export default App;