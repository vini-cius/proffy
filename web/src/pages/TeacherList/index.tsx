import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';
import api from '../../services/api';

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers] = useState([]);

  async function handleSearchTeachers(e: FormEvent){
    e.preventDefault();

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    setTeachers(response.data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os Proffys disponíveis.">
        <form id="search-teachers" onSubmit={handleSearchTeachers}>
          <Select 
            name="subject" 
            label="Matéria"
            value={subject}
            onChange={e => { setSubject(e.target.value) }}
            options={[
              { value: 'Artes', label: 'Artes'},
              { value: 'Biologia', label: 'Biologia'},
              { value: 'Ciências', label: 'Ciências'},
              { value: 'Geografia', label: 'Geografia'},
              { value: 'Matemática', label: 'Matemática'},
              { value: 'Piano', label: 'Piano'},
            ]}
          />

          <Select 
            name="week_day" 
            label="Dia da semana"
            value={week_day}
            onChange={e => { setWeek_day(e.target.value) }}
            options={[
              { value: '0', label: 'Domingo'},
              { value: '1', label: 'Segunda'},
              { value: '2', label: 'Terça'},
              { value: '3', label: 'Quarta'},
              { value: '4', label: 'Quinta'},
              { value: '5', label: 'Sexta'},
              { value: '6', label: 'Sábado'},
            ]}
          />

          <Input 
            type="time" 
            name="time" 
            label="Hora" 
            value={time}
            onChange={e => { setTime(e.target.value) }}
          />

          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher:Teacher) => <TeacherItem key={teacher.id} teacher={teacher}/>)}
      </main>
    </div>
  );
}

export default TeacherList;