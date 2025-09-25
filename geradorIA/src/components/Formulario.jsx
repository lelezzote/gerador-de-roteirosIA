
import { useState } from "react";
import "../styles.css";

export default function Formulario() {
  const [formData, setFormData] = useState({
    materia: "",
    ano: "",
    objetivo: "",
    duracao: "",
    tipoAula: "",
    exercicio: false,
    detalhesExercicio: "",
  });

  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData({ 
    ...formData, 
    [name]: type === "checkbox" ? checked : value 
  });
};


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    alert("Formulário enviado! Veja no console.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulário</h2>

      <label>Matéria:</label>
      <input type="text" name="materia" onChange={handleChange} />

      <label>Ano da turma:</label>
      <input type="text" name="ano" onChange={handleChange} />

      <label>Objetivo da aula:</label>
      <textarea name="objetivo" onChange={handleChange} />

      <label>Duração (minutos):</label>
      <input type="number" name="duracao" onChange={handleChange} />

      <label>Tipo de aula:</label>
      <select name="tipoAula" onChange={handleChange}>
        <option value="">Selecione</option>
        <option value="expositiva">Expositiva</option>
        <option value="pratica">Prática</option>
        <option value="avaliacao">Avaliação</option>
      </select>


  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <input  type="checkbox" name="exercicio" onChange={handleChange} checked={formData.exercicio} />
    <label>Deseja incluir exercícios?</label>
  </div>

  {formData.exercicio && (
    <>
      <label>Detalhes dos exercícios:</label>
      <textarea name="detalhesExercicio" onChange={handleChange} placeholder="Ex: questões de múltipla escolha, problemas de lógica, etc."/>
    </>
  )}


      <button type="submit">Enviar</button>
    </form>
  );
}
