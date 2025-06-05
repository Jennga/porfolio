import Image from 'next/image';

export default function Tecnology() {
    const containerStyle: React.CSSProperties = {
        width: '95vw',
        padding: '16px',
        boxSizing: 'border-box',
        borderRadius: '8px',
        border: '1px solid #495C83',
    };

    const sectionTitleStyle: React.CSSProperties = {
        textAlign: 'left',
        marginTop: '24px',
        marginBottom: '12px',
        fontSize: '2rem',
    };

    const mainTitleStyle: React.CSSProperties = {
        ...sectionTitleStyle,
        textAlign: 'center', // Centra el h1
    };

    const imagesRowStyle: React.CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        alignItems: 'center',
        marginBottom: '16px',
    };

    const imageStyle: React.CSSProperties = {
        padding: '8px',
        background: '#C8B6E2',
        borderRadius: '8px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
    };

    return (
        <div style={containerStyle}>
            <h1 style={mainTitleStyle}>Tecnologías</h1>            
                <h2 style={sectionTitleStyle}>Sistemas Operatiavos</h2>
                <div style={imagesRowStyle}>
                    <Image style={imageStyle} src="tecno/debian.svg" alt="debian" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/kali.svg" alt="kali" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/ubuntu.svg" alt="ubuntu" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/windows.svg" alt="windows" width={60} height={60}/>
                </div>            
            <div>
                <h2 style={sectionTitleStyle}>Ciberseguridad</h2> 
                <h3>Analisis Forense</h3>               
                <div style={imagesRowStyle}>
                    <Image style={imageStyle} src="tecno/ftk.svg" alt="ftk" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/autopsy.svg" alt="autopsy" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/Avilla.svg" alt="avilla" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/volatility.svg" alt="volatility" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/photorec.svg" alt="photorec" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/TestDisk.svg" alt="tedisk" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/active.svg" alt="active" width={60} height={60}/>
                </div>
                <h3>Hacking ético</h3>
                <div style={imagesRowStyle}>
                    <Image style={imageStyle} src="tecno/metasploit.svg" alt="metasploit" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/john.svg" alt="john" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/hydra.svg" alt="hydra" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/burp.svg" alt="burp" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/nmap.svg" alt="nmap" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/zap.svg" alt="zap" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/wireshark.svg" alt="wireshark" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/aireodump.svg" alt="aireodump" width={60} height={60}/>                   
                    <Image style={imageStyle} src="tecno/gobuster.svg" alt="gobuster" width={60} height={60}/>
                </div>
                <h3>Incidentes de seguridad</h3>
                <div style={imagesRowStyle}>
                    <Image style={imageStyle} src="tecno/debian.svg" alt="debian" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/kali.svg" alt="kali" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/ubuntu.svg" alt="ubuntu" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/windows.svg" alt="windows" width={60} height={60}/>
                </div >
                <h3>Normativa</h3>
                <div style={imagesRowStyle}>
                    <Image style={imageStyle} src="tecno/debian.svg" alt="debian" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/kali.svg" alt="kali" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/ubuntu.svg" alt="ubuntu" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/windows.svg" alt="windows" width={60} height={60}/>
            </div>
            </div>
            <div>
                <h2 style={sectionTitleStyle}>Devops</h2>
                <div style={imagesRowStyle}>
                    <Image style={imageStyle} src="tecno/debian.svg" alt="debian" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/kali.svg" alt="kali" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/ubuntu.svg" alt="ubuntu" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/windows.svg" alt="windows" width={60} height={60}/>
                </div>                               
            </div>
            <div>
                <h2 style={sectionTitleStyle}>Cloud</h2>
                <div style={imagesRowStyle}>
                    <Image style={imageStyle} src="tecno/debian.svg" alt="debian" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/kali.svg" alt="kali" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/ubuntu.svg" alt="ubuntu" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/windows.svg" alt="windows" width={60} height={60}/>
                </div>                               
            </div>
            <div>
                <h2 style={sectionTitleStyle}>Virtualización</h2>
                <div style={imagesRowStyle}>
                    <Image style={imageStyle} src="tecno/debian.svg" alt="debian" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/kali.svg" alt="kali" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/ubuntu.svg" alt="ubuntu" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/windows.svg" alt="windows" width={60} height={60}/>
                </div>                               
            </div>
            <div>
                <h2 style={sectionTitleStyle}>Lenguaje de programación</h2>
                <div style={imagesRowStyle}>
                    <Image style={imageStyle} src="tecno/debian.svg" alt="debian" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/kali.svg" alt="kali" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/ubuntu.svg" alt="ubuntu" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/windows.svg" alt="windows" width={60} height={60}/>
                </div>                               
            </div>
            <div>
                <h2 style={sectionTitleStyle}>Frameworks</h2>
                <div style={imagesRowStyle}>
                    <Image style={imageStyle} src="tecno/debian.svg" alt="debian" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/kali.svg" alt="kali" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/ubuntu.svg" alt="ubuntu" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/windows.svg" alt="windows" width={60} height={60}/>
                </div>                               
            </div>
            <div>
                <h2 style={sectionTitleStyle}>Base de datos</h2>
                <div style={imagesRowStyle}>
                    <Image style={imageStyle} src="tecno/debian.svg" alt="debian" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/kali.svg" alt="kali" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/ubuntu.svg" alt="ubuntu" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/windows.svg" alt="windows" width={60} height={60}/>
                </div>                               
            </div>
        </div>                   
    );
}
