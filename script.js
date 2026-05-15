/**
 * DADOS DOS PRODUTOS
 * Fácil de manter e editar. Adicione ou remova objetos deste array.
 */
const products = [
    {
        id: 1, category: 'apple', badge: 'hot', badgeLabel: 'HOT',
        brand: 'Apple', name: 'iPhone 15 Pro Max 256GB',
        storage: '256GB', color: 'Titânio Natural', condition: 'Novo',
        price: 7899, oldPrice: 8999,
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708',
        desc: 'Chip A17 Pro, câmera de 48MP, tela Super Retina XDR de 6.7". O melhor iPhone já feito.',
        specs: [['Armazenamento', '256GB'], ['Cor', 'Titânio Natural'], ['Estado', 'Novo lacrado'], ['Garantia', '1 ano Apple']]
    },
    {
        id: 2, category: 'apple', badge: 'oferta', badgeLabel: 'OFERTA',
        brand: 'Apple', name: 'iPhone 14 Pro 128GB',
        storage: '128GB', color: 'Preto Espacial', condition: 'Seminovo',
        price: 4199, oldPrice: 5500,
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841896',
        desc: 'Dynamic Island, câmera 48MP ProRAW, chip A16 Bionic. Seminovo em perfeito estado.',
        specs: [['Armazenamento', '128GB'], ['Cor', 'Preto Espacial'], ['Estado', 'Seminovo (Ótimo)'], ['Garantia', '6 meses loja']]
    },
    {
        id: 3, category: 'apple', badge: 'novo', badgeLabel: 'NOVO',
        brand: 'Apple', name: 'iPhone 15 128GB',
        storage: '128GB', color: 'Rosa', condition: 'Novo',
        price: 5199, oldPrice: null,
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923781972',
        desc: 'USB-C, chip A16 Bionic, câmera de 48MP. Novo lacrado com nota fiscal.',
        specs: [['Armazenamento', '128GB'], ['Cor', 'Rosa'], ['Estado', 'Novo lacrado'], ['Garantia', '1 ano Apple']]
    },
    {
        id: 4, category: 'apple', badge: 'usado', badgeLabel: 'USADO',
        brand: 'Apple', name: 'iPhone 13 Pro 256GB',
        storage: '256GB', color: 'Sierra Blue', condition: 'Usado',
        price: 3299, oldPrice: 4200,
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-finish-select-202109-6-1inch-sierrablue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1631652954000',
        desc: 'Tela ProMotion 120Hz, câmera Pro com teleobjetiva 3x. Ótimo custo-benefício.',
        specs: [['Armazenamento', '256GB'], ['Cor', 'Sierra Blue'], ['Estado', 'Usado (Bom)'], ['Garantia', '3 meses loja']]
    },
    {
        id: 5, category: 'apple', badge: 'hot', badgeLabel: 'HOT',
        brand: 'Apple', name: 'iPhone 12 64GB',
        storage: '64GB', color: 'Branco', condition: 'Seminovo',
        price: 2199, oldPrice: 2800,
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-white-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604021661000',
        desc: 'Design plano icônico, 5G, chip A14 Bionic. Perfeito pra quem quer iPhone sem gastar muito.',
        specs: [['Armazenamento', '64GB'], ['Cor', 'Branco'], ['Estado', 'Seminovo (Ótimo)'], ['Garantia', '6 meses loja']]
    },
    {
        id: 6, category: 'android', badge: 'novo', badgeLabel: 'NOVO',
        brand: 'Samsung', name: 'Galaxy S24 Ultra 256GB',
        storage: '256GB', color: 'Preto Titanium', condition: 'Novo',
        price: 6299, oldPrice: 7499,
        img: 'https://images.samsung.com/is/image/samsung/p6pim/br/2401/gallery/br-galaxy-s24-ultra-s928-sm-s928bzkpzto-thumb-539571068',
        desc: 'S Pen integrada, câmera 200MP, tela 6.8" QHD+. O melhor Android do momento.',
        specs: [['Armazenamento', '256GB'], ['Cor', 'Preto Titanium'], ['Estado', 'Novo lacrado'], ['Garantia', '1 ano Samsung']]
    },
    {
        id: 7, category: 'android', badge: 'oferta', badgeLabel: 'OFERTA',
        brand: 'Samsung', name: 'Galaxy A54 128GB',
        storage: '128GB', color: 'Violeta', condition: 'Novo',
        price: 1799, oldPrice: 2199,
        img: 'https://images.samsung.com/is/image/samsung/p6pim/br/sm-a546elviuf0/gallery/br-galaxy-a54-5g-sm-a546-sm-a546elviuf0-535118339',
        desc: 'Câmera tripla 50MP, tela Super AMOLED, bateria de 5000mAh. Intermediário premium.',
        specs: [['Armazenamento', '128GB'], ['Cor', 'Violeta'], ['Estado', 'Novo'], ['Garantia', '1 ano Samsung']]
    },
    {
        id: 8, category: 'acessorios', badge: 'novo', badgeLabel: 'NOVO',
        brand: 'Apple', name: 'AirPods Pro (2ª Geração)',
        storage: '—', color: 'Branco', condition: 'Novo',
        price: 1699, oldPrice: 2199,
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000',
        desc: 'Cancelamento ativo de ruído, áudio adaptativo, resistência IPX4. O melhor fone da Apple.',
        specs: [['Tipo', 'In-ear'], ['ANC', 'Sim'], ['Resistência', 'IPX4'], ['Garantia', '1 ano Apple']]
    },
    {
        id: 9, category: 'acessorios', badge: 'hot', badgeLabel: 'HOT',
        brand: 'Apple', name: 'Apple Watch Series 9 GPS 41mm',
        storage: '—', color: 'Meia-noite', condition: 'Novo',
        price: 2899, oldPrice: 3499,
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-45-alum-midnight-nc-9s_VW_34FR_WF_CO?wid=1400&hei=1400&fmt=png-alpha&.v=1694507829609',
        desc: 'Chip S9, Double Tap, monitoramento avançado de saúde, tela Always-On.',
        specs: [['Tamanho', '41mm'], ['GPS', 'Sim'], ['Saúde', 'ECG, SpO2'], ['Garantia', '1 ano Apple']]
    },
    {
        id: 10, category: 'acessorios', badge: 'oferta', badgeLabel: 'OFERTA',
        brand: 'Apple', name: 'Capa MagSafe iPhone 15 Pro',
        storage: '—', color: 'Azul Alpino', condition: 'Novo',
        price: 299, oldPrice: 399,
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4A3?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1693516590024',
        desc: 'Capa oficial Apple com tecnologia MagSafe. Proteção com estilo para o iPhone 15 Pro.',
        specs: [['Compatível', 'iPhone 15 Pro'], ['Material', 'Silicone'], ['MagSafe', 'Sim'], ['Garantia', 'Apple']]
    },
    {
        id: 11, category: 'gamer', badge: 'novo', badgeLabel: 'NOVO',
        brand: 'Razer', name: 'Kishi V2 Controle Mobile',
        storage: '—', color: 'Preto', condition: 'Novo',
        price: 649, oldPrice: 799,
        img: 'https://assets2.razerzone.com/images/pnx.assets/4f29dea91def1ae64ad27f6b0e80e65e/razer-kishi-v2-mobile-controller-500x500.jpg',
        desc: 'Controle gamer para iPhone e Android, low latency, botões microswitches mecânicos.',
        specs: [['Compatível', 'iPhone/Android'], ['Conexão', 'USB-C / Lightning'], ['Latência', 'Baixíssima'], ['Garantia', '1 ano Razer']]
    },
    {
        id: 12, category: 'diversos', badge: 'oferta', badgeLabel: 'OFERTA',
        brand: 'Anker', name: 'Carregador 65W GaN Pro',
        storage: '—', color: 'Preto', condition: 'Novo',
        price: 189, oldPrice: 249,
        img: 'https://m.media-amazon.com/images/I/61-1BbcPHKL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        desc: 'Carregador ultracompacto GaN de 65W com 3 portas. Carrega notebook, iPhone e AirPods ao mesmo tempo.',
        specs: [['Potência', '65W'], ['Portas', '2x USB-C + 1x USB-A'], ['Tecnologia', 'GaN'], ['Garantia', '18 meses']]
    }
];

