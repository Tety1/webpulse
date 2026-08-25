const whatsapp =
  "https://wa.me/5493416018944?text=Hola%20PulseDesk%2C%20quiero%20conocer%20PulseDesk%20DIST%20y%20coordinar%20una%20demo.";

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 4 4L19 6" />
  </svg>
);

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="PulseDesk DIST, inicio">
      <span className="brand-mark" aria-hidden="true"><i /><i /></span>
      <span>PULSEDESK <b>DIST</b></span>
    </a>
  );
}

function DemoDashboard() {
  return (
    <div className="product-stage" aria-label="Vista demostrativa de PulseDesk DIST">
      <span className="stage-word" aria-hidden="true">CONTROL</span>
      <div className="dashboard-window">
        <div className="window-bar">
          <div className="window-brand"><span className="mini-mark" /> PULSEDESK <b>DIST</b></div>
          <div className="window-search">Buscar en el sistema <kbd>⌘ K</kbd></div>
          <div className="window-user">EC</div>
        </div>
        <div className="app-layout">
          <aside className="app-sidebar" aria-hidden="true">
            <span className="side-active"><i>⌂</i> Inicio</span>
            <span><i>↗</i> Ventas</span>
            <span><i>□</i> Productos</span>
            <span><i>◫</i> Stock</span>
            <span><i>◎</i> Caja</span>
            <span><i>♙</i> Clientes</span>
            <span><i>≡</i> Reportes</span>
          </aside>
          <div className="app-content">
            <div className="app-heading">
              <div><small>RESUMEN GENERAL</small><strong>Así está tu negocio hoy</strong></div>
              <span>Hoy, 25 ago.</span>
            </div>
            <div className="metric-grid">
              <article><small>VENTAS DE HOY</small><strong>$ 1.248.650</strong><em>↗ 16,8%</em></article>
              <article><small>TICKET PROMEDIO</small><strong>$ 26.420</strong><em>↗ 7,3%</em></article>
              <article><small>CLIENTES ACTIVOS</small><strong>512</strong><em>+18 este mes</em></article>
              <article><small>STOCK CRÍTICO</small><strong>15</strong><em className="warning">Ver productos</em></article>
            </div>
            <div className="dashboard-row">
              <article className="chart-card">
                <div><small>VENTAS POR PERÍODO</small><b>Últimos 7 días</b></div>
                <div className="line-chart" aria-hidden="true">
                  <svg viewBox="0 0 430 155" preserveAspectRatio="none">
                    <defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#9f6cff" stopOpacity=".42"/><stop offset="1" stopColor="#9f6cff" stopOpacity="0"/></linearGradient></defs>
                    <path className="area" d="M0 130 42 102 86 112 130 54 173 88 216 62 260 71 303 30 347 58 389 22 430 42V155H0Z" />
                    <path className="line" d="M0 130 42 102 86 112 130 54 173 88 216 62 260 71 303 30 347 58 389 22 430 42" />
                  </svg>
                </div>
                <div className="chart-days"><span>LUN</span><span>MAR</span><span>MIÉ</span><span>JUE</span><span>VIE</span><span>SÁB</span><span>DOM</span></div>
              </article>
              <article className="activity-card">
                <div><small>ÚLTIMOS MOVIMIENTOS</small><b>En tiempo real</b></div>
                <ul>
                  <li><i className="sale-dot" /><span><b>Venta #00128</b><small>Consumidor final</small></span><strong>$ 38.530</strong></li>
                  <li><i className="cash-dot" /><span><b>Ingreso de caja</b><small>Transferencia</small></span><strong>$ 75.000</strong></li>
                  <li><i className="stock-dot" /><span><b>Ajuste de stock</b><small>Depósito central</small></span><strong>+24 u.</strong></li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className="phone-mockup" aria-hidden="true">
        <div className="phone-speaker" />
        <div className="phone-head"><span className="mini-mark" /> <b>PULSEDESK</b><i>•••</i></div>
        <small className="phone-kicker">PANEL DE CONTROL</small>
        <strong className="phone-title">Tu negocio hoy</strong>
        <div className="phone-metrics"><article><small>VENTAS</small><strong>$1.248.650</strong></article><article><small>STOCK CRÍTICO</small><strong>15</strong></article></div>
        <div className="phone-chart"><span>Ventas de la semana</span><div>{[46,67,54,83,72,94,78].map((height, i) => <i key={i} style={{height: `${height}%`}} />)}</div></div>
        <button type="button" tabIndex={-1}>+ NUEVA VENTA</button>
      </div>
      <div className="demo-label"><span /> VISTA DEMOSTRATIVA</div>
    </div>
  );
}

