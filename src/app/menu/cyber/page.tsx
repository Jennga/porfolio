"use client";
import Menu from './Menu';
import Analisis from './Analisis';
import Hacking from './Hacking';
import Normativa from './Normativa';
import FooterHome from '@/app/_components/FooterHome';

const globalblogStyle: React.CSSProperties = {
    flex: 1
};

export default function CyberPage() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh'
        }}>
            <main style={globalblogStyle}>            
                <Menu/>
                <Analisis/>
                <Hacking/>
                <Normativa/>
            </main>
            <FooterHome/>
        </div>
    );
}