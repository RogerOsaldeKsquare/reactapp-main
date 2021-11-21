import React, {useState} from "react";
import Modal from "react-modal"
//import Films from '../components/Films';

Modal.setAppElement('#root')
const customStyles = {
  content: {
    top: '35%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '60%',
    transform: 'translate(-40%, -10%)',
  },
};

function ModalF({films}){
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return(
    <div className="Modal">
      <button onClick={()=> setModalIsOpen(true)}>More Info</button>
      <Modal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false) } style={customStyles}>
        <h1>{films.title}</h1>
        <h2>Director</h2>
        <p>{films.director}</p>
        <h3>Producer</h3>
        <p>{films.producer}</p>
        <h4>Opening Crawl</h4>
        <p>{films.opening_crawl}</p>
        <button onClick={()=> setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  )
}

export default ModalF