const modules = [
  {
    code: "POS",
    title: "Ventas",
    description: "Registrá cada operación con cliente opcional y cobros simples, mixtos o a cuenta corriente.",
    tags: ["Efectivo", "Transferencia", "Mixto", "Cta. cte."],
    accent: "violet",
  },
  {
    code: "STK",
    title: "Productos y stock",
    description: "Controlá costos, precios, existencias, mínimos y ajustes sin depender de una planilla paralela.",
    tags: ["Costos", "Precios", "Mínimos", "Ajustes"],
    accent: "lime",
  },
  {
    code: "CAJ",
    title: "Caja",
    description: "Aperturas, retiros, movimientos a caja fuerte y cierres con el detalle que necesitás.",
    tags: ["Apertura", "Retiros", "Caja fuerte", "Cierre"],
    accent: "white",
  },
  {
    code: "CC",
    title: "Clientes y cuenta corriente",
    description: "Saldos claros, pagos parciales o completos, comprobantes seleccionados y recibos.",
    tags: ["Saldos", "Pagos", "Recibos", "Historial"],
    accent: "violet",
  },
  {
    code: "RUT",
    title: "Pedidos y hoja de ruta",
    description: "Organizá los pedidos por fecha y prepará el recorrido de entrega con información centralizada.",
    tags: ["Pedidos", "Fechas", "Preparación", "Entrega"],
    accent: "lime",
  },
  {
    code: "RPT",
    title: "Reportes",
    description: "Analizá ventas, márgenes, inventario y productos destacados por día, semana, mes o período.",
    tags: ["Estadísticas", "Márgenes", "Top / Low", "Períodos"],
    accent: "white",
  },
  {
    code: "ALR",
    title: "Alertas inteligentes",
    description: "Detectá productos con stock bajo o agotado antes de que el faltante afecte una venta o un pedido.",
    tags: ["Stock bajo", "Sin stock", "Mínimos", "Seguimiento"],
    accent: "lime",
  },
  {
    code: "PRN",
    title: "Impresión flexible",
    description: "Adaptá comprobantes y tickets al formato que usa cada empresa, caja o punto de venta.",
    tags: ["A4", "A5", "80 mm", "56 mm"],
    accent: "violet",
  },
];

const faqs = [
  ["¿Funciona desde PC y celular?", "Sí. PulseDesk DIST es una plataforma web adaptable. Podés entrar con tu usuario desde una computadora, tablet o celular."],
  ["¿Sirve para un kiosco o minimarket?", "Sí. Está pensado para negocios con venta de salón y también para distribuidoras que trabajan con clientes, pedidos, reparto y cuenta corriente."],
  ["¿Puedo cobrar con distintos medios de pago?", "Sí. Podés registrar efectivo, transferencia, pagos mixtos y ventas a cuenta corriente."],
  ["¿Maneja pagos parciales de clientes?", "Sí. La cuenta corriente permite registrar pagos parciales o completos y aplicarlos a los comprobantes correspondientes."],
  ["¿Cómo funciona el módulo de pedidos?", "Permite registrar pedidos, consultar el detalle, organizarlos por fecha y seguir su avance desde pendiente hasta preparado o entregado."],
  ["¿Qué información muestran los reportes?", "Podés analizar ventas, medios de pago, márgenes, inventario y rendimiento de productos por día, semana, mes o rango personalizado."],
  ["¿Me avisa cuando queda poco stock?", "Sí. El sistema identifica productos por debajo del mínimo configurado y también los que se encuentran sin stock."],
  ["¿Qué formatos de impresión admite?", "La impresión puede configurarse por empresa para hojas A4 o A5 y tickets térmicos de 56 u 80 mm."],
];

