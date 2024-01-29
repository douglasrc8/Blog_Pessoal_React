import React from 'react';


import 'reactjs-popup/dist/index.css';


import './ModalPostagem.css'
import FormularioPostagem from '../formularioPostagem/FormularioPostagem';
import Popup from 'reactjs-popup';

function ModalPostagem() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Nova postagem</button>} modal>
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;