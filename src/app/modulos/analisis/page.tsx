"use client";
import FooterHome from '@/app/_components/FooterHome';
import Menu from '@/app/menu/cyber/Menu';

const globalblogStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
};

export default function Page() {
    return (
         <div style={globalblogStyle}>
            <main style={globalblogStyle}>            
                <Menu/>
            </main>
                <FooterHome/>
        </div>  
    );
}
