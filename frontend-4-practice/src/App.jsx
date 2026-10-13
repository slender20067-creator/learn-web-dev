import Header from "./components/common/Header";
import StepIndicator from "./components/common/StepIndicator";
import BookingScreen from "./screens/BookingScreen";
import Footer from "./components/common/Footer";
import "./styles/styles.css";

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <StepIndicator />
      <BookingScreen />
      <Footer />
    </div>
  );
}

export default App;
