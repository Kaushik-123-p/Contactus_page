import "./App.css";
import ContactForm from "./Components/ContactForm";
import Contact from "./Components/ContactForm";
import ContactHeader from "./Components/ContactHeader";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <main className="mx-36">
        <ContactHeader />
        <ContactForm />
      </main>
    </>
  );
}

export default App;
