import React, { useState } from 'react';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [medsTaken, setMedsTaken] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hello David! I see you have exercises coming up today. How are you feeling?' }
  ]);

  const handleSend = () => {
    if (!chatInput.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: chatInput }]);
    setChatInput('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: 'I understand. Please take it slow and don\'t push yourself too hard. I\'m here if you need guidance on your exercises.' 
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Top AppBar */}
      <header className="bg-surface-container-low dark:bg-surface-container-lowest shadow-sm docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center w-full px-margin-mobile h-touch-target-min">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
              <img 
                className="w-full h-full object-cover" 
                alt="Profile" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo45rl_xoqOGPTrFqHxFBqysU1ypLj7gamRJaZovO58ZWNzG3zfSgYHxy6jnCNDv7XlhMHl4UjWqVwI9gu1JGmeDrwx_FR13xAKu97cUYgewTXPgLYDyjaR4dptgU9ajlZ6p7lJl1dqdunvD0YD9rGd7gBxgTNEO9UP2Ooy1XuouL6o88kiCrHt2BatfqHl_7AseRw4fsFlkfXqJpstzqTQSGz6A3Nx2YKUTcUpOrUFXAc9J1CKosMwxTbCeBTtzxgstDErz6gRf8Q"
              />
            </div>
            <h1 className="font-headline-md text-headline-md font-bold text-primary">Stroke Companion AI</h1>
          </div>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors duration-200">
            <span className="material-symbols-outlined text-primary">settings</span>
          </button>
        </div>
      </header>

      <main className="px-margin-mobile pt-stack-md space-y-stack-md max-w-2xl mx-auto pb-24">
        {/* Welcome Message */}
        <section>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Good morning, David.</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Let's stay consistent today.</p>
        </section>

        {/* Recovery Streak Card */}
        <section className="relative overflow-hidden bg-primary text-on-primary rounded-xl p-stack-md shadow-sm">
          <div className="relative z-10 flex justify-between items-center">
            <div>
              <p className="font-label-lg text-label-lg opacity-90">Recovery Streak</p>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile font-bold">12 Days Streak</h3>
            </div>
            <div className="bg-primary-container p-4 rounded-full">
              <span className="material-symbols-outlined text-4xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            </div>
          </div>
        </section>

        {/* Bento Grid: Progress & Upcoming */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Today's Progress */}
          <div className="bg-surface-container-high rounded-xl p-stack-md flex flex-col items-center justify-center space-y-4">
            <h4 className="font-label-lg text-label-lg self-start text-on-surface-variant">Today's Progress</h4>
            <div className="relative flex items-center justify-center">
              <svg className="w-32 h-32">
                <circle className="text-surface-variant stroke-current" cx="64" cy="64" fill="transparent" r="58" strokeWidth="8"></circle>
                <circle className="text-secondary stroke-current progress-ring__circle" cx="64" cy="64" fill="transparent" r="58" strokeDasharray="364.4" strokeDashoffset="145.7" strokeLinecap="round" strokeWidth="8"></circle>
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="font-headline-md text-headline-md font-bold">60%</span>
              </div>
            </div>
            <div className="w-full space-y-2">
              <div className="flex justify-between font-label-md text-label-md">
                <span>Exercises</span>
                <span className="font-bold">2/5</span>
              </div>
              <div className="flex justify-between font-label-md text-label-md">
                <span>Meds</span>
                <span className="font-bold">{medsTaken ? '2/3' : '1/3'}</span>
              </div>
            </div>
          </div>

          {/* Next Medication */}
          <div className="bg-surface-container-high rounded-xl p-stack-md flex flex-col justify-between">
            <div>
              <h4 className="font-label-lg text-label-lg text-on-surface-variant mb-4">Upcoming Meds</h4>
              <div className="flex items-start gap-3">
                <div className="bg-secondary-container p-3 rounded-lg text-on-secondary-container">
                  <span className="material-symbols-outlined">medication</span>
                </div>
                <div>
                  <p className="font-body-md text-body-md font-bold">Aspirin (85mg)</p>
                  <p className="font-label-md text-label-md text-on-surface-variant">Next dose: 12:00 PM</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => setMedsTaken(true)}
              disabled={medsTaken}
              className={`w-full h-touch-target-min mt-4 rounded-full font-label-lg flex items-center justify-center gap-2 transition-all ${
                medsTaken 
                  ? 'bg-tertiary-container text-white cursor-not-allowed' 
                  : 'bg-secondary text-on-secondary active:scale-95 hover:opacity-90'
              }`}
            >
              <span className="material-symbols-outlined text-sm">
                {medsTaken ? 'done' : 'check_circle'}
              </span>
              {medsTaken ? 'Logged!' : 'Mark as Taken'}
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <section className="space-y-stack-sm">
          <h4 className="font-label-lg text-label-lg text-on-surface-variant">Quick Actions</h4>
          <div className="grid grid-cols-2 gap-4">
            <button className="h-16 bg-surface-container border border-outline-variant rounded-xl flex items-center justify-center gap-2 hover:bg-surface-variant active:scale-95 transition-all">
              <span className="material-symbols-outlined text-primary">edit_note</span>
              <span className="font-label-lg text-on-surface">Log Journal</span>
            </button>
            <button onClick={() => setIsChatOpen(true)} className="h-16 bg-surface-container border border-outline-variant rounded-xl flex items-center justify-center gap-2 hover:bg-surface-variant active:scale-95 transition-all">
              <span className="material-symbols-outlined text-primary">smart_toy</span>
              <span className="font-label-lg text-on-surface">Ask Assistant</span>
            </button>
          </div>
        </section>

        {/* Visual Anchor / AI Assistant Card */}
        <section className="bg-surface-container-highest rounded-2xl p-6 flex items-center gap-6 overflow-hidden relative border border-outline-variant">
          <div className="flex-1 z-10">
            <h4 className="font-headline-md text-headline-md text-primary mb-1">Morning Insight</h4>
            <p className="font-body-md text-body-md text-on-surface-variant italic">"Your grip strength exercise showed 5% improvement yesterday. Keep up the great work, David!"</p>
          </div>
          <div className="w-24 h-24 flex-shrink-0 bg-white/50 backdrop-blur rounded-full flex items-center justify-center z-10 border border-white/20">
            <span className="material-symbols-outlined text-5xl text-primary">neurology</span>
          </div>
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
        </section>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 w-full z-40 flex justify-around items-center px-gutter py-unit bg-surface shadow-[0_-2px_4px_rgba(0,0,0,0.04)]">
        <a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-xl px-4 py-1 active:scale-95 transition-all duration-150" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
          <span className="font-label-md text-label-md">Dashboard</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-container-high active:scale-95 transition-all duration-150 rounded-xl" href="#">
          <span className="material-symbols-outlined">fitness_center</span>
          <span className="font-label-md text-label-md">Exercises</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-container-high active:scale-95 transition-all duration-150 rounded-xl" href="#">
          <span className="material-symbols-outlined">medication</span>
          <span className="font-label-md text-label-md">Meds</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-container-high active:scale-95 transition-all duration-150 rounded-xl cursor-pointer" onClick={() => setIsChatOpen(true)}>
          <span className="material-symbols-outlined">smart_toy</span>
          <span className="font-label-md text-label-md">Chat</span>
        </a>
      </nav>

      {/* Contextual FAB */}
      <div className="fixed bottom-24 right-6 z-40">
        <button className="w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
        </button>
      </div>

      {/* AI Chat Modal Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex justify-end items-end p-4 md:p-8 transition-opacity duration-300 ${isChatOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsChatOpen(false)}
      >
        <div 
          className="bg-surface-container-lowest w-full md:w-96 rounded-2xl shadow-2xl flex flex-col h-[600px] max-h-[90vh] overflow-hidden" 
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-primary text-on-primary p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl">neurology</span>
              <div>
                <h3 className="font-bold text-label-lg">Stroke Companion AI</h3>
                <p className="text-[11px] opacity-80">Always here to help</p>
              </div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-on-primary/80 hover:text-white p-2">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-surface space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                {msg.role === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-sm">smart_toy</span>
                  </div>
                )}
                <div className={`p-3 rounded-2xl text-body-md ${
                  msg.role === 'user' 
                    ? 'bg-primary text-on-primary rounded-tr-none' 
                    : 'bg-surface-container text-on-surface rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-surface-container-lowest border-t border-outline-variant/30">
            <div className="relative flex items-center">
              <input 
                type="text" 
                placeholder="Type a message..." 
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                className="w-full pl-4 pr-12 py-3 rounded-full border border-outline-variant focus:outline-none focus:border-primary bg-surface-container text-body-md" 
              />
              <button 
                onClick={handleSend}
                className="absolute right-2 text-primary p-2 hover:bg-surface-variant rounded-full transition-colors"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
