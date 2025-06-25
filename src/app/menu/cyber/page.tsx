"use client";
import Menu from './Menu';
import Analisis from './Analisis';
import Hacking from './Hacking';
import Incidentes from './Incidentes';
import Normativa from './Normativa';
import FooterHome from '@/app/_components/FooterHome';

const globalblogStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
};

export default function CyberPage() {
    return (
        <div style={globalblogStyle}>
            <main style={globalblogStyle}>            
                <Menu/>
                <Analisis/>
                <Hacking/>
                <Incidentes/>
                <Normativa/>
            </main>
            <FooterHome/>
        </div>
    );
}