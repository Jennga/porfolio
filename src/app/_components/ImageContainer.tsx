import Image from 'next/image';

export default function ImageContainer() {
    const textStyle: React.CSSProperties = {
        fontWeight: 'bold',
        WebkitTextStroke: '2px #FFF2F2',
        color: 'transparent',
        display: 'block',
    };

    return (
        <div className="flex flex-col-reverse md:flex-row items-center md:items-center mt-[-120px] px-4">
            <div className="flex-1 text-center md:text-left mt-6 md:mt-0">
                <span
                    style={textStyle}
                    className="block text-4xl sm:text-5xl md:text-[4.5rem]"
                >
                    JENNIFER
                </span>
                <br />
                <span
                    style={textStyle}
                    className="block text-3xl sm:text-4xl md:text-[3rem]"
                >
                    CIBERSEGURIDAD
                </span>
            </div>
            <div className="flex-1 flex justify-center md:justify-start md:ml-8 mb-6 md:mb-0 mt-20 md:mt-0">
                <div className="w-full min-w-[35dvw] flex items-center">
                    <Image
                        src="/caricaturamia.png"
                        alt="caricatura"
                        width={600}
                        height={600}
                        priority
                        className="w-full h-auto rounded-lg object-contain"
                    />
                </div>
            </div>
        </div>
    );
}