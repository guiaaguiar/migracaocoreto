import { Link, useNavigate } from 'react-router-dom'
import Header from '../../../components/Header'
import img404 from '../../../assets/404.png'

export default function NotFoundPage() {
  const navigate = useNavigate()

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/legacy')
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
      <Header />
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '56px',
          maxWidth: '980px',
          width: '100%',
          margin: '0 auto',
          padding: '40px 24px',
          boxSizing: 'border-box',
          fontFamily: "'DM Sans', 'Inter', system-ui, -apple-system, sans-serif",
        }}
      >
        {/* ── Esquerda: Título 404 e Ilustração ── */}
        <div
          style={{
            flex: '1 1 360px',
            maxWidth: '420px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Número 404 gigante */}
          <div
            style={{
              fontSize: 'clamp(90px, 12vw, 136px)',
              fontWeight: 900,
              color: '#1d2d4c',
              lineHeight: 0.85,
              letterSpacing: '-0.04em',
              marginBottom: '16px',
              textAlign: 'center',
              userSelect: 'none',
            }}
          >
            404
          </div>

          {/* Imagem de trabalhadores com robô */}
          <img
            src={img404}
            alt="Ilustração de erro 404 - Equipe trabalhando no sistema"
            style={{
              width: '100%',
              maxWidth: '360px',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </div>

        {/* ── Direita: Mensagem de Erro e Ações ── */}
        <div
          style={{
            flex: '1 1 440px',
            maxWidth: '560px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(26px, 3.5vw, 36px)',
              fontWeight: 800,
              color: '#1d2d4c',
              lineHeight: 1.25,
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Estamos constrangidos em</span>
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>te ver por aqui</span>
          </h1>

          <h2
            style={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#1d2d4c',
              lineHeight: 1.45,
              marginBottom: '20px',
            }}
          >
            Mas podemos ajudá-lo a encontrar o que está procurando de outra forma
          </h2>

          <p
            style={{
              fontSize: '14px',
              color: '#334155',
              lineHeight: 1.55,
              marginBottom: '32px',
              maxWidth: '480px',
            }}
          >
            Talvez você tenha se equivocado ao digitar o endereço URL ou quem sabe nós tenhamos cometido uma falha por aqui. Se possível, relate o erro para que possamos sempre estar melhorando.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '14px',
            }}
          >
            {/* Link: Ir pra página anterior */}
            <button
              onClick={handleGoBack}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'none',
                border: 'none',
                padding: 0,
                color: '#00a8b5',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#008b96'
                e.currentTarget.style.transform = 'translateX(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#00a8b5'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <span style={{ fontSize: '18px', lineHeight: 1 }}>←</span>
              <span>Ir pra pagina anterior</span>
            </button>

            {/* Link: Ir para a página principal */}
            <Link
              to="/legacy"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#00a8b5',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#008b96'
                e.currentTarget.style.transform = 'translateX(3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#00a8b5'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Ir para a página principal</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