export default function App() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", name: "PulseDesk", url: "https://www.pulsedesk.com.ar/", telephone: "+5493416018944", areaServed: "Argentina" },
      { "@type": "SoftwareApplication", name: "PulseDesk DIST", applicationCategory: "BusinessApplication", operatingSystem: "Web", description: "Sistema de gestión para comercios y distribuidoras.", offers: { "@type": "Offer", priceCurrency: "ARS", price: "50000", description: "Precio mensual desde" } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#producto">El sistema</a><a href="#funciones">Funciones</a><a href="#para-quien">Para quién</a><a href="#precio">Precio</a>
          </nav>
          <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">Solicitar demo <Arrow /></a>
          <details className="mobile-nav">
            <summary aria-label="Abrir menú"><span /><span /></summary>
            <nav>
              <a href="#producto">El sistema</a><a href="#funciones">Funciones</a><a href="#para-quien">Para quién</a><a href="#precio">Precio</a>
              <a href={whatsapp} target="_blank" rel="noreferrer">Solicitar demo</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="inicio">
        <section className="hero" id="producto">
          <div className="hero-grid" aria-hidden="true" /><div className="hero-orb orb-violet" aria-hidden="true" /><div className="hero-orb orb-lime" aria-hidden="true" />
          <div className="container hero-copy">
            <p className="eyebrow"><i /> SISTEMA DE GESTIÓN PARA COMERCIOS Y DISTRIBUIDORAS</p>
            <h1>Tu negocio.<br /><span>Bajo control.</span></h1>
            <p className="hero-lead">Ventas, stock, caja, clientes, cuenta corriente, pedidos y reportes. Todo conectado y disponible desde PC o celular.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Quiero una demo <Arrow /></a>
              <a className="button button-secondary" href="#funciones">Ver todo lo que incluye</a>
            </div>
            <div className="hero-price"><span>DESDE</span><strong>$50.000</strong><span>POR MES</span></div>
          </div>
          <div className="container hero-product"><DemoDashboard /></div>
        </section>

        <section className="audience-strip" id="para-quien" aria-label="Comercios para los que está diseñado">
          <div className="audience-rail">
            <span className="audience-kicker"><i /> HECHO PARA</span>
            <div className="audience-motion">
              <div className="audience-track">
                <div className="audience-set"><b>KIOSCOS</b><i /><b>MINIMARKETS</b><i /><b>24 HS</b><i /><b>DISTRIBUIDORAS</b><i /><b>VENTA DE SALÓN</b><i /></div>
                <div className="audience-set" aria-hidden="true"><b>KIOSCOS</b><i /><b>MINIMARKETS</b><i /><b>24 HS</b><i /><b>DISTRIBUIDORAS</b><i /><b>VENTA DE SALÓN</b><i /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="problem-section" id="problema">
          <div className="container problem-grid">
            <div className="section-intro">
              <p className="section-number">01 / UNA SOLA OPERACIÓN</p>
              <h2>Dejá atrás Excel,<br />los cuadernos y<br /><span>la información suelta.</span></h2>
            </div>
            <div className="problem-copy">
              <p>PulseDesk DIST ordena la operación completa de tu negocio. Cada venta impacta donde corresponde para que sepas qué pasó, cuánto tenés y qué decisión tomar.</p>
              <ul className="check-list">
                <li><Check /><span>Información centralizada y siempre disponible.</span></li>
                <li><Check /><span>Menos carga duplicada y menos errores manuales.</span></li>
                <li><Check /><span>Control real desde el salón, el depósito o tu casa.</span></li>
              </ul>
            </div>
          </div>
          <div className="container flow-line" aria-label="Flujo conectado del sistema">
            <article><span>01</span><small>VENDÉS</small><strong>Registrás la operación</strong></article><i><Arrow /></i>
            <article><span>02</span><small>SE ACTUALIZA</small><strong>Stock, caja y cuenta</strong></article><i><Arrow /></i>
            <article><span>03</span><small>LO VES</small><strong>Reportes al instante</strong></article>
          </div>
        </section>

        <section className="modules-section" id="funciones">
          <div className="container modules-heading">
            <div>
              <p className="section-number">02 / TODO EN UN SOLO LUGAR</p>
              <h2>Un sistema.<br /><span>Toda tu operación.</span></h2>
            </div>
            <p>No son herramientas aisladas. Son módulos que comparten la misma información para darte una visión completa del negocio.</p>
          </div>
          <div className="container modules-grid">
            {modules.map((module, index) => (
              <article className={`module-card module-${module.accent}`} data-code={module.code} key={module.code}>
                <div className="module-top"><span>{module.code}</span><i>{String(index + 1).padStart(2, "0")}</i></div>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
                <div className="tag-row">{module.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="inside-section">
          <div className="container inside-heading">
            <p className="section-number">03 / ADENTRO DE PULSEDESK DIST</p>
            <h2>Menos vueltas.<br /><span>Más control real.</span></h2>
          </div>

          <div className="container feature-block feature-sales">
            <div className="feature-copy">
              <span className="feature-index">01 — VENTAS</span>
              <h3>Vendé y cobrá sin frenar el mostrador.</h3>
              <p>Encontrá productos, asigná un cliente cuando corresponda y registrá el medio de pago. Si la venta es a cuenta corriente, el saldo queda asociado automáticamente.</p>
              <ul>
                <li><Check /> Consumidor final por defecto</li>
                <li><Check /> Cliente opcional</li>
                <li><Check /> Pagos simples y mixtos</li>
                <li><Check /> Cuenta corriente integrada</li>
              </ul>
            </div>
            <div className="feature-ui pos-ui" aria-label="Ejemplo visual del módulo de ventas">
              <div className="ui-toolbar"><div><span className="mini-mark" /><b>NUEVA VENTA</b></div><span>Venta #00129</span></div>
              <div className="pos-search">⌕&nbsp;&nbsp; Buscar por nombre o código de barras <kbd>F2</kbd></div>
              <div className="pos-body">
                <div className="pos-products">
                  <div className="pos-head"><span>PRODUCTO</span><span>CANT.</span><span>PRECIO</span><span>SUBTOTAL</span></div>
                  <div className="pos-item"><i>01</i><span><b>Gaseosa cola 2,25 L</b><small>Cód. 779000101</small></span><em>2</em><strong>$3.850</strong><strong>$7.700</strong></div>
                  <div className="pos-item"><i>02</i><span><b>Agua mineral 2 L</b><small>Cód. 779000204</small></span><em>3</em><strong>$1.420</strong><strong>$4.260</strong></div>
                  <div className="pos-item"><i>03</i><span><b>Papel higiénico x4</b><small>Cód. 779000348</small></span><em>1</em><strong>$2.980</strong><strong>$2.980</strong></div>
                </div>
                <aside className="pos-summary">
                  <small>CLIENTE</small><div className="client-pill">CF <span>Consumidor final</span></div>
                  <small>MEDIO DE PAGO</small><div className="payment-pills"><span className="selected">Efectivo</span><span>Transferencia</span><span>Mixto</span><span>Cta. cte.</span></div>
                  <div className="sale-total"><span>TOTAL</span><strong>$14.940</strong></div>
                  <button type="button" tabIndex={-1}>FINALIZAR VENTA</button>
                </aside>
              </div>
            </div>
          </div>

          <div className="container feature-block feature-reverse">
            <div className="feature-copy">
              <span className="feature-index">02 — STOCK Y PRODUCTOS</span>
              <h3>Sabé qué tenés, cuánto cuesta y qué falta.</h3>
              <p>Precios, costos y existencias en una misma vista. Definí mínimos y detectá productos críticos antes de quedarte sin mercadería.</p>
              <ul>
                <li><Check /> Costos y precios editables</li>
                <li><Check /> Ajustes de stock con trazabilidad</li>
                <li><Check /> Alertas de stock mínimo</li>
                <li><Check /> Valorización de inventario</li>
              </ul>
            </div>
            <div className="feature-ui stock-ui" aria-label="Ejemplo visual del módulo de stock">
              <div className="ui-toolbar"><div><span className="mini-mark" /><b>PRODUCTOS Y STOCK</b></div><button type="button" tabIndex={-1}>+ NUEVO PRODUCTO</button></div>
              <div className="stock-filters"><span className="active">Todos</span><span>Stock crítico <b>15</b></span><span>Sin stock <b>3</b></span><i>⌕ Buscar producto</i></div>
              <div className="stock-table">
                <div className="stock-row stock-head"><span>PRODUCTO</span><span>COSTO</span><span>PRECIO</span><span>STOCK</span><span>ESTADO</span></div>
                <div className="stock-row"><span><b>Gaseosa cola 2,25 L</b><small>Bebidas</small></span><span>$2.480</span><span>$3.850</span><span>42 u.</span><em className="ok">Correcto</em></div>
                <div className="stock-row"><span><b>Agua mineral 2 L</b><small>Bebidas</small></span><span>$920</span><span>$1.420</span><span>6 u.</span><em className="low">Crítico</em></div>
                <div className="stock-row"><span><b>Papel higiénico x4</b><small>Almacén</small></span><span>$1.940</span><span>$2.980</span><span>18 u.</span><em className="ok">Correcto</em></div>
                <div className="stock-row"><span><b>Yerba tradicional 1 kg</b><small>Almacén</small></span><span>$3.120</span><span>$4.550</span><span>3 u.</span><em className="low">Crítico</em></div>
              </div>
            </div>
          </div>

          <div className="container feature-block">
            <div className="feature-copy">
              <span className="feature-index">03 — CUENTA CORRIENTE</span>
              <h3>Cada saldo explicado. Cada pago registrado.</h3>
              <p>Consultá qué debe cada cliente, registrá pagos parciales o completos y aplicalos a los comprobantes seleccionados.</p>
              <ul>
                <li><Check /> Saldos por cliente</li>
                <li><Check /> Pagos parciales y completos</li>
                <li><Check /> Aplicación a comprobantes</li>
                <li><Check /> Recibos e historial</li>
              </ul>
            </div>
            <div className="feature-ui account-ui" aria-label="Ejemplo visual de cuenta corriente">
              <div className="account-head"><div><small>CLIENTE</small><strong>Almacén Don José</strong><span>CUIT 20-12345678-9</span></div><div><small>SALDO ACTUAL</small><strong>$286.450</strong><em>Cuenta activa</em></div></div>
              <div className="account-body">
                <div className="documents"><div className="doc-head"><span>COMPROBANTE</span><span>VENCIMIENTO</span><span>SALDO</span></div><label><input type="checkbox" defaultChecked readOnly /><span><b>Venta #00084</b><small>12 ago. 2026</small></span><em>27 ago.</em><strong>$125.000</strong></label><label><input type="checkbox" defaultChecked readOnly /><span><b>Venta #00103</b><small>19 ago. 2026</small></span><em>03 sep.</em><strong>$98.450</strong></label><label><input type="checkbox" readOnly /><span><b>Venta #00117</b><small>23 ago. 2026</small></span><em>07 sep.</em><strong>$63.000</strong></label></div>
                <aside><small>REGISTRAR PAGO</small><label>Importe<strong>$223.450</strong></label><div><span>Efectivo</span><span className="selected">Transferencia</span></div><button type="button" tabIndex={-1}>CONFIRMAR PAGO</button></aside>
              </div>
            </div>
          </div>
        </section>

        <section className="operations-section">
          <div className="container operations-heading">
            <p className="section-number">04 / OPERACIÓN + INTELIGENCIA</p>
            <h2>Del pedido a la decisión.<br /><span>Sin salir del sistema.</span></h2>
            <p>PulseDesk DIST no termina cuando cobrás: organiza lo que hay que preparar y convierte cada movimiento en información útil.</p>
          </div>

          <div className="command-ribbon" aria-hidden="true">
            <div><span>PEDIDOS</span><i>01</i><span>PREPARACIÓN</span><i>02</i><span>HOJA DE RUTA</span><i>03</i><span>REPORTES</span><i>04</i><span>ALERTAS</span><i>05</i><span>IMPRESIÓN</span><i>06</i><span>PEDIDOS</span><i>01</i><span>PREPARACIÓN</span><i>02</i><span>HOJA DE RUTA</span><i>03</i><span>REPORTES</span><i>04</i></div>
          </div>

          <div className="container command-showcase orders-showcase">
            <div className="command-copy">
              <span>01 / PEDIDOS</span>
              <h3>Pedidos que avanzan.<br />No mensajes que se pierden.</h3>
              <p>Registrá cada pedido con cliente, fecha, productos y total. Consultá qué está pendiente, qué se está preparando y qué ya puede salir.</p>
              <ul><li><Check /> Detalle completo del pedido</li><li><Check /> Estados de preparación</li><li><Check /> Organización por fecha</li><li><Check /> Hoja de ruta para entregas</li></ul>
            </div>
            <div className="orders-console" aria-label="Vista demostrativa del módulo de pedidos">
              <div className="console-top"><div><span className="mini-mark" /><strong>PEDIDOS</strong></div><button type="button" tabIndex={-1}>+ NUEVO PEDIDO</button></div>
              <div className="order-tabs"><span>Todos <b>28</b></span><span className="active">Pendientes <b>8</b></span><span>Preparando <b>5</b></span><span>Listos <b>7</b></span><span>Entregados <b>8</b></span></div>
              <div className="orders-workspace">
                <div className="order-list">
                  <small>PEDIDOS DE HOY</small>
                  <article className="selected"><i>00142</i><div><b>Autoservicio La Esquina</b><span>6 productos · $184.650</span></div><em>PENDIENTE</em></article>
                  <article><i>00141</i><div><b>Kiosco El Puente</b><span>4 productos · $96.200</span></div><em>PREPARANDO</em></article>
                  <article><i>00139</i><div><b>Minimarket Italia</b><span>9 productos · $231.780</span></div><em className="ready">LISTO</em></article>
                  <article><i>00138</i><div><b>Despensa Norte</b><span>5 productos · $118.300</span></div><em className="ready">LISTO</em></article>
                </div>
                <div className="order-detail">
                  <div className="order-detail-head"><div><small>PEDIDO #00142</small><strong>Autoservicio La Esquina</strong><span>Entrega: 26 ago. · Zona Centro</span></div><em>PENDIENTE</em></div>
                  <div className="order-progress"><span className="done"><i>✓</i><b>Recibido</b></span><hr className="done"/><span className="current"><i>2</i><b>Preparando</b></span><hr/><span><i>3</i><b>Listo</b></span><hr/><span><i>4</i><b>Entregado</b></span></div>
                  <div className="order-products"><div><span>PRODUCTO</span><span>CANT.</span><span>SUBTOTAL</span></div><article><span><b>Gaseosa cola 2,25 L</b><small>Bebidas</small></span><em>12</em><strong>$46.200</strong></article><article><span><b>Agua mineral 2 L</b><small>Bebidas</small></span><em>18</em><strong>$25.560</strong></article><article><span><b>Papel higiénico x4</b><small>Almacén</small></span><em>10</em><strong>$29.800</strong></article></div>
                  <div className="order-total"><span>6 productos · 40 unidades</span><strong>TOTAL&nbsp;&nbsp; $184.650</strong></div>
                </div>
              </div>
            </div>
          </div>

          <div className="container command-showcase reports-showcase">
            <div className="command-copy">
              <span>02 / REPORTES Y ESTADÍSTICAS</span>
              <h3>Los números dejan de ser una suposición.</h3>
              <p>Elegí el período y entendé qué pasó: cuánto vendiste, por qué medios cobraste, qué margen obtuviste y cuáles son los productos que más o menos se mueven.</p>
              <ul><li><Check /> Día, semana, mes o rango</li><li><Check /> Ventas y medios de pago</li><li><Check /> Márgenes e inventario</li><li><Check /> Productos top y low</li></ul>
            </div>
            <div className="reports-console" aria-label="Vista demostrativa de reportes y estadísticas">
              <div className="console-top"><div><span className="mini-mark" /><strong>REPORTES</strong></div><div className="period-pills"><span>Día</span><span>Semana</span><span className="active">Mes</span><span>Rango</span></div></div>
              <div className="report-kpis"><article><small>VENTAS NETAS</small><strong>$28.650.000</strong><em>↗ 18,4%</em></article><article><small>MARGEN ESTIMADO</small><strong>$9.110.700</strong><em>31,8%</em></article><article><small>OPERACIONES</small><strong>1.284</strong><em>↗ 126</em></article><article><small>INVENTARIO</small><strong>$18.420.000</strong><em>4.286 u.</em></article></div>
              <div className="reports-body">
                <article className="sales-chart"><div><span>VENTAS DEL MES</span><b>$28,6 M</b></div><svg viewBox="0 0 620 210" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="reportArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#9f6cff" stopOpacity=".42"/><stop offset="1" stopColor="#9f6cff" stopOpacity="0"/></linearGradient></defs><path className="report-area" d="M0 180 52 148 105 159 158 111 211 132 264 74 317 94 370 51 423 69 476 31 529 53 580 18 620 38V210H0Z"/><path className="report-line" d="M0 180 52 148 105 159 158 111 211 132 264 74 317 94 370 51 423 69 476 31 529 53 580 18 620 38"/></svg><div className="chart-labels"><span>01</span><span>05</span><span>10</span><span>15</span><span>20</span><span>25</span><span>30</span></div></article>
                <div className="report-side">
                  <article className="payment-report"><span>MEDIOS DE PAGO</span><div><i style={{width:"72%"}}/><b>Efectivo</b><em>48%</em></div><div><i style={{width:"49%"}}/><b>Transferencia</b><em>32%</em></div><div><i style={{width:"30%"}}/><b>Mixto</b><em>20%</em></div></article>
                  <article className="stock-alert"><div><span>ALERTA DE STOCK</span><b>15</b></div><p>Productos por debajo del mínimo</p><ul><li><i className="critical"/>Agua mineral 2 L <em>6 / mín. 20</em></li><li><i className="critical"/>Yerba 1 kg <em>3 / mín. 10</em></li><li><i/>Papel higiénico x4 <em>8 / mín. 12</em></li></ul></article>
                </div>
              </div>
            </div>
          </div>

          <div className="container utility-deck">
            <article className="utility-alerts"><span>03 / ALERTAS</span><h3>Stock bajo, visible antes de vender.</h3><p>Definí mínimos y detectá productos críticos o agotados desde el tablero.</p><div className="alert-pulse"><i/><b>15 productos requieren atención</b><em>3 sin stock</em></div></article>
            <article className="utility-print"><span>04 / IMPRESIÓN</span><h3>Un formato para cada operación.</h3><p>A4, A5 y tickets térmicos de 80 o 56 mm configurados por empresa.</p><div className="format-stage"><i className="sheet"><b>A4 / A5</b><small>COMPROBANTE</small></i><i className="ticket"><b>80 / 56</b><small>TICKET</small></i></div></article>
            <article className="utility-online"><span>05 / ACCESO</span><h3>Tu negocio también viaja con vos.</h3><p>Entrá de forma segura desde PC, tablet o celular y seguí tu operación estés donde estés.</p><div className="online-signal"><i/><i/><i/><span><b>ONLINE</b><small>PC + MÓVIL</small></span></div></article>
          </div>
        </section>

        <section className="price-section" id="precio">
          <div className="price-glow" aria-hidden="true" />
          <div className="container price-grid">
            <div className="price-copy"><p className="section-number">05 / EMPEZÁ A ORDENAR TU NEGOCIO</p><h2>Menos planillas.<br />Más decisiones.</h2><p>Coordinamos una demo, conocemos tu operación y te mostramos cómo PulseDesk DIST puede trabajar en tu negocio.</p></div>
            <div className="price-card">
              <div className="price-card-top"><span>PLAN DIST</span><em>PRECIO DE ENTRADA</em></div>
              <p>DESDE</p><div className="price-amount"><small>$</small><strong>50.000</strong></div><span className="price-period">PESOS ARGENTINOS / MES</span>
              <ul><li><Check /> Acceso desde PC y celular</li><li><Check /> Gestión integrada del negocio</li><li><Check /> Pedidos, reportes y alertas</li><li><Check /> Configuración según tu operación</li></ul>
              <a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Solicitar una demo <Arrow /></a>
              <small className="price-note">El alcance final se define según las necesidades de cada negocio.</small>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="container faq-grid">
            <div><p className="section-number">06 / PREGUNTAS FRECUENTES</p><h2>Lo importante,<br /><span>antes de empezar.</span></h2><p>Si tu operación tiene una particularidad, la vemos juntos en la demo.</p></div>
            <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2,"0")}</span><strong>{question}</strong><i>+</i></summary><p>{answer}</p></details>)}</div>
          </div>
        </section>

        <section className="final-cta">
          <div className="final-grid" aria-hidden="true" />
          <div className="container final-cta-inner">
            <p className="eyebrow"><i /> PULSEDESK DIST</p>
            <h2>Tu negocio puede estar<br /><span>bajo control.</span></h2>
            <p>Dejá Excel y los cuadernos atrás. Conocé una forma más clara de vender, administrar y crecer.</p>
            <a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Hablar con PulseDesk <Arrow /></a>
            <small>ROSARIO · SANTA FE · ARGENTINA</small>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main"><Brand /><p>Gestión comercial para kioscos, minimarkets, 24 hs y distribuidoras.</p><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp +54 9 341 601 8944 <Arrow /></a></div>
        <div className="container footer-bottom"><span>© 2026 PulseDesk.</span><span>www.pulsedesk.com.ar</span><a href="#inicio">VOLVER ARRIBA ↑</a></div>
      </footer>
    </>
  );
}