// ── ESTADOS DA APLICAÇÃO ──
let activeFilter = 'todos';
let searchTerm = '';
let favorites = new Set();

// ── FUNÇÕES UTILITÁRIAS ──
const getBadgeClass = (badge) => {
    const classes = { hot: 'badge-hot', oferta: 'badge-oferta', novo: 'badge-novo', usado: 'badge-usado' };
    return classes[badge] || 'badge-novo';
};

const formatPrice = (p) => `R$ ${p.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;

// Placeholder caso a imagem do produto falhe
const fallbackImg = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='130' viewBox='0 0 100 130'><rect width='100' height='130' fill='%231a1a2e'/><text x='50' y='65' text-anchor='middle' fill='%236b6b8a' font-size='30'>📱</text></svg>";

// ── RENDERIZAÇÃO ──
function renderCards(list) {
    const grid = document.getElementById('product-grid');
    const countLabel = document.getElementById('count-label');
    
    countLabel.textContent = `${list.length} produto${list.length !== 1 ? 's' : ''}`;

    if (list.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; color: #7a748e;"><span style="font-size: 3rem; display: block; margin-bottom: 1rem;">🔍</span>Nenhum produto encontrado</div>';
        return;
    }

    grid.innerHTML = list.map((p, i) => `
        <article class="product-card" style="animation-delay: ${i * 0.05}s" onclick="openModal(${p.id})">
            <div class="card-img-wrap">
                <span class="badge ${getBadgeClass(p.badge)}">${p.badgeLabel}</span>
                <img class="card-img" src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='${fallbackImg}'">
                <button class="fav-btn ${favorites.has(p.id) ? 'active' : ''}" onclick="toggleFav(event, ${p.id})" aria-label="Favoritar">
                    ${favorites.has(p.id) ? '❤️' : '🤍'}
                </button>
            </div>
            <div class="card-body">
                <span class="card-brand">${p.brand}</span>
                <h3 class="card-name">${p.name}</h3>
                <div class="card-meta">
                    ${p.storage !== '—' ? `${p.storage} · ` : ''}${p.condition}
                </div>
                <div class="card-footer">
                    <div class="price-wrap">
                        ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ''}
                        <span class="price">${formatPrice(p.price)}</span>
                    </div>
                    <button class="cta-btn" onclick="event.stopPropagation(); openWA(${p.id})">Ver mais</button>
                </div>
            </div>
        </article>
    `).join('');
}

function updateView() {
    const filtered = products.filter(p => {
        const matchCat = activeFilter === 'todos' || p.category === activeFilter;
        const matchSearch = !searchTerm || 
                            p.name.toLowerCase().includes(searchTerm) || 
                            p.brand.toLowerCase().includes(searchTerm);
        return matchCat && matchSearch;
    });
    renderCards(filtered);
}

// ── EVENTOS (FILTROS E BUSCA) ──
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        activeFilter = e.target.dataset.filter;
        updateView();
    });
});

document.getElementById('search-input').addEventListener('input', (e) => {
    searchTerm = e.target.value.toLowerCase().trim();
    updateView();
});

// ── AÇÕES ──
function toggleFav(e, id) {
    e.stopPropagation();
    favorites.has(id) ? favorites.delete(id) : favorites.add(id);
    updateView(); // Atualiza para refletir o coração
}

function openWA(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    
    // Mensagem exata solicitada
    const msg = `gostei ${p.name} poderia me informar mais sobre ele?`;
    const url = `https://wa.me/5516988153981?text=${encodeURIComponent(msg)}`;
    
    window.open(url, '_blank');
}

