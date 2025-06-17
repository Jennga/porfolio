import Image from 'next/image';
import styles from './Tecnology.module.css';


export default function Tecnology() {  
    return (
        <div className={styles.general}>
            <h1 className={styles.h1general}>Tecnologías</h1>
            <div className={styles.tecnodiv}>            
                <h2 className={styles.h2general}>Sistemas Operatiavos</h2>
                <div className={styles.imagesTecno}>
                    <Image className={styles.imagenIndiv} src="tecno/debian.svg" alt="debian" width={60} height={60}/>
                    <Image className={styles.imagenIndiv} src="tecno/kali.svg" alt="kali" width={60} height={60}/>
                    <Image className={styles.imagenIndiv} src="tecno/ubuntu.svg" alt="ubuntu" width={60} height={60}/>
                    <Image className={styles.imagenIndiv} src="tecno/windows.svg" alt="windows" width={60} height={60}/>
                </div>
            </div>            
            <div className={styles.tecnodiv}>
                <h2 className={styles.h2general}>Ciberseguridad</h2>
                <div className={styles.cyber}> 
                    <h3 className={styles.tecnoh3}>Analisis Forense</h3>               
                    <div className={styles.imagesTecno}>
                        <Image className={styles.imagenIndiv} src="tecno/ftk.svg" alt="ftk" width={60} height={60}/>
                        <Image className={styles.imagenIndiv} src="tecno/autopsy.svg" alt="autopsy" width={60} height={60}/>
                        <Image className={styles.imagenIndiv} src="tecno/Avilla.svg" alt="avilla" width={60} height={60}/>
                        <Image className={styles.imagenIndiv} src="tecno/volatility.svg" alt="volatility" width={60} height={60}/>
                        <Image className={styles.imagenIndiv} src="tecno/photorec.svg" alt="photorec" width={60} height={60}/>
                        <Image className={styles.imagenIndiv} src="tecno/TestDisk.svg" alt="tedisk" width={60} height={60}/>
                        <Image className={styles.imagenIndiv} src="tecno/active.svg" alt="active" width={60} height={60}/>
                    </div>
                    <h3 className={styles.tecnoh3}>Hacking ético</h3>
                    <div className={styles.imagesTecno}>
                        <Image className={styles.imagenIndiv} src="tecno/metasploit.svg" alt="metasploit" width={60} height={60}/>
                        <Image className={styles.imagenIndiv} src="tecno/john.svg" alt="john" width={60} height={60}/>
                        <Image className={styles.imagenIndiv} src="tecno/hydra.svg" alt="hydra" width={60} height={60}/>
                        <Image className={styles.imagenIndiv} src="tecno/burp.svg" alt="burp" width={60} height={60}/>
                        <Image className={styles.imagenIndiv} src="tecno/nmap.svg" alt="nmap" width={60} height={60}/>
                        <Image className={styles.imagenIndiv} src="tecno/zap.svg" alt="zap" width={60} height={60}/>
                        <Image className={styles.imagenIndiv} src="tecno/wireshark.svg" alt="wireshark" width={60} height={60}/>
                        <Image className={styles.imagenIndiv} src="tecno/aireodump.svg" alt="aireodump" width={60} height={60}/>                   
                        <Image className={styles.imagenIndiv} src="tecno/gobuster.svg" alt="gobuster" width={60} height={60}/>
                    </div>
                    <h3 className={styles.tecnoh3}>Incidentes de seguridad</h3>
                    <div className={styles.imagesTecno}>
                        <Image className={styles.imagenIndiv} src="tecno/snort.svg" alt="snort" width={90} height={65}/>
                        <Image className={styles.imagenIndiv} src="tecno/suricata.svg" alt="suricata" width={90} height={65}/>
                        <Image className={styles.imagenIndiv} src="tecno/velociraptor.svg" alt="velociraptor" width={150} height={100}/>
                    </div >
                    <h3 className={styles.tecnoh3}>Normativa</h3>
                    <div className={styles.imagesTecno}>
                        <Image className={styles.imagenIndiv} src="tecno/iso.svg" alt="iso" width={60} height={60}/>
                        <Image className={styles.imagenIndiv} src="tecno/owasp.svg" alt="owasp" width={60} height={60}/>
                    </div>
                </div>
            </div>
            <div className={styles.tecnodiv}>
                <h2 className={styles.h2general}>DevOps</h2>
                <div className={styles.imagesTecno}>
                    <Image className={styles.imagenIndiv} src="tecno/docker.svg" alt="docker" width={60} height={60}/>
                    <Image className={styles.imagenIndiv} src="tecno/kubernetes.svg" alt="kubernetes" width={60} height={60}/>
                    <Image className={styles.imagenIndiv} src="tecno/github.svg" alt="github" width={60} height={60}/>
                    <Image className={styles.imagenIndiv} src="tecno/jenkins.svg" alt="jenkins" width={60} height={60}/>
                </div>                               
            </div>
            <div className={styles.tecnodiv}>
                <h2 className={styles.h2general}>Cloud</h2>
                <div className={styles.imagesTecno}>
                    <Image className={styles.imagenIndiv} src="tecno/aws.svg" alt="aws" width={60} height={60}/>
                    <Image className={styles.imagenIndiv} src="tecno/azure.svg" alt="azure" width={60} height={60}/>
                    <Image className={styles.imagenIndiv} src="tecno/digitalocean.svg" alt="digitalosean" width={60} height={60}/>
                </div>                               
            </div>
            <div className={styles.tecnodiv}>
                <h2 className={styles.h2general}>Virtualización</h2>
                <div className={styles.imagesTecno}>
                    <Image className={styles.imagenIndiv} src="tecno/VirtualBox.svg" alt="vitulbox" width={60} height={60}/>
                    <Image className={styles.imagenIndiv} src="tecno/Vmware.svg" alt="vmware" width={60} height={60}/>
                </div>                               
            </div>
            <div className={styles.tecnodiv}>
                <h2 className={styles.h2general}>Lenguaje de programación</h2>
                <div className={styles.imagesTecno}>
                    <Image className={styles.imagenIndiv} src="tecno/bash.svg" alt="bash" width={60} height={60}/>
                    <Image className={styles.imagenIndiv} src="tecno/python.svg" alt="python" width={60} height={60}/>
                    <Image className={styles.imagenIndiv} src="tecno/powershell.svg" alt="powershell" width={60} height={60}/>
                </div>                               
            </div>
            <div className={styles.tecnodiv}>
                <h2 className={styles.h2general}>Frameworks</h2>
                <div className={styles.imagesTecno}>
                    <Image className={styles.imagenIndiv} src="tecno/html.svg" alt="html" width={60} height={60}/>
                    <Image className={styles.imagenIndiv} src="tecno/css.svg" alt="css" width={60} height={60}/>
                    <Image className={styles.imagenIndiv} src="tecno/php.svg" alt="php" width={100} height={60}/>
                    <Image className={styles.imagenIndiv} src="tecno/nextjs.svg" alt="nextjs" width={60} height={60}/>
                </div>                               
            </div>
            <div className={styles.tecnodiv}>
                <h2 className={styles.h2general}>Base de datos</h2>
                <div className={styles.imagesTecno}>
                    <Image className={styles.imagenIndiv} src="tecno/sql.svg" alt="sql" width={60} height={60}/>
                    <Image className={styles.imagenIndiv} src="tecno/sqlite.svg" alt="sqlite" width={100} height={60}/>
                    <Image className={styles.imagenIndiv} src="tecno/mysql.svg" alt="mysql" width={90} height={60}/>
                    <Image className={styles.imagenIndiv} src="tecno/mariadb.svg" alt="mariadb" width={100} height={60}/>
                </div>                               
            </div>
        </div>                   
    );
}
