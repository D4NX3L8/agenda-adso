import { useState } from "react";

export default function FormularioContacto({ onAgregar }) {
  // Estado del formulario como objeto único controlado
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    etiqueta: "",
  });

  // Estado para almacenar los errores de validación
  const [errores, setErrores] = useState({
    nombre: "",
    telefono: "",
    correo: "",
  });

  // Estado para controlar el envío del formulario
  const [enviando, setEnviando] = useState(false);

  // onChange genérico: actualiza el campo según "name"
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Valida los campos obligatorios del formulario
  function validarFormulario() {
    const nuevosErrores = {
      nombre: "",
      telefono: "",
      correo: "",
    };

    // Validar nombre
    if (!form.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }

    // Validar teléfono
    if (!form.telefono.trim()) {
      nuevosErrores.telefono = "El teléfono es obligatorio.";
    } else if (form.telefono.trim().length < 7) {
      nuevosErrores.telefono =
        "El teléfono debe tener al menos 7 dígitos.";
    }

    // Validar correo
    if (!form.correo.trim()) {
      nuevosErrores.correo = "El correo es obligatorio.";
    } else if (!form.correo.includes("@")) {
      nuevosErrores.correo = "El correo debe contener @.";
    }

    // Guardamos los errores
    setErrores(nuevosErrores);

    // Retorna true únicamente si no existen errores
    return (
      !nuevosErrores.nombre &&
      !nuevosErrores.telefono &&
      !nuevosErrores.correo
    );
  }

  // onSubmit: valida y llama al padre
  const onSubmit = async (e) => {
    e.preventDefault();

    // Ejecutamos la validación
    const esValido = validarFormulario();

    // Si existen errores, no enviamos el formulario
    if (!esValido) return;

    try {
      // Activamos el estado de envío
      setEnviando(true);

      // Llamamos la función del componente padre
      await onAgregar(form);

      // Reseteamos el formulario únicamente si se guardó correctamente
      setForm({
        nombre: "",
        telefono: "",
        correo: "",
        etiqueta: "",
      });

      // Limpiamos los errores
      setErrores({
        nombre: "",
        telefono: "",
        correo: "",
      });
    } finally {
      // Volvemos a activar el botón al terminar
      setEnviando(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Grid: 1 columna en móvil, 2 en pantallas medianas+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Campo: Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre *
          </label>

          <input
            className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
            name="nombre"
            placeholder="Ej: Camila Pérez"
            value={form.nombre}
            onChange={onChange}
          />

          {/* Error del nombre */}
          {errores.nombre && (
            <p className="mt-1 text-xs text-red-600">
              {errores.nombre}
            </p>
          )}
        </div>

        {/* Campo: Teléfono */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono *
          </label>

          <input
            className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
            name="telefono"
            placeholder="Ej: 300 123 4567"
            value={form.telefono}
            onChange={onChange}
          />

          {/* Error del teléfono */}
          {errores.telefono && (
            <p className="mt-1 text-xs text-red-600">
              {errores.telefono}
            </p>
          )}
        </div>
      </div>

      {/* Campo: Correo */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Correo *
        </label>

        <input
          className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
          name="correo"
          placeholder="Ej: camila@sena.edu.co"
          value={form.correo}
          onChange={onChange}
        />

        {/* Error del correo */}
        {errores.correo && (
          <p className="mt-1 text-xs text-red-600">
            {errores.correo}
          </p>
        )}
      </div>

      {/* Campo: Etiqueta opcional */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Etiqueta (opcional)
        </label>

        <input
          className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
          name="etiqueta"
          placeholder="Ej: Trabajo"
          value={form.etiqueta}
          onChange={onChange}
        />
      </div>

      {/* Botón principal */}
      <button
        type="submit"
        disabled={enviando}
        className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-semibold shadow-sm"
      >
        {enviando ? "Guardando..." : "Agregar contacto"}
      </button>
    </form>
  );
}