// ── MODAL ──
function openModal(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;

    document.getElementById('modal-img').src = p.img;
    document.getElementById('modal-img').onerror = function() { this.src = fallbackImg; };
    
    const badgeEl = document.getElementById('modal-badge');
    badgeEl.textContent = p.badgeLabel;
    badgeEl.className = `badge modal-badge ${getBadgeClass(p.badge)}`;
    
    document.getElementById('modal-brand').textContent = p.brand;
    document.getElementById('modal-name').textContent = p.name;
    document.getElementById('modal-price').textContent = formatPrice(p.price);
    document.getElementById('modal-desc').textContent = p.desc;
    
    document.getElementById('modal-specs').innerHTML = p.specs.map(([k, v]) =>
        `<div class="spec-row"><span class="spec-key">${k}</span><span class="spec-val">${v}</span></div>`
    ).join('');
    
    document.getElementById('modal-wa-btn').onclick = () => openWA(id);
    
    document.getElementById('modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden'; // Evita scroll atrás do modal
}

function closeModal(e) {
    // Fecha se clicar no botão "X" ou fora do modal (no overlay escuro)
    if (e && e.target !== document.getElementById('modal-overlay') && !e.target.classList.contains('modal-close')) return;
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

// Fechar modal com a tecla ESC
document.addEventListener('keydown', (e) => { 
    if (e.key === 'Escape') closeModal(); 
});

// ── CUPOM ──
function copyCoupon() {
    const el = document.getElementById('coupon');
    navigator.clipboard.writeText('GUITECH20').then(() => {
        const originalText = el.textContent;
        el.textContent = '✓ Copiado!';
        el.classList.add('copied');
        
        setTimeout(() => { 
            el.textContent = originalText; 
            el.classList.remove('copied'); 
        }, 2000);
    });
}

// ── INICIALIZAÇÃO ──
updateView();