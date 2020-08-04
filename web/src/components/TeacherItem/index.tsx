import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/43323955?s=460&u=dddf5471f002b4b0c715e2bc9e5e79fd89dfa2ba&v=4" alt=""/>
        <div>
          <strong>Vinicius Santos</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing.
        <br /><br/>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non doloremque 
        incidunt soluta ratione error provident quibusdam illum cupiditate minus libero.
      </p>

      <footer>
        <p>Preço/Hora <strong>R$ 50,00</strong></p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;