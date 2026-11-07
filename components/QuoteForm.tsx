"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/config";

const SERVICOS = [
  "Troca de tela",
  "Troca de bateria",
  "Troca de traseira",
  "Conector / não carrega",
  "Caiu na água",
  "Blindagem da tela",
  "Blindagem completa",
  "Outro problema",
];

const MODELOS = [
  "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max",
  "iPhone 12", "iPhone 12 Pro", "iPhone 12 Pro Max",
  "iPhone 13", "iPhone 13 Pro", "iPhone 13 Pro Max",
  "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max",
  "iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max",
  "iPhone 16", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max",
  "iPhone XR", "iPhone XS", "iPhone SE",
  "Samsung Galaxy ", "Motorola Moto ", "Xiaomi Redmi ",
];

export default function QuoteForm() {
  const [modelo, setModelo] = useState("");
  const [servico, setServico] = useState("");
  const [detalhe, setDetalhe] = useState("");
  const [erro, setErro] = useState("");

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (!modelo.trim() || !servico) {
      setErro("Informe o modelo e o serviço para receber o orçamento.");
      return;
    }
    setErro("");
    const linhas = [
      "*ORÇAMENTO PELO SITE*",
      `📱 Aparelho: ${modelo.trim()}`,
      `🔧 Serviço: ${servico}`,
    ];
    if (detalhe.trim()) linhas.push(`📝 Detalhes: ${detalhe.trim()}`);
    try {
      window.fbq?.("track", "Lead", { content_name: servico, content_category: modelo.trim() });
    } catch {}
    window.location.href = whatsappUrl(linhas.join("\n"));
  }

  const campo =
    "w-full rounded-xl border border-brand/40 bg-ink/70 px-4 py-3.5 text-base text-white placeholder:text-slate-500 outline-none transition focus:border-cyan focus:ring-2 focus:ring-cyan/30";

  return (
    <form onSubmit={enviar} noValidate className="card space-y-4 p-5 shadow-glow sm:p-7">
      <div>
        <label htmlFor="q-modelo" className="mb-1.5 block text-sm font-semibold text-slate-200">
          Qual é o seu celular?
        </label>
        <input
          id="q-modelo"
          list="q-modelos"
          value={modelo}
          onChange={(e) => { setModelo(e.target.value); setErro(""); }}
          placeholder="Ex.: iPhone 13, Galaxy A54…"
          autoComplete="off"
          className={campo}
        />
        <datalist id="q-modelos">
          {MODELOS.map((m) => (
            <option key={m} value={m} />
          ))}
        </datalist>
      </div>

      <fieldset>
        <legend className="mb-1.5 block text-sm font-semibold text-slate-200">O que precisa?</legend>
        <div className="grid grid-cols-2 gap-2">
          {SERVICOS.map((s) => (
            <label
              key={s}
              className={`cursor-pointer rounded-xl border px-3 py-2.5 text-center text-sm font-medium transition ${
                servico === s
                  ? "border-cyan bg-brand/50 font-bold text-white shadow-glow"
                  : "border-brand/30 bg-ink/50 text-slate-300 hover:border-brand/70"
              }`}
            >
              <input
                type="radio"
                name="servico"
                value={s}
                checked={servico === s}
                onChange={() => { setServico(s); setErro(""); }}
                className="sr-only"
              />
              {s}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="q-detalhe" className="mb-1.5 block text-sm font-semibold text-slate-200">
          Detalhes <span className="font-normal text-slate-500">(opcional)</span>
        </label>
        <textarea
          id="q-detalhe"
          rows={2}
          value={detalhe}
          onChange={(e) => setDetalhe(e.target.value)}
          placeholder="Ex.: caiu e a tela ficou preta, mas ainda vibra"
          className={`${campo} resize-none`}
        />
      </div>

      {erro && (
        <p role="alert" className="text-sm font-medium text-red-400">
          {erro}
        </p>
      )}

      <button type="submit" className="btn-zap w-full text-lg">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
          <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5.1 5.2-1.4A9.9 9.9 0 1 0 12.04 2Zm4.5 12c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
        </svg>
        Receber orçamento no WhatsApp
      </button>
      <p className="text-center text-xs text-slate-400">Resposta rápida · Sem compromisso</p>
    </form>
  );
}
