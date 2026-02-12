import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
<main>
  
  <!-- Header -->
  <header class="site-header">
    <div class="container header-container">
      <h1 class="logo">Escuta Ativa</h1>
      <a href="#conversar" class="btn btn-secondary header-btn">
        Começar a Conversa
      </a>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero-section">
    <div class="container text-center">
      <h2 class="hero-section__title">
        Alívio Imediato para uma Mente Sobrecarregada.
      </h2>
      <p class="hero-section__subtitle">
        Atendimento por minuto. <span class="highlight">R$ 2,00</span>. Conversa humana, sem julgamentos. Pague apenas pelo tempo que usar.
      </p>
      <a href="#conversar" class="btn btn-primary btn-lg shadow-lg">
        FALE AGORA MESMO
      </a>
    </div>
  </section>

  <!-- Trigger Phrases Section -->
  <section class="trigger-section">
    <div class="container text-center">
      <div class="grid grid-3-col">
        <div class="card">
          <h3 class="card__title">Ansiedade e Inundação Mental</h3>
          <p>"Sua mente a 200km/h, e o mundo te pedindo para parar. Respire. Vamos desacelerar juntos."</p>
        </div>
        <div class="card">
          <h3 class="card__title">Medo e Sensação de Estar Preso</h3>
          <p>"Sentindo que está encurralado pela própria vida? A primeira saída é falar."</p>
        </div>
        <div class="card">
          <h3 class="card__title">Rejeição e Solidão</h3>
          <p>"Cansado de ser julgado quando só precisa ser ouvido? Aqui, você tem um porto seguro."</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Como Funciona Section -->
  <section class="how-it-works-section">
    <div class="container">
      <h2 class="section-title">Simples, Rápido e Confidencial</h2>
      <div class="steps-container">
        <!-- Step 1 -->
        <div class="step">
          <div class="step__icon-wrapper">
            <svg class="step__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
          </div>
          <h3 class="step__title">Passo 1</h3>
          <p>Clique para iniciar a conversa.</p>
        </div>
        <!-- Step 2 -->
        <div class="step">
          <div class="step__icon-wrapper">
            <svg class="step__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
          </div>
          <h3 class="step__title">Passo 2</h3>
          <p>Escolha Chat ou Voz.</p>
        </div>
        <!-- Step 3 -->
        <div class="step">
          <div class="step__icon-wrapper">
            <svg class="step__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h3 class="step__title">Passo 3</h3>
          <p>Conecte-se e seja ouvido.</p>
        </div>
        <!-- Step 4 -->
        <div class="step">
          <div class="step__icon-wrapper">
            <svg class="step__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
          </div>
          <h3 class="step__title">Passo 4</h3>
          <p>Pague via PIX só pelos minutos que usar.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Para Quem É Section -->
  <section class="who-its-for-section">
    <div class="container">
      <div class="who-its-for-content">
        <h2 class="section-title">Este porto seguro é para quem...</h2>
        <ul class="checklist">
          <li>
            <svg class="checklist__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span>...tem uma mente que <span class="font-semibold">não desliga</span>.</span>
          </li>
          <li>
            <svg class="checklist__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span>...se sente <span class="font-semibold">sozinho</span> no meio da multidão.</span>
          </li>
          <li>
            <svg class="checklist__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span>...precisa colocar para fora o que está machucando, mas <span class="font-semibold">não tem com quem</span>.</span>
          </li>
          <li>
            <svg class="checklist__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span>...busca um ouvido amigo, mas com a <span class="font-semibold">praticidade</span> de um serviço.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section id="conversar" class="cta-section">
    <div class="container text-center">
      <h2 class="cta-section__title">Sua Mente Não Pode Esperar.</h2>
      <p class="cta-section__subtitle">
        Apenas para quem sabe que a conversa é o melhor remédio. Você está pronto para desabafar?
      </p>
      <div class="cta-buttons">
        <button (click)="startConversation('voz')" type="button" class="btn btn-primary btn-lg btn-icon shadow-lg">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          <span>INICIAR CONVERSA POR VOZ</span>
          <span class="btn-price">(R$2,00/min)</span>
        </button>
        <button (click)="startConversation('texto')" type="button" class="btn btn-dark btn-lg btn-icon shadow-lg">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
          <span>INICIAR CHAT POR TEXTO</span>
          <span class="btn-price">(R$2,00/min)</span>
        </button>
      </div>
      <div class="pix-info">
        <p>O pagamento é feito ao final da conversa via PIX.</p>
        <div class="pix-key-container">
          <span>Chave PIX (e-mail): <span class="pix-key">eloisarocha116@gmail.com</span></span>
           <button (click)="copyPixKey('eloisarocha116@gmail.com')" class="btn-copy">
              @if (pixCopied()) {
                <span>Copiado!</span>
              } @else {
                <span>Copiar</span>
              }
            </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer-bottom">
    <div class="container">
      <div class="important-notice">
        <p class="notice-title">AVISO IMPORTANTE</p>
        <p>Este serviço <span class="font-bold">NÃO substitui</span> acompanhamento psicológico ou psiquiátrico profissional. Trata-se de um serviço de escuta ativa e suporte emocional. Em caso de crise ou emergência, por favor, entre em contato com um profissional de saúde ou ligue para o CVV (Centro de Valorização da Vida) no número <span class="font-bold">188</span>. A ligação é gratuita.</p>
      </div>
       <p class="copyright">&copy; 2024 Escuta Ativa. Todos os direitos reservados.</p>
    </div>
  </footer>

</main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  pixCopied = signal(false);

  startConversation(type: 'voz' | 'texto'): void {
    alert(`Iniciando conexão para conversa por ${type}. Por favor, aguarde.`);
  }

  copyPixKey(key: string): void {
    if (!navigator.clipboard) {
      alert('A cópia para a área de transferência não é suportada neste navegador.');
      return;
    }
    navigator.clipboard.writeText(key).then(() => {
      this.pixCopied.set(true);
      setTimeout(() => this.pixCopied.set(false), 2000);
    }).catch(err => {
      console.error('Erro ao copiar a chave PIX: ', err);
      alert('Não foi possível copiar a chave PIX.');
    });
  }
}