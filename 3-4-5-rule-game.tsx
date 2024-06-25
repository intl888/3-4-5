import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Juego345 = () => {
  const [lado1, setLado1] = useState(0);
  const [lado2, setLado2] = useState(0);
  const [respuestaUsuario, setRespuestaUsuario] = useState('');
  const [retroalimentacion, setRetroalimentacion] = useState('');
  const [puntuacion, setPuntuacion] = useState(0);

  const generarPregunta = () => {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5) + 1;
    setLado1(a);
    setLado2(b);
    setRespuestaUsuario('');
    setRetroalimentacion('');
  };

  useEffect(() => {
    generarPregunta();
  }, []);

  const verificarRespuesta = () => {
    const respuestaCorrecta = Math.sqrt(lado1 * lado1 + lado2 * lado2).toFixed(2);
    if (parseFloat(respuestaUsuario).toFixed(2) === respuestaCorrecta) {
      setRetroalimentacion('¡Correcto! ¡Bien hecho!');
      setPuntuacion(puntuacion + 1);
    } else {
      setRetroalimentacion(`Incorrecto. La respuesta correcta es ${respuestaCorrecta}.`);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Juego de práctica de la regla 3-4-5</h2>
      <p className="mb-4">
        Dados dos lados de un triángulo rectángulo, calcula la longitud de la hipotenusa.
        Redondea tu respuesta a dos decimales.
      </p>
      <div className="mb-4">
        <p>Lado 1: {lado1}</p>
        <p>Lado 2: {lado2}</p>
      </div>
      <Input
        type="number"
        step="0.01"
        value={respuestaUsuario}
        onChange={(e) => setRespuestaUsuario(e.target.value)}
        placeholder="Ingresa tu respuesta"
        className="mb-4"
      />
      <Button onClick={verificarRespuesta} className="mr-2">Verificar Respuesta</Button>
      <Button onClick={generarPregunta}>Nueva Pregunta</Button>
      {retroalimentacion && (
        <Alert className="mt-4" variant={retroalimentacion.includes('Correcto') ? 'default' : 'destructive'}>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Retroalimentación</AlertTitle>
          <AlertDescription>{retroalimentacion}</AlertDescription>
        </Alert>
      )}
      <p className="mt-4">Puntuación: {puntuacion}</p>
    </div>
  );
};

export default Juego345;
