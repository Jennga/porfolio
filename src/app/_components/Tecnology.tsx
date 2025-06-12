import Image from 'next/image';
import './TecnologyResponsive.css';

export default function Tecnology() {
    const gen1Style: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        background: '#7886C7',
        borderRadius: '25px',
        width: '90vw',
        padding: '16px',
        marginBottom: '0.5vw',
}

    const h1Style: React.CSSProperties = {
        color: '#FFFFFF',
        fontSize: '2rem',
        margin: '0',
        borderRadius: '20px',
        paddingLeft: '20px',
        background: '#A9B5DF',
        width: '30vw',
        marginBottom: '3vw',
}    

    const h2Style: React.CSSProperties = {
        color: '#FFFFFF',
        fontSize: '1.3rem',
        margin: '0',
        paddingLeft: '20px',
        width: '25vw',
        marginBottom: '1vw',
    };

    const h3Style: React.CSSProperties = {
        color: '#FFFFFF',
        fontSize: '1rem',
        margin: '0',
        paddingLeft: '20px',
        width: '20vw',
        marginBottom: '1vw',
    };

    const imagesRowStyle: React.CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        alignItems: 'center',
        marginLeft:'1.3vw',
        padding:'14px',
        borderLeft: '3px solid #A9B5DF',
        marginBottom: '1.3vw',
    };
  
    const tecnolStyle: React.CSSProperties = {
        padding: '0',
        marginLeft: '2vw',
        marginBottom: '1.3vw',
                
    };
    const cyberStyle: React.CSSProperties = {
        padding: '16px',
        marginLeft: '2vw',
        
    };

    return (
        <div style={gen1Style} className="tecnology-gen1">
            <h1 style={h1Style} className="tecnology-h1">Tecnologías</h1>
            <div style={tecnolStyle}>            
                <h2 style={h2Style} className="tecnology-h2">Sistemas Operatiavos</h2>
                <div style={imagesRowStyle} className="tecnology-images-row">
                    <Image className="tecnology-img" src="tecno/debian.svg" alt="debian" width={60} height={60}/>
                    <Image className="tecnology-img" src="tecno/kali.svg" alt="kali" width={60} height={60}/>
                    <Image className="tecnology-img" src="tecno/ubuntu.svg" alt="ubuntu" width={60} height={60}/>
                    <Image className="tecnology-img" src="tecno/windows.svg" alt="windows" width={60} height={60}/>
                </div>
            </div>            
            <div style={tecnolStyle}>
                <h2 style={h2Style} className="tecnology-h2">Ciberseguridad</h2>
                <div style={cyberStyle}> 
                    <h3 style={h3Style} className="tecnology-h3">Analisis Forense</h3>               
                    <div style={imagesRowStyle} className="tecnology-images-row">
                        <Image className="tecnology-img" src="tecno/ftk.svg" alt="ftk" width={60} height={60}/>
                        <Image className="tecnology-img" src="tecno/autopsy.svg" alt="autopsy" width={60} height={60}/>
                        <Image className="tecnology-img" src="tecno/Avilla.svg" alt="avilla" width={60} height={60}/>
                        <Image className="tecnology-img" src="tecno/volatility.svg" alt="volatility" width={60} height={60}/>
                        <Image className="tecnology-img" src="tecno/photorec.svg" alt="photorec" width={60} height={60}/>
                        <Image className="tecnology-img" src="tecno/TestDisk.svg" alt="tedisk" width={60} height={60}/>
                        <Image className="tecnology-img" src="tecno/active.svg" alt="active" width={60} height={60}/>
                    </div>
                    <h3 style={h3Style} className="tecnology-h3">Hacking ético</h3>
                    <div style={imagesRowStyle} className="tecnology-images-row">
                        <Image className="tecnology-img" src="tecno/metasploit.svg" alt="metasploit" width={60} height={60}/>
                        <Image className="tecnology-img" src="tecno/john.svg" alt="john" width={60} height={60}/>
                        <Image className="tecnology-img" src="tecno/hydra.svg" alt="hydra" width={60} height={60}/>
                        <Image className="tecnology-img" src="tecno/burp.svg" alt="burp" width={60} height={60}/>
                        <Image className="tecnology-img" src="tecno/nmap.svg" alt="nmap" width={60} height={60}/>
                        <Image className="tecnology-img" src="tecno/zap.svg" alt="zap" width={60} height={60}/>
                        <Image className="tecnology-img" src="tecno/wireshark.svg" alt="wireshark" width={60} height={60}/>
                        <Image className="tecnology-img" src="tecno/aireodump.svg" alt="aireodump" width={60} height={60}/>                   
                        <Image className="tecnology-img" src="tecno/gobuster.svg" alt="gobuster" width={60} height={60}/>
                    </div>
                    <h3 style={h3Style} className="tecnology-h3">Incidentes de seguridad</h3>
                    <div style={imagesRowStyle} className="tecnology-images-row">
                        <Image className="tecnology-img" src="tecno/snort.svg" alt="snort" width={90} height={65}/>
                        <Image className="tecnology-img" src="tecno/suricata.svg" alt="suricata" width={90} height={65}/>
                        <Image className="tecnology-img" src="tecno/velociraptor.svg" alt="velociraptor" width={150} height={100}/>
                    </div >
                    <h3 style={h3Style} className="tecnology-h3">Normativa</h3>
                    <div style={imagesRowStyle} className="tecnology-images-row">
                        <Image className="tecnology-img" src="tecno/iso.svg" alt="iso" width={60} height={60}/>
                        <Image className="tecnology-img" src="tecno/owasp.svg" alt="owasp" width={60} height={60}/>
                    </div>
                </div>
            </div>
            <div style={tecnolStyle}>
                <h2 style={h2Style} className="tecnology-h2">DevOps</h2>
                <div style={imagesRowStyle} className="tecnology-images-row">
                    <Image className="tecnology-img" src="tecno/docker.svg" alt="docker" width={60} height={60}/>
                    <Image className="tecnology-img" src="tecno/kubernetes.svg" alt="kubernetes" width={60} height={60}/>
                    <Image className="tecnology-img" src="tecno/github.svg" alt="github" width={60} height={60}/>
                    <Image className="tecnology-img" src="tecno/jenkins.svg" alt="jenkins" width={60} height={60}/>
                </div>                               
            </div>
            <div style={tecnolStyle}>
                <h2 style={h2Style} className="tecnology-h2">Cloud</h2>
                <div style={imagesRowStyle} className="tecnology-images-row">
                    <Image className="tecnology-img" src="tecno/aws.svg" alt="aws" width={60} height={60}/>
                    <Image className="tecnology-img" src="tecno/azure.svg" alt="azure" width={60} height={60}/>
                    <Image className="tecnology-img" src="tecno/digitalocean.svg" alt="digitalosean" width={60} height={60}/>
                </div>                               
            </div>
            <div style={tecnolStyle}>
                <h2 style={h2Style} className="tecnology-h2">Virtualización</h2>
                <div style={imagesRowStyle} className="tecnology-images-row">
                    <Image className="tecnology-img" src="tecno/VirtualBox.svg" alt="vitulbox" width={60} height={60}/>
                    <Image className="tecnology-img" src="tecno/Vmware.svg" alt="vmware" width={60} height={60}/>
                </div>                               
            </div>
            <div style={tecnolStyle}>
                <h2 style={h2Style} className="tecnology-h2">Lenguaje de programación</h2>
                <div style={imagesRowStyle} className="tecnology-images-row">
                    <Image className="tecnology-img" src="tecno/bash.svg" alt="bash" width={60} height={60}/>
                    <Image className="tecnology-img" src="tecno/python.svg" alt="python" width={60} height={60}/>
                    <Image className="tecnology-img" src="tecno/powershell.svg" alt="powershell" width={60} height={60}/>
                </div>                               
            </div>
            <div style={tecnolStyle}>
                <h2 style={h2Style} className="tecnology-h2">Frameworks</h2>
                <div style={imagesRowStyle} className="tecnology-images-row">
                    <Image className="tecnology-img" src="tecno/html.svg" alt="html" width={60} height={60}/>
                    <Image className="tecnology-img" src="tecno/css.svg" alt="css" width={60} height={60}/>
                    <Image className="tecnology-img" src="tecno/php.svg" alt="php" width={100} height={60}/>
                    <Image className="tecnology-img" src="tecno/nextjs.svg" alt="nextjs" width={60} height={60}/>
                </div>                               
            </div>
            <div style={tecnolStyle}>
                <h2 style={h2Style} className="tecnology-h2">Base de datos</h2>
                <div style={imagesRowStyle} className="tecnology-images-row">
                    <Image className="tecnology-img" src="tecno/sql.svg" alt="sql" width={60} height={60}/>
                    <Image className="tecnology-img" src="tecno/sqlite.svg" alt="sqlite" width={100} height={60}/>
                    <Image className="tecnology-img" src="tecno/mysql.svg" alt="mysql" width={90} height={60}/>
                    <Image className="tecnology-img" src="tecno/mariadb.svg" alt="mariadb" width={100} height={60}/>
                </div>                               
            </div>
        </div>                   
    );
}
