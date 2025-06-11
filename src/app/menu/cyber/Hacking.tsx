const gen1Style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    background: '#A9B5DF',
    borderRadius: '25px',
    width: '75vw',
    padding: '16px',
    marginLeft: '5vw',
    marginBottom: '2vw',
}

const h1Style: React.CSSProperties = {
    color: '#FFFFFF',
    fontSize: '2rem',
    margin: '0',
    borderRadius: '20px',
    paddingLeft: '20px',
    background: '#7886C7',
    width: '30vw',
    marginBottom: '1vw',
}

export default function Hacking() {
    return (
        <div style={gen1Style}>
            <h1 style={h1Style}>Hacking Ético</h1>
        </div>
    )
}