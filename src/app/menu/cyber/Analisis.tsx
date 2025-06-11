const gen1Style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    background: '#7886C7',
    borderRadius: '25px',
    width: '75vw',
    padding: '16px',
    marginLeft: '5vw',
    marginTop: '-10vw',
    marginBottom: '2vw',
}

const h1Style: React.CSSProperties = {
    color: '#FFFFFF',
    fontSize: '2rem',
    margin: '0',
    borderRadius: '20px',
    paddingLeft: '20px',
    background: '#A9B5DF',
    width: '30vw',
    marginBottom: '1vw',
}

export default function Analisis() {
    return (
        <div style={gen1Style}>
            <h1 style={h1Style}>Análisis Forense</h1>
        </div>
    )
}