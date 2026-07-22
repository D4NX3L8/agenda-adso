export default function App() {
  const fecha = new Date().toLocaleString();
  return (
    <main>
      <h1>Hola SENA</h1>
      <h2>Fecha y hora actual: {fecha}</h2>
      <p>Soy Daniel Ochoa y esta es mi primera clase de ReactJS</p>
    </main>
  );
}
