import './App.css';
import Test from './components/Test';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import FetchData from './components/FetchData';
import { PersonPage } from "./components/PersonPage";
import { EditPersonName } from "./components/EditPersonName";
import { Message } from "./components/image";
import { ContactForm } from './components/ContactForm/ContactForm';
import { AttachmentForm } from './components/AttachmentForm/AttachmentForm';
import { ViewPersonButton } from "./components/ViewPersonButton";
import { HelloMocking } from './components/HelloRendering';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       <Route path="/" element={<>
     <h2> Edit Person Name</h2>
     <EditPersonName id={0} />
     <hr/>
     <h2> Message </h2>
     <Message message="Successfully saved" />
     <Message message="A problem has occurred" type="error" />
     <hr/>
     <h2> Contact Form  </h2>
     <ContactForm />
     <hr/>
     <h2> Attachment Form </h2>
     <AttachmentForm />
     <hr/>

      <ViewPersonButton personId={1} />
      <hr/>
      <h2> Person Page </h2>
       <PersonPage id={1} />
       <hr/>
       
      </>} />
       <Route path="/PersonPage" element = { <>
       <h2> Person Page </h2>
       <PersonPage id={1} />
       </>
       } />
       <Route path="/HelloMocking" element={
        <>
       <h2> Hello Mocking </h2>
         <HelloMocking id={1} />
</>
         } />
      </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
