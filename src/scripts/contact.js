export const CONTACT = {
  whatsapp: '5511999999999',
  email: 'contato@wcpintura.com.br',
  instagram: '',
};

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
    } catch {}
  }
}
