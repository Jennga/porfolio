import Image from 'next/image';

export default function Tecnology() {
    const containerStyle: React.CSSProperties = {
        width: '95vw',
        padding: '16px',
        color: '#d1d3f9',
    };

    const sectionTitleStyle: React.CSSProperties = {
        textAlign: 'left',
        marginTop: '0',
        marginBottom: '12px',
        fontSize: '1.5rem',
    };

    const mainTitleStyle: React.CSSProperties = {
        ...sectionTitleStyle,
        textAlign: 'center', // Centra el h1
        fontSize: '2.5rem',
    };

    const imagesRowStyle: React.CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        alignItems: 'center',
        margin: '16px',
    };

    const imageStyle: React.CSSProperties = {
        padding: '8px',
        background: '#d1d3f9',
        borderRadius: '8px',
        width: '4vw',
        height: '4vw',
        minWidth: '48px',
        minHeight: '48px',  
        objectFit: 'contain',
    };
    const tecnolStyle: React.CSSProperties = {
        borderRadius: '25px',
        padding: '16px',
        margin: '16px',
        border: '2px double rgba(72, 113, 181, 1)', // Borde doble sutil
        backdropFilter: 'blur(2px)',
    };
    const cyberStyle: React.CSSProperties = {
        padding: '16px',
        margin: '16px',
        
    };
    return (
        <div style={containerStyle}>
            <h1 style={mainTitleStyle}>Tecnologías</h1>
            <div style={tecnolStyle}>            
                <h2 style={sectionTitleStyle}>Sistemas Operatiavos</h2>
                <div style={imagesRowStyle}>
                    <Image style={imageStyle} src="tecno/debian.svg" alt="debian" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/kali.svg" alt="kali" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/ubuntu.svg" alt="ubuntu" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/windows.svg" alt="windows" width={60} height={60}/>
                </div>
            </div>            
            <div style={tecnolStyle}>
                <h2 style={sectionTitleStyle}>Ciberseguridad</h2>
                <div style={cyberStyle}> 
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
                        <Image style={imageStyle} src="tecno/snort.svg" alt="snort" width={65} height={65}/>
                        <Image style={imageStyle} src="tecno/suricata.svg" alt="suricata" width={65} height={65}/>
                        <Image style={imageStyle} src="tecno/velociraptor.svg" alt="velociraptor" width={65} height={80}/>
                    </div >
                    <h3>Normativa</h3>
                    <div style={imagesRowStyle}>
                        <Image style={imageStyle} src="tecno/iso.svg" alt="iso" width={60} height={60}/>
                        <Image style={imageStyle} src="tecno/owasp.svg" alt="owasp" width={60} height={60}/>
                    </div>
                </div>
            </div>
            <div style={tecnolStyle}>
                <h2 style={sectionTitleStyle}>DevOps</h2>
                <div style={imagesRowStyle}>
                    <Image style={imageStyle} src="tecno/docker.svg" alt="docker" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/kubernetes.svg" alt="kubernetes" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/github.svg" alt="github" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/jenkins.svg" alt="jenkins" width={60} height={60}/>
                </div>                               
            </div>
            <div style={tecnolStyle}>
                <h2 style={sectionTitleStyle}>Cloud</h2>
                <div style={imagesRowStyle}>
                    <Image style={imageStyle} src="tecno/aws.svg" alt="aws" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/azure.svg" alt="azure" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/digitalocean.svg" alt="digitalosean" width={60} height={60}/>
                </div>                               
            </div>
            <div style={tecnolStyle}>
                <h2 style={sectionTitleStyle}>Virtualización</h2>
                <div style={imagesRowStyle}>
                    <Image style={imageStyle} src="tecno/VirtualBox.svg" alt="vitulbox" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/Vmware.svg" alt="vmware" width={60} height={60}/>
                </div>                               
            </div>
            <div style={tecnolStyle}>
                <h2 style={sectionTitleStyle}>Lenguaje de programación</h2>
                <div style={imagesRowStyle}>
                    <Image style={imageStyle} src="tecno/bash.svg" alt="bash" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/python.svg" alt="python" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/powershell.svg" alt="powershell" width={60} height={60}/>
                </div>                               
            </div>
            <div style={tecnolStyle}>
                <h2 style={sectionTitleStyle}>Frameworks</h2>
                <div style={imagesRowStyle}>
                    <Image style={imageStyle} src="tecno/html.svg" alt="html" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/css.svg" alt="css" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/php.svg" alt="php" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/nextjs.svg" alt="nextjs" width={60} height={60}/>
                </div>                               
            </div>
            <div style={tecnolStyle}>
                <h2 style={sectionTitleStyle}>Base de datos</h2>
                <div style={imagesRowStyle}>
                    <Image style={imageStyle} src="tecno/sql.svg" alt="sql" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/sqlite.svg" alt="sqlite" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/mysql.svg" alt="mysql" width={60} height={60}/>
                    <Image style={imageStyle} src="tecno/mariadb.svg" alt="mariadb" width={60} height={60}/>
                </div>                               
            </div>
        </div>                   
    );
}
