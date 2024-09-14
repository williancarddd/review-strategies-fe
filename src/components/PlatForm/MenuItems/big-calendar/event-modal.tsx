import { Input } from '@/components/ui/input';
import { EventTheme } from '@/interfaces/event';
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date | null;
  events: EventTheme[];
  onCreateEvent: (newEvent: EventTheme) => void;
  onUpdateEvent: (updatedEvent: EventTheme) => void;
}

export default function EventModal({
  isOpen,
  onClose,
  selectedDate,
  events,
  onCreateEvent,
  onUpdateEvent,
}: EventModalProps) {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(selectedDate ? selectedDate.toISOString().substring(0, 10) : '');
  const [mode, setMode] = useState('');
  const [editorContent, setEditorContent] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<EventTheme | null>(null);
  const [bounceClass, setBounceClass] = useState('animate-bounce-once'); // Classe para a animação de pulo

  // Filtra eventos para o dia selecionado
  const filteredEvents = events.filter(
    (event) =>
      selectedDate &&
      new Date(event.start).toDateString() === selectedDate.toDateString()
  );

  useEffect(() => {
    if (isOpen) {
      // Quando o modal abre, ativa o bounce
      setBounceClass('animate-bounce-once');

      // Remove o efeito de bounce após 1 segundo
      setTimeout(() => {
        setBounceClass('');
      }, 1000);
    } else {
      resetInputs();
    }
  }, [isOpen]);

  const resetInputs = () => {
    setTitle('');
    setStartDate(selectedDate ? selectedDate.toISOString().substring(0, 10) : '');
    setMode('');
    setEditorContent('');
    setSelectedEvent(null); // Limpar o evento selecionado
  };

  const handleSave = () => {
    if (selectedEvent) {
      // Atualiza o evento existente
      onUpdateEvent({
        ...selectedEvent,
        title,
        start: new Date(startDate),
        mode,
        description: editorContent,
      });
    } else {
      // Cria um novo evento
      onCreateEvent({
        title,
        start: new Date(startDate),
        end: new Date(startDate),
        mode,
        description: editorContent,
        completed: false,
      });
    }
    onClose();
  };

  const handleSelectEvent = (event: EventTheme) => {
    setSelectedEvent(event);
    setTitle(event.title);
    setStartDate(event.start.toISOString().substring(0, 10));
    setMode(event.mode || '');
    setEditorContent(event.description || '');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className={`h-4/5 bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-2xl md:max-w-3xl lg:max-w-4xl relative ${bounceClass}`}
        onClick={(e) => e.stopPropagation()} // Evita fechar o modal ao clicar dentro dele
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
          {selectedDate ? `Eventos do Dia ${selectedDate.toDateString()}` : 'Novo Evento'}
        </h2>

        {/* Inputs: Título, Data Inicial e Modo */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <Input
            className="p-2 border border-gray-300 rounded-lg shadow-md hover:shadow-lg focus:shadow-lg transition duration-300"
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            className="p-2 border border-gray-300 rounded-lg shadow-md hover:shadow-lg focus:shadow-lg transition duration-300"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <Input
            className="p-2 border border-gray-300 rounded-lg shadow-md hover:shadow-lg focus:shadow-lg transition duration-300"
            type="text"
            placeholder="Modo"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          />
        </div>

        {/* Descrição */}
        <div className="mb-4">
          <ReactQuill
            theme="snow"
            value={editorContent}
            onChange={setEditorContent}
            modules={{
              toolbar: [
                [{ header: '1' }, { header: '2' }, { font: [] }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['bold', 'italic', 'underline'],
                ['link'],
              ],
            }}
            className="h-32"
          />
        </div>

        {/* Lista de eventos para o dia selecionado */}
        <div className="space-y-4 mt-16">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 border
                 border-gray-300 rounded-lg hover:bg-blue-100 
                 cursor-pointer transition-all duration-300 ease-in-out"
                onClick={() => handleSelectEvent(event)}
              >
                <span>{event.title}</span>
                <div className="flex space-x-2">
                  <input type="checkbox" checked={event.completed} readOnly />
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Nenhum evento para este dia.</p>
          )}
        </div>

        {/* Botões */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 space-x-0 sm:space-x-6">
          {/* Botão Limpar */}


          <div className="flex space-x-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition-all"
              onClick={resetInputs}
            >
              Limpar
            </button>

            {selectedEvent ? (
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all"
                onClick={handleSave}
              >
                Atualizar
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
                onClick={handleSave}
              >
                Criar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
