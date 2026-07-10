/**
 * Dados de contato — SUBSTITUA pelos dados reais da empresa antes de publicar.
 * Editar aqui atualiza automaticamente todos os links de WhatsApp, e-mail
 * e Instagram do site (botões, rodapé e dados estruturados de SEO).
 */
export const CONTACT = {
  whatsapp: '5511999999999', // SUBSTITUA: DDI+DDD+número, ex: 5511987654321
  email: 'contato@wcpintura.com.br', // SUBSTITUA
  instagram: '', // SUBSTITUA: ex: 'https://instagram.com/wcpintura'
};

/**
 * Preenche todos os links `.js-whatsapp` / `.js-email` / `.js-instagram` a
 * partir de CONTACT, e sincroniza o JSON-LD (#business-schema) usado pelo
 * Google para exibir telefone/e-mail nos resultados de busca.
 */
export function wireContactLinks() {
  const { whatsapp, email, instagram } = CONTACT;

  document.querySelectorAll('.js-whatsapp').forEach((el) => {
    const msg = el.dataset.msg;
    el.href = `https://wa.me/${whatsapp}` + (msg ? `?text=${encodeURIComponent(msg)}` : '');
  });

  document.querySelectorAll('.js-email').forEach((el) => {
    el.href = `mailto:${email}`;
    if (el.dataset.showText) el.textContent = email;
  });

  document.querySelectorAll('.js-instagram').forEach((el) => {
    if (instagram) {
      el.href = instagram;
      el.target = '_blank';
      el.rel = 'noopener';
    } else {
      el.removeAttribute('href');
      el.setAttribute('aria-disabled', 'true');
    }
  });

  const schema = document.getElementById('business-schema');
  if (schema) {
    try {
      const data = JSON.parse(schema.textContent);
      data.telephone = `+${whatsapp}`;
      data.email = email;
      if (instagram) data.sameAs = [instagram];
      schema.textContent = JSON.stringify(data);
    } catch {
      // schema markup left untouched if parsing fails
    }
  }
}
